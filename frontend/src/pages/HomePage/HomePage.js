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
  const [date, setDate] = useState({})
 // console.log("login credentials", user)
 // console.log("dateinformation", date)

  useEffect(() => {
    
  }, [])

  async function createDate(newDate){
    // console.log("newDate: ", newDate)
    let response = await axios.post(`http://127.0.0.1:8000/api/Personal_Info/Dater/${user.user_id}/`, newDate,  { headers: {Authorization: 'Bearer ' + token}});
    
    setDate(response.data)

    props.getDate(response.data)
    
  }

  
  return (
    <div className="container">
        <h1>Home Page for {user.username}!</h1>
          <DateForm createDate={createDate} user={user} />
          <DateDisplay  date={date} />
          <MapContainer  latitude={props.latitude} longitude= {props.longitude} />
    </div>
  );
};

export default HomePage;
