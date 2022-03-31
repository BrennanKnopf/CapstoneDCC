import React, {useState, useEffect} from 'react';
import DateDisplay from '../../components/DateDisplay/DateDisplay';
import Messages from '../../components/Messages/Messages';
import useAuth from "../../hooks/useAuth";
import axios from 'axios';
import DisplayMessage from '../../components/DisplayMessage/DisplayMessage';
import MapContainer from "../../components/MapContainer/MapContainer";
import CountdownTimer from '../../CountdownTimer/CountdownTimer';
import CheckinModal from '../../components/CheckinModal/CheckinModal';



const MessagePage = (props) => {
    const [user, token] = useAuth();
    const [datemessage, setDateMessage] = useState([])
    const [ecmessage, setECMessage] = useState([])
    const [showModal, setShowModal] = useState(false)
   
    async function getUserMessages(){
        let response = await axios.get(`http://127.0.0.1:8000/api/Personal_Info/messages/sent/`,  { headers: {Authorization: 'Bearer ' + token}});
        setDateMessage(response.data)
    } 
    async function getEmergencyContactMessages(){
        let response = await axios.get(`http://127.0.0.1:8000/api/Personal_Info/messages/received/`,  { headers: {Authorization: 'Bearer ' + token}});
        setECMessage(response.data)
    } 

    useEffect(() => {
        getUserMessages()
      }, [])
    
    const time = new Date();
    time.setSeconds(time.getSeconds() + 5); // 5 minutes timer  


    return (  
        <div className='container' >
            <DateDisplay  user={user} token={token} dateinfo={props.date} />
            <Messages date={props.date} user={user} token={token} datemessage={datemessage} start={props.start}  />
            <DisplayMessage datemessage={datemessage} ecmessage={ecmessage} getEmergencyContactMessages={getEmergencyContactMessages} />
            <CountdownTimer expiryTimestamp={time} openClose= {setShowModal} />
            <CheckinModal showModal = {showModal} getLocation={props.getLocation}/>
            <MapContainer />
        </div>
    );
}
 
export default MessagePage;