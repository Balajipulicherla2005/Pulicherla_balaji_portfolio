import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import './Education.css';

export default function Education() {
  const { education } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="education" className="education">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Education</h2>
          <div className="header-line"></div>
        </motion.div>

        <motion.div
          className="education-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="education-card"
              whileHover={{ y: -5 }}
            >
              <div className="education-icon">
                {index === 0 ? '🎓' : '📚'}
              </div>

              <div className="education-content">
                <h3>{edu.degree}</h3>
                <p className="field">{edu.field}</p>
                <p className="institution">{edu.institution}</p>
                <div className="education-footer">
                  <span className="duration">{edu.duration}</span>
                  <span className={`status ${edu.status.toLowerCase()}`}>
                    {edu.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
