import { TextField } from "@mui/material";
import { useEffect, useRef } from "react";

function QueryPopover({ query }) {
  const queryTypo = useRef(null);

  useEffect(() => {
    queryTypo?.current?.select();
  }, []);

  return <TextField multiline fullWidth inputRef={queryTypo} defaultValue={query} />;
}

export default QueryPopover;
