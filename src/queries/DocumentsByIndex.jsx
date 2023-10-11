import { documentsByIndex } from "sherlock-sparql-queries/src/queries/documentsByIndex";

import Query from "../Query";

export const example = [
  ["indexUri", "https://opentheso.huma-num.fr/opentheso/?idc=genealogie&idt=th391",],
]

function DocumentsByIndex() {
  return <Query f={documentsByIndex} example={example} />;
}

export default DocumentsByIndex;
