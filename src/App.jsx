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
        <li>
          <Link to="/scores">Scores</Link>
        </li>
        <li>
          <Link to="/contributors">Contributors</Link>
        </li>
        <li>
          <Link to="/contributions">Contributions</Link>
        </li>
        <li>
          <Link to="/note-occurences">Note Occurences</Link>
        </li>
        <li>
          <Link to="/fondamentales">Fondamentales</Link>
        </li>
        <li>
          <Link to="/historical-models-ontologies">Historical models ontologies</Link>
        </li>
      </ul>
    </nav>
  );
}

export default App;
