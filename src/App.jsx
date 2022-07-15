import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/identity">identity</Link>
        </li>
        <li>
          <Link to="/p127">p127</Link>
        </li>
      </ul>
    </nav>
  );
}

export default App;
