import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { formatUri} from "sherlock-rdf"

function makeDataCells(vars, bindings) {
  const cells = [];
  for (const v of vars) {
    if (bindings[v]?.type === "uri")
      cells.push(
        <TableCell>
          {
            <a href={bindings[v]?.value} target="_blank">
              {formatUri(bindings[v]?.value)}
            </a>
          }
        </TableCell>
      );
    else cells.push(<TableCell style={{whiteSpace: "pre-line"}}>{bindings[v]?.value || "–"}</TableCell>);
  }
  return cells;
}

export const buildTable = (res) => {
  const columnNames = res?.head?.vars;
  return res.head ? (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {columnNames.map((v) => (
              <TableCell>{v}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {res.results.bindings.map((b) => (
            <TableRow>{makeDataCells(columnNames, b)}</TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <Typography>🦕</Typography>
  );
};
