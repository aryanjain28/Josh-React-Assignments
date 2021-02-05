import axios from 'axios';
import {Form, Label, FormGroup, Input, Card, CardBody, Button} from 'reactstrap';

const LoginComponent = (props) => {

    return(
        <Card style={{width:"30%", height:"60%", margin:"5%"}}>
            <Form onSubmit={props.buttonClicked}>
                <FormGroup>
                    <Input style={{width:"100%", marginTop:"5%"}} type="email" name="email" id="exampleEmail" placeholder="Email" />
                    <Input style={{width:"100%", marginTop:"5%"}} type="password" name="password" id="examplePassword" placeholder="Password" />
                    <Button style={{width:"30%", marginTop:"5%"}} color="success" >Login</Button>
                </FormGroup>
            </Form>
        </Card>
    )
}


export default LoginComponent