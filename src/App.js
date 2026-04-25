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
import Hero from './pages/Hero';
import FreelanceProcess from './pages/FreelanceProcess';

function App() {
  return (
    <>
     <Container fluid="md"
    className='App'
    style={{ width: '100%', overflow: 'hidden'}}
    >
    <NavBar /> 
    </Container>
      <Hero />
    <Container fluid="md"
    className='App'
    style={{ width: '100%', overflow: 'hidden'}}
    >
      <Projects />
      <FreelanceProcess/>
        <Technologies />
        <About2 />
        <Experience />
        <ContactMe />



    </Container>
    </>
  );
}

export default App;