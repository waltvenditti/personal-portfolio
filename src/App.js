import "./styles/App.css"
import About from "./components/About"
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="appDiv">
     <About />
     <h2 className="workH2">My Work</h2>
     <Work />
     <Contact />
    </div>
  );
}

export default App;
