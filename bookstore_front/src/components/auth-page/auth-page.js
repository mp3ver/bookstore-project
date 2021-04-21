import { connect } from "react-redux";
import React, {useEffect, useState} from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {DoAuth} from "../../redux/actions/auth";
import {SetRole} from "../../redux/actions/role";
import {Redirect} from "react-router";

const AuthPage = (props) => {

    const [loginValue, setLoginValue] = useState('')
    const [passValue, setPassValue] = useState('')

    async function dAuth() {
        props.doAuth(userObject);
      }

      function fxx() {
        console.log(props.role);
      }

    function sleep(milliseconds) {
        //console.log("Start delay");
        console.log(props.role);
        const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < milliseconds);
        //console.log("End delay");
      }

      function waitForDOM () {
        let x = 0;
        console.log(x);
      
        if (x == 4) {
          // Делаем что-то с контейнером
        } else {
          x = x + 1;
          setTimeout(waitForDOM, 500); // Попробовать снова через 300 миллисекунд
        }
      }

      function sleep3(ms) {
        ms += new Date().getTime();
        while (new Date().getTime()< ms){}
        } 

    const prepareRole1 = () => {
        props.setRole("Auth...1");
    }

    const prepareRole2 = () => {
        props.setRole("Auth...2");
    }

    const prepareRole3 = () => {
        props.setRole("Auth...3");
    }

    function prepareRole4(x){
        props.setRole(x);
    }

    function authStatus(){

        switch(props.role) {
            case 'Wrong password':  
              alert('Неверный пароль');
              props.setRole('GUEST');
              break;
          
            case 'No such user': 
            alert('Неверный логин');
            props.setRole('GUEST');
            break;

            // case 'CUSTOMER': 
            // alert('Current role: CUSTOMER');
            // props.setRole('CUSTOMER');
            // break;

            // case 'ADMIN': 
            // alert('Current role: ADMIN');
            // props.setRole('ADMIN');
            // break;
          
            default:
                alert('Strange place: ' + props.role);
          }
    }


    const tryAuth = () => {

        userObject.login = loginValue;
        userObject.password = passValue;
        props.doAuth(userObject);

        //props.setRole("Auth...");
        // prepareRole();
        // while(!(props.role === "Auth...")){
        //     console.log(props.role);
        //     sleep3(2000);
        // }
        // alert(props.role);
    }

    const [userObject] = useState({
        id :'',
        login: '',
        password: '',
        role: ''
    });

    return (

        props.role && (props.role === "CUSTOMER" || props.role === "ADMIN"  ) ? <Redirect to={'/catalog'}/> :


        <div>

            {
                (props.role !== "CUSTOMER" && props.role !== "ADMIN" && props.role !== 'GUEST')
                &&
                authStatus()
            }

            <Form>
                <FormGroup>
                    <Label for="loginInput">Логин</Label>
                    <Input name="loginForm" id="loginInput" placeholder="Логин" onChange={event =>  setLoginValue(event.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="passInput">Пароль</Label>
                    <Input type="password" name="passForm" id="passInput" placeholder="Пароль" onChange={event =>  setPassValue(event.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Button  onClick={tryAuth}>Войти</Button> 
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
        doAuth: (data) => dispatch(new DoAuth(data)),
        setRole: (roleValue) => dispatch(new SetRole(roleValue))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);