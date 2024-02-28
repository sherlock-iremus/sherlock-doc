import { contributors } from "sherlock-sparql-queries";

import Query from "../Query";

function Contributors() {
  return <Query f={contributors}/>;
}

export default Contributors;
