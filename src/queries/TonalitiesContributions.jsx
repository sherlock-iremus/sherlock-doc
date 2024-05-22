import { tonalitiesContributions } from "sherlock-sparql-queries";

import Query from "../Query";

export const example = [
  ["limit", 500],
]

function TonalitiesContributions() {
  return <Query f={tonalitiesContributions} example={example}/>;
}

export default TonalitiesContributions;
