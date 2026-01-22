import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import styles from '../styles/Technologies.module.css';
import Row from 'react-bootstrap/Row';
import ScrollAnimation from '../components/ScrollAnimation';
import { motion } from 'framer-motion';

function Technologies() {

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
    <Container className={styles.Container}>
      <ScrollAnimation animationVariants={{
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
  }}>
        <Row className={styles.TechBox}>
          
          {/* <h2 className={styles.SectionTitle}>Technologies & Tools</h2>
          <p className={styles.IntroText}>
            Throughout my journey as a software developer, I've worked with a diverse range of technologies:
          </p> */}

        
         {/* Values Section */}
        <motion.section 
          className={styles.ValuesSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className={styles.SectionEyebrow}>TECHNOLOGIES</h2>
           
          </motion.div>
       
     
        
          
          <div className={styles.ValuesGrid}>
            {[
              { icon: '👩‍💻', title: 'Languages', description: 'HTML, CSS, Python, JavaScript, SQL' },
              { icon: '💻', title: 'Frameworks', description: 'React, Bootstrap, Django, Flask, Node.js, TypeScript' },
              { icon: '🖥️', title: 'APIs & Tools', description: 'Git, RESTful APIs' },
              { icon: '🔰', title: 'Environments', description: 'GitHub, Xcode, VS Code' },
              { icon: '📈', title: 'Data Analytics', description: 'Power BI, SQL Server Management Studio (SSMS), Excel' },
              { icon: '📊', title: 'Visualisation and Reporting', description: 'Power BI, Excel' }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className={styles.ValueCard}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.ValueIcon}>{value.icon}</div>
                <h3 className={styles.ValueTitle}>{value.title}</h3>
                <p className={styles.ValueDescription}>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

          

        </Row>

       


        {/* Values Section
        <motion.section 
          className="values-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <span className="section-eyebrow">CORE PRINCIPLES</span>
            <h2 className="section-title">My Values</h2>
          </motion.div>
          
          <div className="values-grid">
            {[
              { icon: '🎯', title: 'Authenticity', description: 'Human-centered storytelling that connects' },
              { icon: '✨', title: 'Craftsmanship', description: 'Precision in every frame and edit' },
              { icon: '🤝', title: 'Collaboration', description: 'Partnerships built on trust' },
              { icon: '🚀', title: 'Innovation', description: 'Pushing creative boundaries forward' },
              { icon: '❤️', title: 'Passion', description: 'Love for the art of storytelling' },
              { icon: '⚡', title: 'Impact', description: 'Creating work that moves people' }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="value-card"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section> */}
      </ScrollAnimation>
    </Container>
  );
}

export default Technologies;