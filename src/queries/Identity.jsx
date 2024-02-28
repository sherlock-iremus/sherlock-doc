import { identity } from "sherlock-sparql-queries";
import Query from "../Query";

const example = [
  ["resource", "http://data-iremus.huma-num.fr/id/18654b25-a05d-415e-b809-e334827edea8"],
  ["getLinkedResourcesIdentity", true],
  ["appendE13ifiedIdentity", true],
  ["countLinkedResources", true],
  ["linkingPredicate", undefined],
  ["linkedResourcesDirection", "OUTGOING"]
]

function Identity() {
  return <Query f={identity} example={example} />
}

export default Identity;
