import React, {Fragment, useEffect} from 'react';
import Table from 'react-bootstrap/Table';

const DisplayMessage = (props) => {
   
  useEffect(() => {
    props.getEmergencyContactMessages()
  }, []) 
    
  
    return (

      <div className='container'>
        <Fragment>
            <Table striped bordered hover variant="light">
                <thead>
                        <tr>
                        <th>Messages</th>
                        <th>Emergency Contact</th>
                        </tr>
                </thead>
                <tbody>
                {props.datemessage.map((date) => {
                    return(
                    <tr>
                        <td> {date.message}</td>
                        <td> {date.emergency_contact}</td>
                    </tr>
                    )}
                )}
                </tbody>
            </Table>
            <Table striped bordered hover variant="light">
                <thead>
                        <tr>
                        <th>Messages</th>
                        <th>Dater</th>
                        </tr>
                </thead>
                <tbody>
                {props.ecmessage.map((date) => {
                    return(
                    <tr>
                        <td> {date.message}</td>
                        {/* <td> {date.dater}</td> */}
                    </tr>
                    )}
                )}
                </tbody>
            </Table>
        </Fragment>
      </div>
        
      );
}
 
export default DisplayMessage;