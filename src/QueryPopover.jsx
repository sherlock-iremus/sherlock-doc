import { Link, Popover, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";

function QueryPopover({ query }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "query-popover" : undefined;

  return (
    <>
      <Link onClick={handleClick}>Click to show request</Link>
      <Popover
        PaperProps={{
        style: { width: '75%' },
        }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <QueryInput query={query} />
      </Popover>
    </>
  );
}

function QueryInput({ query }) {
  const queryTypo = useRef(null);

  useEffect(() => {
    console.log(queryTypo)
    queryTypo?.current?.select();
  }, []);

  return <TextField multiline fullWidth inputRef={queryTypo} defaultValue={query} />;
}

export default QueryPopover;
