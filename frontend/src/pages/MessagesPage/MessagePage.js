import React, {useState, useEffect} from 'react';
import DateDisplay from '../../components/DateDisplay/DateDisplay';
import Messages from '../../components/Messages/Messages';
import useAuth from "../../hooks/useAuth";
import axios from 'axios';
import DisplayMessage from '../../components/DisplayMessage/DisplayMessage';
import MapContainer from "../../components/MapContainer/MapContainer";
import CountdownTimer from '../../CountdownTimer/CountdownTimer';
import CheckinModal from '../../components/CheckinModal/CheckinModal';
import CheckinModalFIRW from '../../components/CheckinModalFIRW/CheckinModalFIRW';
import CheckinModalFINW from '../../components/CheckinModalFINW/CheckinModalFINW';



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
    time.setSeconds(time.getSeconds() + 60); // 5 minutes timer  

    //   console.log(props.latitude)
    //   console.log(props.longitude)
    return (  
        <div className='container' >
            <DateDisplay  user={user} token={token} dateinfo={props.date} />
            <Messages date={props.date} user={user} token={token} datemessage={datemessage} newLat={props.newLat} newLong= {props.newLong}  />
            <DisplayMessage datemessage={datemessage} ecmessage={ecmessage} getEmergencyContactMessages={getEmergencyContactMessages} />
            <CountdownTimer expiryTimestamp={time} openClose= {setShowModal} />
            <CheckinModal showModal = {showModal} getLocation={props.getLocation} latitude={props.latitude} longitude= {props.longitude}/>
            <CheckinModalFIRW showModal = {showModal} getLocation={props.getLocation} latitude={props.latitude} longitude= {props.longitude}/>
            <CheckinModalFINW showModal = {showModal} getLocation={props.getLocation} latitude={props.latitude} longitude= {props.longitude}/>
            <MapContainer  latitude={props.newLat} longitude= {props.newLong}/>
        </div>
    );
}
 
export default MessagePage;