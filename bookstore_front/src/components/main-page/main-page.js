import React from "react";
import {Container} from "reactstrap";
import Header from "../header/header";
import Catalog from "../catalog/catalog";
import Basket from "../basket/basket";
import AdminBooks from "../admin-books/admin-books";
import AdminOrders from "../admin-orders/admin-orders";
import CustomerOrders from "../customer-orders/customer-orders";
import AdminAuthors from "../admin-authors/admin-authors";
import AuthPage from "../auth-page/auth-page";
import RegistrationPage from "../registration-page/registration-page";
import {BrowserRouter as Router} from "react-router-dom";
import {Switch, Route} from "react-router";

const MainPage = () => {

    return (
        <Container>
            <Router>
                <Header />
                <Switch>
                    <Route path="/registration">
                       <RegistrationPage />
                    </Route>
                    <Route path="/auth">
                       <AuthPage />
                    </Route>
                    <Route path="/admin/orders">
                       <AdminOrders />
                    </Route>
                    <Route path="/customer/orders">
                       <CustomerOrders />
                    </Route>
                    <Route path="/basket">
                       <Basket />
                    </Route>
                    <Route path="/admin/books">
                        <AdminBooks />
                    </Route>
                    <Route path="/admin/authors">
                        <AdminAuthors />
                    </Route>
                    <Route path="/catalog">
                       <Catalog />
                    </Route>
                    <Route path="/">
                       <Catalog />
                    </Route>
                </Switch>
            </Router>
        </Container>
    );
}

export default MainPage;