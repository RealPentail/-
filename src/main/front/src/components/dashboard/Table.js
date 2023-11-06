import {Card, CardBody, CardTitle, CardSubtitle, Table, Button} from "reactstrap";
import TableItem from "./TableItem";
import React from "react";
import {useNavigate} from "react-router-dom";

const Tables = ({boardList}) => {

  const navigate = useNavigate();
  const addList = () => {
    navigate(`/board/save`);
  }

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">BoardList</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            BoardList Project CRUD!
          </CardSubtitle>

          <div style={{display: "flex", justifyContent: "right"}}>
            <Button className="btn" color="primary" onClick={() => addList()}>
              글쓰기
            </Button>
          </div>

          <Table className="no-wrap mt-4 align-middle" responsive>
            <thead style={{textAlign: "center"}}>
              <tr>
                <th width="60">Num</th>
                <th>Title</th>
                <th width="120">User</th>
                <th width="110">Date</th>
                <th width="40">Count</th>
              </tr>
            </thead>
            <tbody>
              {boardList.map((listData) => (
                  <TableItem key={listData.id} {...listData} />
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

Tables.defaultProps = {
  boardList: [],
};

export default Tables;
