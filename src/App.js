// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css' 

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <Container>
        <AboutMe />
        <Projects />
      </Container>
    </div>
  );
}

export default App;