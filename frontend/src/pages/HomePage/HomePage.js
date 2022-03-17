import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import MapContainer from "../../components/MapContainer/MapContainer";




const HomePage = (props) => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();


  

  
  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <MapContainer  latitude={props.latitude} longitude= {props.longitude} />
      
    </div>
  );
};

export default HomePage;
