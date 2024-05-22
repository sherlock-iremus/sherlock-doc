import { Paper, Stack, Tab, Tabs, Typography } from "@mui/material";
import { useState, useEffect } from "react";

import { querySparqlEndpoint } from "sherlock-rdf"
import { buildTable } from "./muiCommon";
import QueryParamPicker from "./QueryParamPicker";
import QueryPopover from "./QueryPopover";

function Query({ f, example }) {
  const [res, setRes] = useState([]);
  const [args, setArgs] = useState(example || []);
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState('result')
  const query = f.apply(
    null,
    args.map((arg) => arg[1])
  )

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await querySparqlEndpoint(query);
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
            {`${res?.results?.bindings?.length} bindings.`} 
          </Typography>
        </Paper>
      )}
      <Tabs
        value={tab}
        onChange={(e, v) => setTab(v)}
        variant="fullWidth"
      >
        <Tab value="result" label="Result" />
        <Tab value="query" label="SPARQL Query" />
      </Tabs>
      {tab === 'result' ? buildTable(res) : <QueryPopover query={query}/> }
    </Stack>
    
  );
}

export default Query;
