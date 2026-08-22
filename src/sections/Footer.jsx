import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import './Footer.css';

export default function Footer() {
  const { name, location } = portfolioData.personal;

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="footer-copyright">
            <p>@2026 {name}</p>
            <p>{location}</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
