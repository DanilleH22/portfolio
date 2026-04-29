import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import styles from '../styles/Technologies.module.css';
import Row from 'react-bootstrap/Row';
import ScrollAnimation from '../components/ScrollAnimation';
import { motion } from 'framer-motion';
import { Circle, Star } from 'react-bootstrap-icons';

function Technologies() {

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

  // NEW: Skill levels for client confidence
  const getSkillBadge = (level) => {
    if (level === 'expert') return <span className={styles.expertBadge}><Star /> Expert</span>;
    if (level === 'advanced') return <span className={styles.advancedBadge}>Advanced</span>;
    return null;
  };

  return (
    <Container className={styles.Container}>
      <ScrollAnimation animationVariants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } }
      }}>
        <Row className={styles.TechBox}>
          
          {/* Updated header for freelancing */}
          <motion.section 
            className={styles.ValuesSection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div className="section-header" variants={itemVariants}>
              <span className={styles.SectionEyebrow}>TECHNOLOGIES & TOOLS</span>
              <h2 className={styles.SectionTitle}>What I Can Build For You</h2>
              <p className={styles.SectionSubtitle}>
                I use modern, industry-standard technologies to build fast, responsive, and scalable websites.
                Here's what I specialize in:
              </p>
            </motion.div>
         
            <div className={styles.ValuesGrid}>
              {/* Frontend Development - Most important for freelancing */}
              <motion.div 
                className={styles.ValueCard}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className={styles.ValueIcon}>🎨</div>
                <h3 className={styles.ValueTitle}>Frontend Development</h3>
                <p className={styles.ValueDescription}>React, HTML5, CSS3, JavaScript, Bootstrap, Webflow</p>
                <div className={styles.skillLevel}>
                  <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: '90%' }}></div>
                  </div>
                  <span className={styles.levelText}>Advanced</span>
                </div>
                <p className={styles.whatCanBuild}>✓ Responsive websites that work on all devices</p>
              </motion.div>

              {/* Backend Development */}
              <motion.div 
                className={styles.ValueCard}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className={styles.ValueIcon}>⚙️</div>
                <h3 className={styles.ValueTitle}>Backend Development</h3>
                <p className={styles.ValueDescription}>Python, Django, Node.js, PostgreSQL, REST APIs</p>
                <div className={styles.skillLevel}>
                  <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: '75%' }}></div>
                  </div>
                  <span className={styles.levelText}>Intermediate-Advanced</span>
                </div>
                <p className={styles.whatCanBuild}>✓ Custom web applications with databases</p>
              </motion.div>

              {/* Full Stack - What clients really want to hear */}
              <motion.div 
                className={`${styles.ValueCard} ${styles.featuredCard}`}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className={styles.ValueIcon}>🚀</div>
                <h3 className={styles.ValueTitle}>Full Stack Development</h3>
                <p className={styles.ValueDescription}>Combined frontend + backend expertise</p>
                <div className={styles.featuredBadge}>
                  <Circle /> Most Requested
                </div>
                <p className={styles.whatCanBuild}>✓ Complete websites from scratch to deployment</p>
              </motion.div>

              {/* Tools & Version Control */}
              <motion.div 
                className={styles.ValueCard}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className={styles.ValueIcon}>🛠️</div>
                <h3 className={styles.ValueTitle}>Development Tools</h3>
                <p className={styles.ValueDescription}>Git, GitHub, VS Code, Xcode</p>
                <div className={styles.skillLevel}>
                  <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: '85%' }}></div>
                  </div>
                  <span className={styles.levelText}>Advanced</span>
                </div>
                <p className={styles.whatCanBuild}>✓ Version control and collaborative development</p>
              </motion.div>

              {/* Data & Analytics - Keep but rephrase for clients */}
              <motion.div 
                className={styles.ValueCard}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className={styles.ValueIcon}>📊</div>
                <h3 className={styles.ValueTitle}>Data Analytics</h3>
                <p className={styles.ValueDescription}>Power BI, SQL Server, Excel</p>
                <p className={styles.whatCanBuild}>✓ Track website performance and user behavior</p>
              </motion.div>

              {/* NEW: Client-Specific Services */}
              <motion.div 
                className={styles.ValueCard}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className={styles.ValueIcon}>💼</div>
                <h3 className={styles.ValueTitle}>Client Services</h3>
                <p className={styles.ValueDescription}>What I deliver for every project</p>
                <ul className={styles.serviceList}>
                  <li>✅ Responsive design (mobile-first)</li>
                  <li>✅ SEO optimization</li>
                  <li>✅ Performance optimization</li>
                  <li>✅ Cross-browser testing</li>
                  <li>✅ Post-launch support</li>
                </ul>
              </motion.div>
            </div>

            {/* NEW: Technology Guarantee */}
            <motion.div className={styles.guaranteeSection} variants={itemVariants}>
              <div className={styles.guaranteeBox}>
                <Circle className={styles.guaranteeIcon} />
                <div>
                  <h4>100% Technology Guarantee</h4>
                  <p>I use only modern, well-documented technologies that are easy to maintain and scale.</p>
                  <small>Need something specific? I'm always learning new technologies based on client needs.</small>
                </div>
              </div>
            </motion.div>

          </motion.section>
        </Row>
      </ScrollAnimation>
    </Container>
  );
}

export default Technologies;