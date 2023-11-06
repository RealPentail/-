import {Button, Card, CardBody, CardSubtitle, CardTitle, Form, FormGroup, Input, Label} from "reactstrap";
import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

// date
const today = new Date();
let month = (today.getMonth() + 1) > 9 ? (today.getMonth() + 1) : '0' + (today.getMonth() + 1);
let day = (today.getDate()) > 9 ? (today.getDate()) : '0' + (today.getDate());

const SaveList = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        content: "",
    });

    const saveAxios = async () => {
        await axios.post('/board/save', {
            title: formData.title,
                content: formData.content,
                date : date,
                count: 0, // 아 이거 잘못 생각해서 좀 바꿔야함
                username: 'testUser' // 임시로 둠
        })
            .then(response => {
                if (response.status === 200) {
                    navigate(`/board/detail/${response.data.id}`);
                }
            })
            .catch(error => console.log(error));
    };

    // form 입력될 때마다 formData 값이 변경될 수 있게 해줌
    const onChangForm = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }
    const date = `${today.getFullYear()}-${month}-${day}`;

    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">SaveList</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">Save Page</CardSubtitle>

                    <Form className="mt-5">
                        <FormGroup>
                            <Label>Title</Label>
                            <Input
                                id="title"
                                name="title"
                                value={formData.title}
                                type="text"
                                placeholder="제목을 입력해주세요."
                                onChange={onChangForm}
                                required
                            ></Input>
                        </FormGroup>

                        <FormGroup>
                            <Label>Content</Label>
                            <Input
                                id="content"
                                name="content"
                                value={formData.content}
                                style={{resize: "none"}}
                                type="textarea"
                                rows={10}
                                placeholder="내용을 입력해주세요."
                                onChange={onChangForm}
                                required/>
                        </FormGroup>
                    </Form>

                    <div style={{display: "flex", float: "right"}}>
                        <Button className="btn"
                                color="primary"
                                style={{marginRight: 10}}
                                onClick={() => {saveAxios()}}
                        >
                            저장하기
                        </Button>
                        <Button className="btn"
                                color="danger"
                                onClick={() => {navigate(`/board`)}}
                        >
                            취소하기
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default SaveList;