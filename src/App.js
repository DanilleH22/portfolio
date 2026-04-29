// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Projects from './pages/Projects';
import Technologies from './pages/Technologies';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css' 
import ContactMe from './pages/ContactMe';
import Experience from './pages/Experience';
import styles from "../src/styles/Portfolio.module.css"
import About2 from './pages/AboutMe2';
import FreelanceProcess from './pages/FreelanceProcess';
import HeroAnimated from './pages/HeroAnimated';
import Packages from './pages/Packages';

function App() {
  return (
    <>
     <Container fluid="md"
    className='App'
    style={{ width: '100%', overflow: 'hidden'}}
    >
    <NavBar /> 
    </Container>
      <HeroAnimated />
    <Container fluid="md"
    className='App'
    style={{ width: '100%', overflow: 'hidden'}}
    >
      <section id="projects">
        <Projects />
      </section>

      <section id="packages">
        <Packages />
      </section>

      {/* <FreelanceProcess/> */}

      <section id="technologies">
        <Technologies />
      </section>

      <section id="about">
        <About2 />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="contact">
        <ContactMe />
      </section>



    </Container>
    </>
  );
}

export default App;