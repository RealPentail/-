import { useNavigate } from "react-router-dom";

const TableItem = ({ id, title, username, date, count }) => {
    const navigate = useNavigate();
    const Detail = () => {
        navigate(`/board/detail/${id}`);
    }

    return (
        <tr key={id} className="border-top">
            <td>
                <div style={{textAlign: "center"}}>
                    {id}
                </div>
            </td>
            <td>
                <h6 onClick={Detail} className="m-0">
                    <div style={{cursor: 'pointer'}}>{title}</div>
                </h6>
            </td>
            <td style={{textAlign: "center"}}>{username}</td>
            <td style={{textAlign: "center"}}>{date}</td>
            <td style={{textAlign: "center"}}>{count}</td>
        </tr>
    );
};

export default TableItem;