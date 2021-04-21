import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Table, FormGroup, Input, Label, Button, Row, Col} from "reactstrap";
import AdminAuthorsRow from "../admin-authors-row/admin-authors-row"
import {GetOrders} from "../../redux/actions/orders";
import {Redirect} from "react-router";

const AdminOrders= (props) => {

    useEffect(() => {
        props.getOrders();
    }, []);

    return (

        !props.role || props.role !== "ADMIN" ? <Redirect to={'/auth'}/> :

        <div>
            <Table bordered>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>user_id</th>
                        <th>books</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            props.orders && props.orders.map(order => {
                                return (
                                    <tr>
                                                <th scope="row">{order.id}</th>
                                                <th scope="row">{order.userId}</th>
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
        getOrders: () => dispatch(new GetOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminOrders);