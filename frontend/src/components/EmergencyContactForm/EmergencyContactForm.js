import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/esm/Container';  
 

const EmergencyContactForm = (props) => {
    
    const [emergencycontact, setEmergencyContact] = useState({})


    function handleSubmit(event) {
        event.preventDefault();
        let newEmergencyContact = {
            user: props.user.user_id,
            emergencycontact: props.user.user_id
        
        };
        props.createEmergencyContact(newEmergencyContact);
        setEmergencyContact(newEmergencyContact);
        
    }

    
    return ( 


        <Container className='form'>
        <Form id="EmergencyContactForm" onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Label>Start Emergency Contact:</Form.Label>
        <Form.Control input="post" type='text' name="emergency_contact" value={emergencycontact} onChange={(event) => setEmergencyContact(event.target.value)} size='lg' />
        <Form.Text>Emergency Contact</Form.Text>
        <button type='submit' className='btn btn-primary'  >Set Emergency Contact</button> 
        </Form.Group>
        </Form>
    </Container>
     );
}
 
export default EmergencyContactForm;