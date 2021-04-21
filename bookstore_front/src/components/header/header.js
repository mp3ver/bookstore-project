import React from "react";
import { NavLink } from "react-router-dom";
import {Jumbotron, Button, Label, Breadcrumb, BreadcrumbItem} from "reactstrap";
import { connect } from "react-redux";
import {SetRole} from "../../redux/actions/role";
import {SetBasic} from "../../redux/actions/basic";

const Header = (props) => {

    const checkRole = () => {
        let roleAtBae64 = btoa(props.role);
        alert(props.basic);
    }

    const doLogOut = () => {
        props.setRole("GUEST");
        props.setBasic("");
    }

    return (
        <Jumbotron>
            {/* <h1 className="display-3">Essential Book Store</h1>
            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-2" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
                <Button color="primary">Learn More</Button>
            </p>
            <Label>
                Current role: {props.role}
            </Label> */}

            <h1 className="display-3">Книжный магазин</h1>

            {/* <h1 className="display-3">Книжный магазин</h1>
            <p>
                <Label>
                    Current role: {props.role}
                </Label>
            </p>
            <p>
                <Button id="checkRoleButton" onClick={checkRole}>Check role</Button>
            </p> */}

            <Breadcrumb>
                {
                    (props.role && (props.role === "CUSTOMER" || props.role === "ADMIN" || props.role === 'GUEST'))
                    &&
                    <BreadcrumbItem>
                        <NavLink to="/catalog">Каталог</NavLink>
                    </BreadcrumbItem>
                }
                {
                    (!props.role || props.role === 'GUEST')
                    &&
                    <BreadcrumbItem>
                        <NavLink to="/auth">Вход</NavLink>
                    </BreadcrumbItem>
                }
                {
                    (!props.role || props.role === 'GUEST')
                    &&
                    <BreadcrumbItem>
                        <NavLink to="/registration">Регистрация</NavLink>
                    </BreadcrumbItem>
                }
                {
                    (props.role && (props.role === "CUSTOMER" || props.role === "ADMIN"))
                    &&
                    <BreadcrumbItem>
                         <NavLink to="/basket">Корзина</NavLink>
                    </BreadcrumbItem>
                }
                {
                    (props.role &&  props.role === "CUSTOMER")
                    &&
                    <BreadcrumbItem>
                         <NavLink to="/customer/orders">Мои заказы</NavLink>
                    </BreadcrumbItem>
                }
                {
                    (props.role &&  props.role === "ADMIN")
                    &&
                    <BreadcrumbItem>
                         <NavLink to="/admin/authors">Авторы</NavLink>
                    </BreadcrumbItem>
                }
                {
                    (props.role &&  props.role === "ADMIN")
                    &&
                    <BreadcrumbItem>
                         <NavLink to="/admin/orders">Заказы</NavLink>
                    </BreadcrumbItem>
                }
                {/* <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
                <BreadcrumbItem active>Data</BreadcrumbItem>
            </Breadcrumb>
            <NavLink to="/"> Link to catalog</NavLink>
            <NavLink to="/basket"> Link to basket</NavLink> */}
            </Breadcrumb>
            {
                (props.role &&  (props.role === "CUSTOMER" || props.role === "ADMIN"))
                &&
                <Button id="logOutButton" onClick={doLogOut}>Выход</Button>
            }
        </Jumbotron>
    );
}

const mapStateToProps = state => ({
    role: state.role.role,
    basic: state.basic.basic
})

const mapDispatchToProps = dispatch => {
    return {
        setRole: (roleValue) => dispatch(new SetRole(roleValue)),
        setBasic: (basicValue) => dispatch(new SetBasic(basicValue))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);