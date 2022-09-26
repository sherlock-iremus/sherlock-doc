import { selections } from "sherlock-sparql-queries/src/queries/selections";

import Query from "../Query";

export const example = [
  ["resource", "http://data-iremus.huma-num.fr/id/eff6f0a7-cf80-402c-953b-c66161051356"],
]

function Selections() {
  return <Query f={selections} example={example} />;
}

export default Selections;
