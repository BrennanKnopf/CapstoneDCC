import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import MapContainer from "../../components/MapContainer/MapContainer";
import DateForm from "../../components/DateForm/Dateform";
import DateDisplay from "../../components/DateDisplay/DateDisplay";


const HomePage = (props) => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [username, setUserName] = useState('')
  const [dateinfo, setDateInfo] = useState([])
  const [emergency_contact, setEmergencyContact] = useState('')
  

  
  useEffect(() => {
    getDateInfo()
  }, [])

  async function getDateInfo(){
    console.log("Hello")
    let response = await axios.get(`http://127.0.0.1:8000/api/Personal_Info/Dater/${user.id}/`,  { headers: {Authorization: 'Bearer ' + token}});
    console.log(response.data)
    setDateInfo(response.data)
    props.getDate(response.data)
}

  async function createDate(newDate){
    // console.log("newDate: ", newDate)
    let response = await axios.post(`http://127.0.0.1:8000/api/Personal_Info/Dater/${user.id}/`, newDate,  { headers: {Authorization: 'Bearer ' + token}});
    await find_user()
    
  }

  async function find_user(){
  
    let response = await axios.get(`http://127.0.0.1:8000/api/Personal_Info/find_user/${username}/`, { headers: {Authorization: 'Bearer ' + token}});
    console.log(response.data)
    setEmergencyContact(response.data)
  }
  
  return (
    <div className="container">
        <h1>Home Page for {user.username}!</h1>
          <DateForm createDate={createDate} user={user} find_user = {find_user} emergency_contact username={username} setUserName={setUserName}  />
          <DateDisplay user={user} token={token} dateinfo={dateinfo}/>
          <MapContainer  latitude={props.latitude} longitude= {props.longitude} />
    </div>
  );
};

export default HomePage;
