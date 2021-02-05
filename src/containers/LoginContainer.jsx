import axios from 'axios';
import {Form, Label, FormGroup, Input, Card, CardBody, Button} from 'reactstrap';
import LoginComponent from '../components/LoginComponent'
import  { useAuth } from '../context/Auth'
import DashboardContainer from '../containers/DashboardContainer'
import React, { useState } from "react";


const Login = () => {

    const {setAuthTokens} = useAuth();
    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleClick = (event) => {

        event.preventDefault();

        const email = event.target[0].value
        const password = event.target[1].value

        axios.post("https://reqres.in/api/login", {
            "email":email,
            "password":password
        })
        .then((response) => {
            if (response.status === 200){
                console.log(response.data.token);
                setAuthTokens(response.data.token)
                setLoggedIn(true)
            }
        })
        .catch((error) => {
            const res = error.response
            if (res) {
                console.log(res.data.error);   
            }
            console.log(error);
            alert('Oops! Looks like credentials are wrong!')
        });
    }

    if(isLoggedIn){
        return <DashboardContainer />
    }


    return(
        <LoginComponent buttonClicked={handleClick}/>
    )
}

export default Login