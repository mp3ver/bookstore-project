import React from "react";
import {Alert, Col, Button} from "reactstrap";
import AuthorLink from "../author-link/author-link";
import {SetBasket} from "../../redux/actions/basket";
import {connect} from "react-redux";

const BookCard = (props) => {

    // const addToBasket = () => {
    //     let curBasket = props.basket.slice();
    //     curBasket.push( props.book );
    //     props.setBasket(curBasket);
    // }

    return (
        <Col>
            <h3>{props.book.title}</h3>

            <p>
                {
                    props.book.authors.map(author => author.name).join(" ")
                    // props.book.author
                }
            </p>

            {/* <p>
                {
                    props.book.genres.map(genre => genre.name).join(" ")
                }
            </p> */}

            <Alert color={"success"}>{props.book.price}</Alert>
            {
                    () => {
                        for (let i = 0; i < 10; i++) { 
                            return(
                                <p> </p>
                            )
                          }
                    }
            }
            {/* <Button onClick={addToBasket}>Something</Button> */}
        </Col>
    );
}

const mapStateToProps = state => ({
    basket: state.basket.basket
})

const mapDispatchToProps = dispatch => {
    return {
        setBasket: (basket) => dispatch(new SetBasket(basket))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookCard);