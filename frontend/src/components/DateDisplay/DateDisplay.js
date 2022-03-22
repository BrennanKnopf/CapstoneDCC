import React, {Fragment, useState} from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';



const DateDisplay = (props) => {
    const [dateinfo, setDateInfo] = useState({})
    
    async function getDateInfo(){
        let response = await axios.get(`http://127.0.0.1:8000/api/Personal_Info/Dater/${props.user.user_id}/`,  { headers: {Authorization: 'Bearer ' + props.token}});
        setDateInfo(response.data)
    }
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
                        <td>Info: {dateinfo.date_info}</td>
                        <td>emergency_contact: {dateinfo.emergency_contact}</td>
                    </tr>
                </tbody>
            </Table>
        </Fragment>
        ) 
     
}
 
export default DateDisplay;