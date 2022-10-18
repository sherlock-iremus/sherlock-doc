import { fondamentales } from "sherlock-sparql-queries/src/queries/fondamentales";

import Query from "../Query";

export const example = [
  ["score", "http://data-iremus.huma-num.fr/id/709bcdaf-811d-45f8-af50-29db8318bd48",],
]

function Fondamentales() {
  return <Query f={fondamentales} example={example} />;
}

export default Fondamentales;
