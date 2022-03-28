import React, {useState, useEffect} from 'react';
import DateDisplay from '../../components/DateDisplay/DateDisplay';
import Messages from '../../components/Messages/Messages';
import useAuth from "../../hooks/useAuth";
import axios from 'axios';
import DisplayMessage from '../../components/DisplayMessage/DisplayMessage';




const MessagePage = (props) => {
    const [user, token] = useAuth();
    const [datemessage, setDateMessage] = useState([])
    const [ecmessage, setECMessage] = useState([])
   
   
   
    async function getUserMessages(){
        console.log("Hello")
        let response = await axios.get(`http://127.0.0.1:8000/api/Personal_Info/messages/sent/`,  { headers: {Authorization: 'Bearer ' + token}});
        console.log(response.data)
        setDateMessage(response.data)
    } 
    async function getEmergencyContactMessages(){
        console.log("Hello")
        let response = await axios.get(`http://127.0.0.1:8000/api/Personal_Info/messages/received/`,  { headers: {Authorization: 'Bearer ' + token}});
        console.log(response.data)
        setECMessage(response.data)
    } 

    useEffect(() => {
        getUserMessages()
      }, [])

    return (  
        <div className='container' >
            <DateDisplay  user={user} token={token} dateinfo={props.date} />
            <Messages date={props.date} user={user} token={token}   />
            <DisplayMessage datemessage={datemessage} ecmessage={ecmessage} getEmergencyContactMessages={getEmergencyContactMessages} timer={props.timer} />
        </div>
    );
}
 
export default MessagePage;