import './App.css';
import Intro from './components/Intro';
import About from './components/About';
import MyWork from './components/MyWork';
import Nav from './components/Nav'


function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <About />
      <MyWork />
    </div>
  );
}

export default App;
