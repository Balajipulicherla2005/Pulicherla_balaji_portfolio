import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import './Experience.css';

export default function Experience() {
  const { experience } = portfolioData;

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
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Professional Experience</h2>
          <div className="header-line"></div>
        </motion.div>

        <motion.div
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experience.map((job, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="timeline-item"
            >
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                {index !== experience.length - 1 && <div className="marker-line"></div>}
              </div>

              <div className="timeline-content">
                <div className="job-header">
                  <div>
                    <h3>{job.position}</h3>
                    <p className="company">{job.company}</p>
                  </div>
                  <span className="duration">{job.duration}</span>
                </div>

                <p className="job-description">{job.description}</p>

                <div className="achievements">
                  <h4>Key Achievements</h4>
                  <ul>
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div className="tech-stack">
                  {job.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
