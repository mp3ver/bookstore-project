import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import React, {useEffect, useState} from "react";
import {Register} from "../../redux/actions/registration";
import {SetRole} from "../../redux/actions/role";
import {Redirect} from "react-router";

const RegistrationPage = (props) => {

    const [loginValue, setLoginValue] = useState('')
    const [passFirstValue, setPassFirstValue] = useState('')
    const [passSecondValue, setPassSecondValue] = useState('')

    const tryRegister = () => {

        if(passFirstValue !== passSecondValue){
            alert("Пароли не совпадают");
            return;
        }

        let userObject = {
            login: loginValue,
            password: passFirstValue,
            role: "CUSTOMER"
        }

        props.register(userObject);

    }

    function registrationStatus(){

        switch(props.role) {
            case 'Пользователь с таким логином уже существует':  
              alert('Пользователь с таким логином уже существует');
              props.setRole('GUEST');
              break;
          
            case 'Пользователь успешно зарегистрирован': 
            alert('Пользователь успешно зарегистрирован');
            props.setRole('CUSTOMER');
            break;
          
            default:
                alert('Strange place: ' + props.role);
          }
    }

    return (

        props.role && (props.role === "CUSTOMER") ? <Redirect to={'/catalog'}/> :

        <div>
            {
                (props.role !== "CUSTOMER" && props.role !== "ADMIN" && props.role !== 'GUEST')
                &&
                registrationStatus()
            }

            <Form>
                <FormGroup>
                    <Label for="loginInput">Логин</Label>
                    <Input name="loginForm" id="loginInput" placeholder="Логин" onChange={event =>  setLoginValue(event.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="passFirstInput">Пароль</Label>
                    <Input type="password" name="passFirstForm" id="passFirstInput" placeholder="Пароль" onChange={event =>  setPassFirstValue(event.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="passSecondInput">Повторите пароль</Label>
                    <Input type="password" name="passSecondForm" id="passSecondInput" placeholder="Повторите пароль" onChange={event =>  setPassSecondValue(event.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Button  onClick={tryRegister}>Зарегистрироваться</Button> 
                </FormGroup>
            </Form>
        </div>
    )

}

const mapStateToProps = state => ({
    role: state.role.role
})

const mapDispatchToProps = dispatch => {
    return {
        register: (newUserData) => dispatch(new Register(newUserData)),
        setRole: (roleValue) => dispatch(new SetRole(roleValue))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);