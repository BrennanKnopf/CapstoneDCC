import React, {useState, useAuth} from 'react';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/esm/Container';   




const DateForm = (props) => {

    const [date_info, setDateInfo] = useState('')
    const [unique_password, setUniquePassword] = useState('')
    const [emergency_contact, setEmergencyContact] = useState('')
    


    function handleSubmit(event) {
        event.preventDefault();
        let newDate = {
            user: props.user.user_id,
            date_info: date_info,
            unique_password: unique_password,
            emergency_contact: emergency_contact,
            


        };
        console.log(newDate);
        props.createDate(newDate);
        setDateInfo('');
        setUniquePassword('');
        setEmergencyContact('');
    }



    return (

        <Container className='form'>
        <Form id="dateForm" onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Label>Start a new date:</Form.Label>
        <Form.Control input="post" type='text' name="date_info" value={date_info} onChange={(event) => setDateInfo(event.target.value)} size='lg' />
        <Form.Text>Date Info</Form.Text>
        <Form.Control input="post" type='text' name="unique_password" value={unique_password} onChange={(event) => setUniquePassword(event.target.value)} size='lg' />
        <Form.Text>Unique Password</Form.Text>
        <Form.Control input="post" type='text' name="emergency_contact" value={emergency_contact} onChange={(event) => setEmergencyContact(event.target.value)} size='lg' />
        <Form.Text>Emergency Contact</Form.Text>
        <button type='submit' className='btn btn-primary'  >Start Date</button> 
        </Form.Group>
        </Form>
    </Container>

     );
}
 
export default DateForm;