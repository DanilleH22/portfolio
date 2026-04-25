
import styles from "../styles/FreelanceProcess.module.css";


import React, {useState} from 'react';
import { motion } from 'framer-motion';
import "../styles/about.css";
import me1 from '../assets/me1.JPG';
import me2 from '../assets/me2.JPG';
import me3 from '../assets/me3.jpeg';
import me4 from '../assets/me4.jpeg';
import me5 from '../assets/me5.JPG';
import me6 from '../assets/me6.jpeg';
import me7 from '../assets/me7.jpeg';





const FreelanceProcess = () => {
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

   const [buttonState, setButtonState] = useState('idle'); 
  const [copied, setCopied] = useState(false);
  
  const whatsappPhone = "447769873047"; 
  const whatsappMessage = "Hello LA4K,\n\nI'm interested in your media production services. Could you provide more information about:\n\n• Project type:\n• Timeline:\n• Budget range:\n\nLooking forward to hearing from you!";



 // Email fallback (optional)
  const email = "Mrla4k@gmail.com";

  const handleGetInTouch = () => {
    setButtonState('loading');
    
    // Simulate network delay
    setTimeout(() => {
      // Check if user is on mobile for better UX
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      
      if (isMobile) {
        // For mobile: Try to open WhatsApp app directly
        window.location.href = `whatsapp://send?phone=${whatsappPhone}&text=${encodeURIComponent(whatsappMessage)}`;
        
        // Fallback after 2 seconds if WhatsApp not installed
        setTimeout(() => {
          if (document.hidden) {
            // WhatsApp opened successfully
          } else {
            // WhatsApp not installed, open web version
            window.open(`https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${encodeURIComponent(whatsappMessage)}`, '_blank');
          }
        }, 2000);
      } else {
        // For desktop: Open WhatsApp Web
        window.open(`https://web.whatsapp.com/send?phone=${whatsappPhone}&text=${encodeURIComponent(whatsappMessage)}`, '_blank');
      }
      
      // Show success state briefly
      setButtonState('success');
      setTimeout(() => setButtonState('idle'), 2000);
    }, 800);
  };

  

  const buttonConfig = {
    idle: {
      text: 'Get in Touch on WhatsApp',
      className: 'primary'
    },
    loading: {
      text: 'Opening WhatsApp...',
      className: 'loading'
    },
    success: {
      text: 'WhatsApp Ready!',
      className: 'success'
    },
    error: {
      text: 'Try Again',
      className: 'error'
    }
  };

  const currentButton = buttonConfig[buttonState];



  return (
    <>
    
     
      
      <div className="about-container">
       

      

  
       
        {/* Our Mission Section */}
        <motion.section 
          className="mission-section"
        //   initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="mission-grid2">
            <motion.div className="mission-content" variants={itemVariants}>
              <div className="section-header">
                <h2 className="section-eyebrow">How Working With Me Works</h2>
              
              </div>
              
              <div className="mission-points">
                <motion.div 
                  className="mission-point"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="point-header">
                    <div className="point-icon">✓</div>
                    <h3 className="point-title">Discovery Call</h3>
                  </div>
                  <p className="point-description">
                    15-min chat about your project needs
                  </p>
                </motion.div>

                <motion.div 
                  className="mission-point"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="point-header">
                    <div className="point-icon">♾️</div>
                    <h3 className="point-title">Quoting</h3>
                  </div>
                  <p className="point-description">
                    I can run you through the options for your website and give you quotes
                  </p>
                </motion.div>

                <motion.div 
                  className="mission-point"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="point-header">
                    <div className="point-icon">⚡</div>
                    <h3 className="point-title">Build and Iterate</h3>
                  </div>
                  <p className="point-description">
                    Regular updates every 3-4 days
                  </p>
                </motion.div>

                 <motion.div 
                  className="mission-point"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="point-header">
                    <div className="point-icon">⚡</div>
                    <h3 className="point-title">Launch & Support</h3>
                  </div>
                  <p className="point-description">
                    30 days of free bug fixes
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

export default FreelanceProcess;