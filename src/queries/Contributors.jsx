import { contributors } from "sherlock-sparql-queries/src/queries/contributors";

import Query from "../Query";

function Contributors() {
  return <Query f={contributors}/>;
}

export default Contributors;
