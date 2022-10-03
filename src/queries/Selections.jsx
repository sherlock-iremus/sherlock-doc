import { selections } from "sherlock-sparql-queries/src/queries/selections";

import Query from "../Query";

export const example = [
  ["resource", "http://data-iremus.huma-num.fr/id/f158e5f5-8d1f-43d0-8e85-1892824798e1"],
]

function Selections() {
  return <Query f={selections} example={example} />;
}

export default Selections;
