import { contributions } from "sherlock-sparql-queries";

import Query from "../Query";

export const example = [
  ["contributorIri", "http://data-iremus.huma-num.fr/id/6ea17744-2345-43ee-8a3e-f3c9770e0340"],
]

function Contributions() {
  return <Query f={contributions} example={example} />;
}

export default Contributions;
