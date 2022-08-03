import { Stack } from "@mui/material";
import { useState, useEffect } from "react";

import { sparqlEndpoint } from "sherlock-sparql-queries/src/common/sparql";
import { buildTable } from "./muiCommon";
import QueryParamPicker from "./QueryParamPicker";

function Query({ f, example }) {
  const [res, setRes] = useState([]);
  const [args, setArgs] = useState(example);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await sparqlEndpoint(f.apply(null,args.map(arg => arg[1])));
      setRes(res);
      setLoading(false)
    })();
  }, [args, f]);

  return <Stack spacing={10} p={2}>
    <QueryParamPicker args={args} setArgs={setArgs} loading={loading} />
    {buildTable(res)}
  </Stack>
}

export default Query;
