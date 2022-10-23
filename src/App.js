import './App.css';
import About from './pages/About';
import Personal from './pages/Personal';
import Welcome from './pages/Welcome';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Welcome />
      <Personal />
      <About />
      <Contact />
    </div>
  );
}

export default App;
