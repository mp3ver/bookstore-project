import { connect } from "react-redux";
import {Button, Input} from "reactstrap";
import React, {useEffect, useState} from "react";

import {GetAuthors} from "../../redux/actions/authors";
import {selectAuthors} from "../../redux/selectors/authors";

const AdminAuthorsRow = (props) => {


    useEffect(() => {
        props.getAuthors();
    }, []);

    const [curAuthorName, setNewAuthorName] = useState(props.author.name)

    function updateAuthor() {

        if(curAuthorName=== null || curAuthorName.trim() == ''){
            alert("Поле \"Имя\" не задано");
            return;
        }

        setNewAuthorName(curAuthorName.trim());

        fetch(`http://localhost:8080/authors/${props.author.id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': 'Basic ' + props.basic
                    },
                    method: "PUT",
                    body: JSON.stringify(
                        {
                            name: `${curAuthorName}`
                        }
                    )
                }).then(
                    (response) => props.getAuthors()
                )
    }

    function deleteAuthor() {
        fetch(`http://localhost:8080/authors/${props.author.id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': 'Basic ' + props.basic
                    },
                    method: "DELETE"
                }).then(
                    (response) => props.getAuthors()
                )
        
    }




    return (

        <tr>
                {/* {setNewAuthorName(props.author.name)} */}
                <th scope="row">{props.author.id}</th>
                <th scope="row">{props.author.name}</th>
                <td> <Input id="curAuthorNameInput" value={curAuthorName} onChange={ event =>  setNewAuthorName(event.target.value)}/>  </td>
                <td><Button color="primary" onClick={updateAuthor}>Изменить</Button></td>
                <td><Button color="danger" onClick={deleteAuthor}>Удалить</Button></td>
        </tr>

    );

    

}

const mapStateToProps = state => ({
    authors: selectAuthors(state),
    basic: state.basic.basic
})

const mapDispatchToProps = dispatch => {
    return {
        getAuthors: () => dispatch(new GetAuthors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminAuthorsRow);