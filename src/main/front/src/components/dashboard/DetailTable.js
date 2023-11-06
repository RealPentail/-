import {Button, Card, CardBody, CardSubtitle, CardTitle, Form, FormGroup, Input, Label} from "reactstrap";
import React from "react";
const DetailTable = ({detailData}) => {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">DetailList</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                        Detail Page
                    </CardSubtitle>

                    <CardTitle
                        className="mt-5"
                        tag="h3"
                        style={{borderBottom: "1px solid black"}}
                    >{detailData.title}</CardTitle>

                    <div>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                            style={{float: "left"}}
                        >작성자 : {detailData.username}</CardSubtitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                            style={{float: "right"}}
                        >조회 : {detailData.count}</CardSubtitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                            style={{float: "right", marginRight: 18}}
                        >작성일 : {detailData.date}</CardSubtitle>
                    </div>


                    <Form className="mt-5">
                        <FormGroup>
                            <Label for="exampleText"></Label>
                            <Input
                                rows={18}
                                id="exampleText"
                                value={detailData.content}
                                type="textarea" readOnly
                                style={{
                                    border: "none",
                                    resize: "none",
                                    cursor: "default",
                                    outline: "none",
                                    boxShadow: "none"
                                }}
                            />
                        </FormGroup>
                    </Form>

                    <Button className="btn" color="primary" style={{float: "right"}}>
                        수정하기
                    </Button>
                </CardBody>
            </Card>
        </div>
    );
};

DetailTable.defaultProps = {
    detailData: [],
};

export default DetailTable;