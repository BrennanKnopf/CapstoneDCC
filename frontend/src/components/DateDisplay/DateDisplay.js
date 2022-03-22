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
                    <tr>
                        <td>Info: {props.date.date_info}</td>
                        {/* <td>{props.date.date_info}</td> */}
                        <td>{props.date.emergency_contact}</td>
                    </tr>
                </tbody>
            </Table>
        </Fragment>
        ) 
     
}
 
export default DateDisplay;