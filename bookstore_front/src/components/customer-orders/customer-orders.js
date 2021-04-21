import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Table, FormGroup, Input, Label, Button, Row, Col} from "reactstrap";
import AdminAuthorsRow from "../admin-authors-row/admin-authors-row"
import {GetCustomerOrders} from "../../redux/actions/orders";
import {Redirect} from "react-router";

const CustomerOrders= (props) => {

    useEffect(() => {
        props.getCustomerOrders();
    }, []);

    return (

        !props.role || props.role !== "CUSTOMER" ? <Redirect to={'/auth'}/> :

        <div>
            <Table bordered>
                <thead>
                    <tr>
                        <th>Номер заказа</th>
                        <th>Содержимое заказа</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            props.orders && props.orders.map(order => {
                                return (
                                    <tr>
                                                <th scope="row">{order.id}</th>
                                                <th scope="row">
                                                    {
                                                        order.books.map(book => book.title).join(", ")
                                                    }
                                                </th>
                                    </tr>
                                )
                            })
                        }
                </tbody>
            </Table>

        </div>
    );

}

const mapStateToProps = state => ({
    orders: state.orders.orders,
    role: state.role.role
})

const mapDispatchToProps = dispatch => {
    return {
        getCustomerOrders: () => dispatch(new GetCustomerOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerOrders);