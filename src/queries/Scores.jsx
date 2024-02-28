import { scores } from "sherlock-sparql-queries";

import Query from "../Query";

function Scores() {
  return <Query f={scores}/>;
}

export default Scores;
