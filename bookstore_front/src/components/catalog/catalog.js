import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Row, Col, Alert, Button} from "reactstrap";

import {GetBooks} from "../../redux/actions/books";
import {selectBooks} from "../../redux/selectors/books";

import {SetBasket} from "../../redux/actions/basket";

import BookCard from "../book-card/book-card";

const Catalog = (props) => {

    useEffect(() => {
        props.getBooks();
    }, []);

    const isBookAtBasket = (bookId) => {
        return ! props.basket.find( book => book.id == bookId );
    }

    const addToBasket = (bookId) => {
        if( isBookAtBasket(bookId) ){
            let thisBook = props.books.filter( book => book.id == bookId )[0];
            let curBasket = props.basket.slice();
            curBasket.push( thisBook );
            props.setBasket(curBasket);
        }
        else{
            alert("Книга уже есть в корзине");
        }
    }

    return (
        <div>
            <Row xs={"3"}>
                {
                    props.books && props.books.map(book => {
                        return (
                            <div> 
                                <BookCard key={`book-${book.id}`} book={book} />
                                {
                                    (props.role && (props.role === 'CUSTOMER' || props.role === 'ADMIN' ))
                                    &&
                                    <Button onClick={ () => addToBasket(book.id)}>Добавить в корзину</Button>
                                }
                                {/* <Button onClick={ () => addToBasket(book.id)}>Add to basket</Button> */}
                            </div>
                        )
                    })
                }
            </Row>
        </div>
    );
}

const mapStateToProps = state => ({
    books: selectBooks(state),
    basket: state.basket.basket,
    role: state.role.role
})

const mapDispatchToProps = dispatch => {
    return {
        getBooks: () => dispatch(new GetBooks()),
        setBasket: (basket) => dispatch(new SetBasket(basket))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);