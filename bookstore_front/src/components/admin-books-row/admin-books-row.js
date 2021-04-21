import {Table} from "reactstrap";

const AdminBooksRow = (props) => {

    return (

        <tr>
                <th scope="row">{props.book.id}</th>
                <td>{props.book.title}</td>
                <td>
                    {
                    props.book.authors.map(author => author.name).join(" ")
                    }
                </td>
        </tr>

    );

}

export default AdminBooksRow