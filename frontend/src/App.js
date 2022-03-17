import React, {useState, useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AccountPage from './pages/Account Page/AccountPage';
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import PrivateRoute from "./utils/PrivateRoute";













function App(props) {



  const [latitude, setLatitude] = useState()
  console.log(latitude)
  const [longitude, setLongitude] = useState()
  console.log(longitude)
  const [userAddress, setUserAddress] = useState()


  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  function getCoordinates(position) {
    setLatitude(position.coords.latitude)
    setLongitude(position.coords.longitude)
  }
  useEffect(() => {
    getLocation()
}, [])

 


  return (
    <div>
      <Navbar  />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage latitude={latitude} longitude= {longitude} />
            </PrivateRoute>
          }
        />
        <Route path="/account" element={<AccountPage/>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    {/* <h2>
      React Geolocaiton Example
    </h2>
    <button onClick={getLocation}>Get Coordinates</button>
    <h4>HTML5 Coordinates</h4>
    <p> Latitude: {latitude}</p>
    <p> Longitude: {longitude}</p>
    <h4>Google Maps Reverse Geocoding</h4>
    <p>Address: {userAddress}</p> */}

    </div>
  );
}

export default App;
