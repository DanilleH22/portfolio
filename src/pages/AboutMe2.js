import React from 'react';
import { motion } from 'framer-motion';
import "../styles/about.css";
import me4 from '../assets/me4.jpeg';
import me6 from '../assets/me6.jpeg';






const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };




  




  return (
    <>
    
     
      
      <div className="about-container">
       

      

       {/* Our Story Section */}
        <div className="story-grid">
  {/* Image 1 - Left side */}
  <motion.div className="story-image-container" variants={itemVariants}>
    <img src={me6} alt="Me" className="badge-image" />
    <div className="image-badge">
      <span className="badge-dot">◉</span>
      <span>SINCE 2023</span>
    </div>
  </motion.div>
  
  {/* Content - Middle */}
  <motion.div className="story-content" variants={itemVariants}>
    <div className="section-header">
                <span className="section-eyebrow">WHO AM I</span>
                <h2 className="section-title">About me</h2>
              </div>
              <h3 className="story-tagline">
                I’m a Senior Analyst with a strong technical background in data, automation, and full-stack development. I work at the intersection of operations, systems, and human decision-making — building tools that turn complex processes into reliable, scalable solutions.
              </h3>
              <p className="story-description">
                My experience spans regulated, high-volume environments across healthcare and energy, where accuracy, data quality, and clear logic matter. In these settings, I’ve partnered closely with operational teams to analyse workflows, surface inefficiencies, and design systems that reduce manual effort while preserving the right level of human judgement. Much of my work focuses on SQL, Python, dashboards, and automation that supports real operational decision-making — not just reporting for reporting’s sake.
              </p>
              <p className="story-description">
                Alongside my analytics work, I’m a full-stack developer with hands-on experience building data-driven web applications using React, Django, APIs, and PostgreSQL. This allows me to take ideas from concept through to production, whether that’s an internal operations tool, a client-facing platform, or a product that needs both strong logic and a thoughtful user experience.
              </p>
  </motion.div>
  
  {/* Image 2 - Right side */}
  <motion.div className="mission-image-container" variants={itemVariants}>
    <img src={me4} alt="Me" className="badge-image" />
  </motion.div>
</div>

       

        {/* Our Mission Section */}
        <motion.section 
          className="mission-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="mission-grid2">
            <motion.div className="mission-content" variants={itemVariants}>
              <div className="section-header">
                <h2 className="section-eyebrow">MY DRIVE</h2>
              
              </div>
              
              <div className="mission-points">
                <motion.div 
                  className="mission-point"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="point-header">
                    <div className="point-icon">✓</div>
                    <h3 className="point-title">Deep Technical Proficiency</h3>
                  </div>
                  <p className="point-description">
                    Deliver high-quality video content that exceeds client expectations with cinematic precision.
                  </p>
                </motion.div>

                <motion.div 
                  className="mission-point"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="point-header">
                    <div className="point-icon">♾️</div>
                    <h3 className="point-title">Strong Analytical Problem-Solving</h3>
                  </div>
                  <p className="point-description">
                    A "never say die" attitude toward debugging, fixing data quality issues, and optimizing for efficiency.
                  </p>
                </motion.div>

                <motion.div 
                  className="mission-point"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="point-header">
                    <div className="point-icon">⚡</div>
                    <h3 className="point-title">Effective Communication</h3>
                  </div>
                  <p className="point-description">
                    Acting as a bridge between technical teams and business needs to ensure the work delivers real value. 
                  </p>
                </motion.div>
              </div>

             
            </motion.div>

           
          </div>
        </motion.section>

        

       
      
      </div>


   
    </>
  );
}

export default About;