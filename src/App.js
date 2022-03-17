import "./styles/App.css"
import About from "./components/About"
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="appDiv">
     <About />
     <Work />
     <Contact />
    </div>
  );
}

export default App;
