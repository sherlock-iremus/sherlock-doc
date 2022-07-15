import { useState, useEffect } from "react";

import { buildTable } from "../muiCommon";
import { sparqlEndpoint } from "sherlock-sparql-queries/src/common/sparql";

function Query({ f, iri }) {
  const [res, setRes] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await sparqlEndpoint(f(iri));
      setRes(res);
    })();
  }, []);

  return buildTable(res);
}

export default Query;
