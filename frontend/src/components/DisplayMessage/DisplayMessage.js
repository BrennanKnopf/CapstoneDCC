import React, {Fragment} from 'react';
import Table from 'react-bootstrap/esm/Table';

const DisplayMessage = (props) => {
   
    
    
    
    return (

      <div className='container'>
        <Fragment>
            <Table striped bordered hover variant="dark">
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
        </Fragment>
      </div>
        
      );
}
 
export default DisplayMessage;