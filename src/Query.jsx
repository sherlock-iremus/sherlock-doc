import { Paper, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";

import { sparqlEndpoint } from "sherlock-sparql-queries/src/common/sparql";
import { buildTable } from "./muiCommon";
import QueryParamPicker from "./QueryParamPicker";
import QueryPopover from "./QueryPopover";

function Query({ f, example }) {
  const [res, setRes] = useState([]);
  const [args, setArgs] = useState(example || []);
  const [loading, setLoading] = useState(false);
  const query = f.apply(
    null,
    args.map((arg) => arg[1])
  )

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await sparqlEndpoint(query);
      setRes(res);
      setLoading(false);
    })();
  }, [args, f]);

  return (
    <Stack spacing={2} p={2}>
      <QueryParamPicker args={args} setArgs={setArgs} loading={loading} />

      {(
        <Paper sx={{ p: 1 }}>
          <Typography>
            {`${res?.results?.bindings?.length} bindings.`} <QueryPopover query={query}/>
          </Typography>
        </Paper>
      )}

      {buildTable(res)}
    </Stack>
    
  );
}

export default Query;
