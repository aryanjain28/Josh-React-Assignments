import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'


var DashboardComponent = (props) => {
    var { id, avatar, first_name, last_name, email } = props.data
    return(
        <div >
            <Card style={{width:"30%", height:"60%", margin:"5%"}}>
                <CardBody>
                    <CardImg top width="100%" src={avatar} alt="Card image cap" />
                    <CardTitle className="text-center" tag='h5'><strong> {first_name} {last_name} </strong></CardTitle>
                    <CardSubtitle tag="h6">Email: {email}</CardSubtitle>
                    <CardText>{} .</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default DashboardComponent

