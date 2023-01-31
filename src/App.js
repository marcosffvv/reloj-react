import './App.scss';
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Reloj from "./pages/Reloj";
import Countdown from "./pages/Countdown";
import Crono from "./pages/Crono";

function App() {
  return (
   <Router>
      <div className="App">

        <header>
          <Link to="/">Home</Link>
          <Link to="/reloj">Reloj Digital</Link>
          <Link to="/countdown">Cuenta Atrás</Link>
          <Link to="/cronómetro">Cronómetro</Link>
        </header>

      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/reloj" element={<Reloj></Reloj>}/>
        <Route path="/countdown" element={<Countdown></Countdown>}/>
        <Route path="/cronómetro" element={<Crono></Crono>}/>
      </Routes>

      </div>
    </Router>
  );
}
export default App;