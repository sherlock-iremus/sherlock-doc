import { useState, useEffect } from "react";

import { buildTable } from "../muiCommon";
import { p127 } from "sherlock-sparql-queries/src/queries/p127";
import { sparqlEndpoint } from "sherlock-sparql-queries/src/common/sparql";

function P127() {
  const [res, setRes] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await sparqlEndpoint(
        p127(
          `http://data-iremus.huma-num.fr/id/d4b92b44-3305-44c7-87a9-a56bfd5539ec`
        )
      );
      setRes(res);
    })();
  }, []);

  return buildTable(res);
}

export default P127;
