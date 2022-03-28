import React, {Fragment} from 'react';
import Table from 'react-bootstrap/Table';




const DateDisplay = (props) => {
  
    
  



    
    return (
        <Fragment>
            <Table striped bordered hover variant="dark">
                <thead>
                        <tr>
                        <th>Date Info </th>
                        <th>Emergency Contact</th>
                        </tr>
                </thead>
                <tbody>
                {props.dateinfo.map((date) => {
                    return(
                    <tr>
                        <td> {date.date_info}</td>
                        <td> {date.emergency_contact}</td>
                        <input>
                        </input>
                    </tr>
                    )}
                )}
                </tbody>
            </Table>
        </Fragment>
        ) 
     
}
 
export default DateDisplay;