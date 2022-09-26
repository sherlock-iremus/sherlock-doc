import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/identity">Identity</Link>
        </li>
        <li>
          <Link to="/p127">P127</Link>
        </li>
        <li>
          <Link to="/mg-livraisons">Livraisons du Mercure Galant</Link>
        </li>
        <li>
          <Link to="/selections">Selections</Link>
        </li>
      </ul>
    </nav>
  );
}

export default App;
