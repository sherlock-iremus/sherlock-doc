import { scores } from "sherlock-sparql-queries/src/queries/scores";

import Query from "../Query";

function Scores() {
  return <Query f={scores}/>;
}

export default Scores;
