import { Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/Navbar.jsx";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Aboutus } from "./components/Aboutus";
import { Features } from './components/Features.jsx';

function App() {
  return (
    
      <div>
      <Navbar />
      
      <Routes>
        
        <Route exact path="/home" element={ <Home />} />
        <Route exact path="/login" element={ <Login />} />
        <Route exact path="/signup" element={ <Signup />} />
        <Route exact path="/features" element={ <Features />} />
        <Route exact path="/aboutus" element={ <Aboutus />} />
        
      </Routes>

      
      </div>
  );
}

export default App;
