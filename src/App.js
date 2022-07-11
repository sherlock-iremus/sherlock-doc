// import { sparqlEndpoint } from "./sparql";
import "./App.css";
import {
  q as p127,
  formatAncestorsLabel,
} from "sherlock-sparql-queries/src/queries/p127";

console.log(p127);

function App() {
  return <div>Coucou</div>;
}

export default App;

/*
const test_query = q(
  `http://data-iremus.huma-num.fr/id/d4b92b44-3305-44c7-87a9-a56bfd5539ec`
);

// console.log(test_query);
// console.log(format_ancestors_label());

(async () => console.log(await sparqlEndpoint(test_query)))();

*/
