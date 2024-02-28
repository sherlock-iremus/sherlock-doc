import { mg_livraisons } from "sherlock-sparql-queries";
import Query from "../Query";

function MG_Livraisons() {
  return <Query f={mg_livraisons} />;
}

export default MG_Livraisons;
