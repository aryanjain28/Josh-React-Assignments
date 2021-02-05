import axios from 'axios';
import {Form, Label, FormGroup, Input, Card, CardBody, Button} from 'reactstrap';
import DashboardComponent from '../components/DashboardComponent'
import { useState, useEffect } from 'react'
import { Container } from 'reactstrap'

const Dashboard = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get("https://reqres.in/api/users/4")
        .then((response) => {
            setUser(response.data.data)
            console.log(response.data.data);
        })
        .catch((error) => {
            const res = error.response
            if (res) {
                console.log(res.data.error);   
            }
            console.log(error);
            alert('Oops! Something went wrong!')
        });

    }, [])

    return(
        <Container fluid='md'>
            <DashboardComponent key={user.id} data={user}/>
        </Container>
    )









}

export default Dashboard