// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Technologies from './pages/Technologies';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css' 
import ContactMe from './pages/ContactMe';
import Experience from './pages/Experience';

function App() {
  return (
    <Container fluid="md">
    <div className="App">
      <NavBar /> 
        <AboutMe />
        <Technologies />
        <Projects />
        <Experience />
        <ContactMe />
    </div>
    </Container>
  );
}

export default App;