import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Row, Col, Alert, Table} from "reactstrap";
import AdminBooksRow from "../admin-books-row/admin-books-row"

import {GetBooks} from "../../redux/actions/books";
import {selectBooks} from "../../redux/selectors/books";

const AdminBooks = (props) => {

    useEffect(() => {
        props.getBooks();
    }, []);

    return (
        <div>
            <Table bordered>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Title</th>
                        <th>Authors</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            props.books && props.books.map(book => {
                                return (
                                    <AdminBooksRow key={`book-${book.id}`} book={book} />
                                )
                            })
                        }
                    <tr>
                        <th scope="row">1</th>
                        <td>SampleTitle</td>
                        <td>SampleAuthor1, SampleAuthor1</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );

}

const mapStateToProps = state => ({
    books: selectBooks(state)
})

const mapDispatchToProps = dispatch => {
    return {
        getBooks: () => dispatch(new GetBooks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminBooks);