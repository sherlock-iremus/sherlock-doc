import { identity, example } from "sherlock-sparql-queries/src/queries/identity";
import Query from "../Query";

function Identity() {
  return <Query f={identity} example={example} />
}

export default Identity;
