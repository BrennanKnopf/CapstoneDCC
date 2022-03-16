import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Location from "../../components/Location/Location";
import { Wrapper, Status } from "@googlemaps/react-wrapper";


const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();

  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };
  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <Location />
    </div>
  );
};

export default HomePage;
