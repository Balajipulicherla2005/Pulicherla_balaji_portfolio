import { defineConfig, devices } from '@playwright/test';

const BASE_URL = 'http://localhost:4173';

// Demo mode: set DEMO=1 to watch the tests click through the site in a single
// visible window, one action at a time (slow motion).
const DEMO = process.env.DEMO === '1';

// All browsers: set ALL_BROWSERS=1 to also run Firefox, WebKit and mobile.
// By default we run Chromium + mobile-chrome only, because Firefox/WebKit can be
// unstable in headless mode on some Windows machines (graphics driver crashes).
const ALL_BROWSERS = process.env.ALL_BROWSERS === '1';

const chromiumProjects = [
  {
    // Full functional suite runs on desktop Chromium.
    name: 'chromium',
    use: { ...devices['Desktop Chrome'] },
  },
  {
    // Mobile only runs the responsive/layout + smoke checks. Interaction-heavy
    // flows (modals, filters, deep scrolling) are validated on desktop; on the
    // small animated mobile viewport they are flaky and low-value to duplicate.
    name: 'mobile-chrome',
    use: { ...devices['Pixel 5'] },
    testMatch: /(responsive|sections)\.spec\.js/,
  },
];

const extraProjects = [
  {
    name: 'firefox',
    use: {
      ...devices['Desktop Firefox'],
      // Force software rendering to avoid RenderCompositorSWGL crashes on Windows.
      launchOptions: {
        firefoxUserPrefs: {
          'gfx.webrender.software': true,
          'gfx.canvas.accelerated': false,
        },
      },
    },
  },
  {
    name: 'webkit',
    use: { ...devices['Desktop Safari'] },
  },
];

export default defineConfig({
  testDir: './tests',
  fullyParallel: !DEMO,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  // One worker in demo/CI so only a single browser window runs at a time.
  workers: DEMO || process.env.CI ? 1 : undefined,
  // Give slower browsers more headroom so a slow scroll never times out.
  timeout: 60 * 1000,
  expect: { timeout: 10 * 1000 },
  reporter: [['html', { open: 'never' }], ['list']],

  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    headless: !DEMO,
    launchOptions: {
      // Pause between actions in demo mode so each click is visible.
      slowMo: DEMO ? 1000 : 0,
    },
  },

  projects: ALL_BROWSERS ? [...chromiumProjects, ...extraProjects] : chromiumProjects,

  // Build once, then serve the production build for stable, fast tests.
  webServer: {
    command: 'npm run build && npm run preview',
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});
