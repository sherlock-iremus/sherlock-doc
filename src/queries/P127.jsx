import { p127 } from "sherlock-sparql-queries/src/queries/p127";
import Query from "../Query";

export const example = [
  ["resource", "http://data-iremus.huma-num.fr/id/d4b92b44-3305-44c7-87a9-a56bfd5539ec"],
]

function P127() {
  return <Query f={p127} example={example} />;
}

export default P127;
