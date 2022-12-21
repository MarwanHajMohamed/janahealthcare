import './App.css';
import PageIntro from './Components/PageIntro';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <PageIntro />
      <Services />
      <About />
      <Contact />
    </>
  );
}

export default App;
