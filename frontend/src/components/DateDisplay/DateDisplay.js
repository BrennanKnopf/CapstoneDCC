import React, {Fragment, useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';



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
                    </tr>
                    )}
                )}
                </tbody>
            </Table>
        </Fragment>
        ) 
     
}
 
export default DateDisplay;