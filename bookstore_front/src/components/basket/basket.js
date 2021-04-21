import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Row, Col, Alert, Button} from "reactstrap";
import {SetBasket} from "../../redux/actions/basket";
import BookCard from "../book-card/book-card";
import {Redirect} from "react-router";

const Basket = (props) => {

    const removeFromBasket = (bookId) => {
        let curBasket = props.basket.filter( book => book.id !== bookId );
        props.setBasket(curBasket);
    }

    const isBasketNull = () => {
        return (props.basket.length === 0);
    }

    const confirmOrder = () => {

        if(isBasketNull()){
            alert("Корзина пуста");
            return;
        }

        //let tempUserId = 2
        let userBasic = props.basic;

        let booksInOrder = []
        props.basket.map( book => {
            booksInOrder.push(book);
        })

        fetch(`http://localhost:8080/orders/${props.basic}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': 'Basic ' + props.basic
                    },
                    method: "POST",
                    body: JSON.stringify(
                        {
                            userId: 342,
                            books: booksInOrder
                        }
                    )
                }).then(
                    props.setBasket([])
                )

    }

    return (

        //props.role && (props.role === "CUSTOMER" || props.role === "ADMIN"  ) ? 
        //props.role === "CUSTOMER" || props.role === "ADMIN" ? 
        //(props.role != "CUSTOMER" && props.role != "ADMIN") ? <Redirect to={'/auth'}/> :

        // <div>
        //     {
        //         alert(props.role)
        //         (props.role != "CUSTOMER" && props.role != "ADMIN") ? <Redirect to={'/auth'}/> :
        //         <div>
        //         <Row xs={"3"}>
        //             {
        //                 props.basket && props.basket.map(book => {
        //                     return (
        //                         <div> 
        //                             <BookCard key={`book-${book.id}`} book={book} />
        //                             <Button onClick={ () => removeFromBasket(book.id) }>Remove </Button>
        //                         </div>
        //                     )
        //                 })
        //             }
        //         </Row>
        //         <Row>
        //             <p></p>
        //         </Row>
        //         <Row>
        //             <Button onClick={confirmOrder}>Confirm the order</Button>
        //         </Row>
        //         </div>
        //     }
        // </div>

        (props.role != "CUSTOMER" && props.role != "ADMIN") ? <Redirect to={'/auth'}/> :        
        <div>
            <Row xs={"3"}>
                {
                    props.basket && props.basket.map(book => {
                        return (
                            <div> 
                                <BookCard key={`book-${book.id}`} book={book} />
                                <Button onClick={ () => removeFromBasket(book.id) }>Убрать из корзины</Button>
                            </div>
                        )
                    })
                }
            </Row>
            <Row>
                <p></p>
                {
                    () => {
                        for (let i = 0; i < 10; i++) { 
                            return(
                                <p> </p>
                            )
                          }
                    }
                }
            </Row>
            <Row>
                <Button color="primary" onClick={confirmOrder}>Подтвердить заказ</Button>
            </Row>
        </div>

        // :

        // <Redirect to={'/auth'}/>

    );
}

const mapStateToProps = state => ({
    basket: state.basket.basket,
    role: state.role.role,
    basic: state.basic.basic
})

const mapDispatchToProps = dispatch => {
    return {
        setBasket: (basket) => dispatch(new SetBasket(basket))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);