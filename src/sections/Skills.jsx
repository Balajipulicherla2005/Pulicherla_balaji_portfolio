import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import './Skills.css';

export default function Skills() {
  const { skills } = portfolioData;

  const skillCategories = [
    { key: 'frontend', label: 'Frontend', icon: '🎨' },
    { key: 'backend', label: 'Backend', icon: '⚙️' },
    { key: 'database', label: 'Database', icon: '💾' },
    { key: 'Testing', label: 'Software Testing & QA', icon: '🧪' },
    { key: 'realtime', label: 'Real-time', icon: '⚡' },
    { key: 'mobile', label: 'Mobile', icon: '📱' },
    { key: 'devops', label: 'DevOps', icon: '🚀' },
    { key: 'tools', label: 'Tools', icon: '🛠️' },
    { key: 'ai', label: 'AI/Specialized', icon: '🤖' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Technical Skills</h2>
          <div className="header-line"></div>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.key}
              variants={itemVariants}
              className="skill-category"
              whileHover={{ y: -5 }}
            >
              <div className="skill-header">
                <span className="skill-icon">{category.icon}</span>
                <h3>{category.label}</h3>
              </div>
              <div className="skill-list">
                {skills[category.key]?.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    className="skill-item"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
