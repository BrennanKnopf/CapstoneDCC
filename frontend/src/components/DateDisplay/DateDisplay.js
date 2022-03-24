import React from 'react';
import Table from 'react-bootstrap/Table';
const DateDisplay = (props) => {
    return (
        <Table striped bordered hover variant="dark">
        <thead>
                <tr>
                <th>Date Info</th>
                <th>Emergency Contact</th>
                </tr>
        </thead>
        <tbody>

            <tr>
                <td>{props.date.date_info}</td>
                <td>{props.date.emergency_contact}</td>
            </tr>
            </tbody>
            </Table>
        ) 
     
}
 
export default DateDisplay;