import { identitiesByTextQuery } from "sherlock-sparql-queries";
import Query from "../Query";

const example = [
  ["queryString", "bott~"],
  ["limit", 30],
]

function SherlockSearchEngine() {
  return <Query f={identitiesByTextQuery} example={example} />
}

export default SherlockSearchEngine;
