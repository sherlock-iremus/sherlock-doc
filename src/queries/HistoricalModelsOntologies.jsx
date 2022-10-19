import { historicalModelsOntologies } from "sherlock-sparql-queries/src/queries/historicalModelsOntologies";

import Query from "../Query";

function HistoricalModelsOntologies() {
  return <Query f={historicalModelsOntologies}/>;
}

export default HistoricalModelsOntologies;
