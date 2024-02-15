import './App.css';
import FlyingHearts from './components/FlyingHearts';
import Footer from './components/Footer';
import Header from './components/Header';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="App">
      <FlyingHearts/>
      <Header/>
      <Timeline/>
      <Footer/>
    </div>
  );
}

export default App;
