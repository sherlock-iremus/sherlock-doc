import { noteOccurences } from "sherlock-sparql-queries";

import Query from "../Query";

export const example = [
  ["resource", "http://data-iremus.huma-num.fr/id/f158e5f5-8d1f-43d0-8e85-1892824798e1",],
  ["note", "g"]
]

function NoteOccurences() {
  return <Query f={noteOccurences} example={example} />;
}

export default NoteOccurences;
