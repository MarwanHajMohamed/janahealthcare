import "./App.css";
import PageIntro from "./Components/PageIntro";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Services from "./Components/Services";

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
