import { useState, useEffect } from "react";

import { buildTable } from "../muiCommon";
import { identity } from "sherlock-sparql-queries/src/queries/identity";
import { sparqlEndpoint } from "sherlock-sparql-queries/src/common/sparql";

function Identity() {
  const [res, setRes] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await sparqlEndpoint(
        identity(
          `http://data-iremus.huma-num.fr/id/18654b25-a05d-415e-b809-e334827edea8`
        )
      );
      setRes(res);
    })();
  }, []);

  return buildTable(res);
}

export default Identity;
