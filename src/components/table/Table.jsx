import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";

const List = () => {
  const rows = [
    {
      id: 1143155,
      username: "Gamer Namev",
      email: "david_wagner@example.com",
      rank: 1,
      totalkill: 2355,
      totalscore: 12434553,
      totalbalance: 2313,
    },
    {
        id: 1143155,
        username: "Gamer Namev",
        email: "david_wagner@example.com",
        rank: 1,
        totalkill: 2355,
        totalscore: 12434553,
        totalbalance: 2313,
    },
    {
        id: 1143155,
        username: "Gamer Namev",
        email: "david_wagner@example.com",
        rank: 1,
        totalkill: 2355,
        totalscore: 12434553,
        totalbalance: 2313,
    },
    {
        id: 1143155,
        username: "Gamer Namev",
        email: "david_wagner@example.com",
        rank: 1,
        totalkill: 2355,
        totalscore: 12434553,
        totalbalance: 2313,
    },
    {
        id: 1143155,
        username: "Gamer Namev",
        email: "david_wagner@example.com",
        rank: 1,
        totalkill: 2355,
        totalscore: 12434553,
        totalbalance: 2313,
    },
    {
        id: 1143155,
        username: "Gamer Namev",
        email: "david_wagner@example.com",
        rank: 1,
        totalkill: 2355,
        totalscore: 12434553,
        totalbalance: 2313,
    },
    {
        id: 1143155,
        username: "Gamer Namev",
        email: "david_wagner@example.com",
        rank: 1,
        totalkill: 2355,
        totalscore: 12434553,
        totalbalance: 2313,
    },
  ];
  return (
    <TableContainer className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="tableHead">
          <TableRow>
            <TableCell className="tableCell">User ID</TableCell>
            <TableCell className="tableCell">User Name</TableCell>
            <TableCell className="tableCell">Rank</TableCell>
            <TableCell className="tableCell">Total Kill</TableCell>
            <TableCell className="tableCell">Total Score</TableCell>
            <TableCell className="tableCell">Total Balance</TableCell>
            <TableCell className="tableCell">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  {row.username}
                </div>
                  <p className="email">{row.email}</p>
              </TableCell>
              <TableCell className="tableCell">{row.rank}</TableCell>
              <TableCell className="tableCell">{row.totalkill}</TableCell>
              <TableCell className="tableCell">{row.totalscore}</TableCell>
              <TableCell className="tableCell">{row.totalbalance}</TableCell>
              <TableCell className="tableCell">
                <EditOutlined className="icon" />
                <DeleteOutline className="icon" />
              </TableCell>
              {/* <Tablecell className="tableCell">
                <EditOutlined className="icon" />
              </Tablecell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
