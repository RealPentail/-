import {Col, Row} from "reactstrap";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

import DetailTable from "../components/dashboard/DetailTable";

const Detail = () => {

    const [detail, setDetail] = useState();
    const {boardId} = useParams();

    const getDetail = async () => {
        await axios.get(`/board/detail/${boardId}`)
            .then(response => setDetail(response.data))
            .catch(error => console.log(error));
    };

    useEffect(() => {
        getDetail().then(r => {});
    }, []);

    return (
        <div>
            <Row>
                <Col lg="12">
                    <DetailTable detailData={detail} />
                </Col>
            </Row>
        </div>
    );
}

export default Detail;