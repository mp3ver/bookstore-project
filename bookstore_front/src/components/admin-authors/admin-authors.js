import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Table, FormGroup, Input, Label, Button, Row, Col} from "reactstrap";
import AdminAuthorsRow from "../admin-authors-row/admin-authors-row"
import {GetAuthors} from "../../redux/actions/authors";
import {selectAuthors} from "../../redux/selectors/authors";
import {Redirect} from "react-router";

const AdminAuthors= (props) => {

    useEffect(() => {
        props.getAuthors();
    }, []);

    const [newAuthorName, setNewAuthorName] = useState('')

    function addNewAuntor() {

        if(newAuthorName=== null || newAuthorName.trim() == ''){
            alert("Поле \"Имя\" не задано");
            return;
        }

        setNewAuthorName(newAuthorName.trim());

        fetch(`http://localhost:8080/authors`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': 'Basic ' + props.basic
                    },
                    method: "POST",
                    body: JSON.stringify(
                        {
                            name: `${newAuthorName}`
                        }
                    )
                }).then(
                    (response) => props.getAuthors()
                )
    }

    return (

        (!props.role ||  props.role !== "ADMIN") ? <Redirect to={'/auth'}/> :

        <div>
            <Table borderless>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Имя</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            props.authors && props.authors.map(author => {
                                return (
                                    <AdminAuthorsRow key={`auhtor-${author.id}`} author={author} />
                                )
                            })
                        }
                </tbody>
            </Table>
            <FormGroup>
                {/* <tr>
                    <th> <Label for="newAuthorNameInput">Add new author:</Label> </th>
                    <td> <Input id="newAuthorNameInput" placeholder="Name" /> </td>
                    <td> <Button>Add?</Button> </td>
                </tr> */}
                <Row>
                    <Col sm="3"> <Label for="newAuthorNameInput">Добавить нового автора:</Label>  </Col>
                    <Col sm="6">
                        <Input id="newAuthorNameInput" placeholder="Имя" onChange={ event =>  setNewAuthorName(event.target.value)}/>  
                    </Col>
                    <Col sm="3"> <Button color="warning" onClick={addNewAuntor}>Добавить</Button> </Col>
                </Row>
                    {/* <Label for="newAuthorNameInput">Add new author:</Label>
                    <Input id="newAuthorNameInput" placeholder="Name" /> */}

            </FormGroup>
        </div>
    );

}

const mapStateToProps = state => ({
    authors: selectAuthors(state),
    role: state.role.role,
    basic: state.basic.basic
})

const mapDispatchToProps = dispatch => {
    return {
        getAuthors: () => dispatch(new GetAuthors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminAuthors);