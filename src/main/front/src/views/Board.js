import { Col, Row } from "reactstrap";
import {useEffect, useState} from "react";
import axios from "axios";

import Tables from "../components/dashboard/Table";

const Board = () => {
    const [list, setList] = useState([]);

    const getBoard = async () => {
        await axios.get('/board/')
            .then(response => setList(response.data))
            .catch(error => console.log(error));
    }

    useEffect(() => {
        getBoard().then(r => {});
    }, []);


  return (
    <div>
      {/***Table ***/}
      <Row>
        <Col lg="12">
            <Tables boardList={list} />
        </Col>
      </Row>
    </div>
  );
};

export default Board;
