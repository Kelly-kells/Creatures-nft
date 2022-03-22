import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./components/pages/Home";
import { Summon } from "./components/pages/Summon";
import { Docs } from "./components/pages/Docs";
import { Connect } from "./components/pages/Connect";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
    <Router>
      <Navbar/>
      <div className="pages">
     <Routes>
     <Route exact path="/" element={<Home />} />
     <Route path="/summon" element={<Summon />} />
     <Route path="/docs" element={<Docs />} />
     <Route path="/connect" element={<Connect />} /> 
      </Routes>
      </div>
    </Router>
    </div>
  );
}



export default App;