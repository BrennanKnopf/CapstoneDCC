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
import MessagePage from './pages/MessagesPage/MessagePage';















function App(props) {
  const[date, setDate] = useState()
  
  const [latitude, setLatitude] = useState()
  const [longitude, setLongitude] = useState()



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

  const getDate = (someDate) => {
    console.log("getDate parameter", someDate)
    setDate(someDate)

  }
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <Navbar  />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage latitude={latitude} longitude= {longitude} getDate={getDate} refreshPage={refreshPage} />
            </PrivateRoute>
          }
        />
        <Route path="/account" element={<AccountPage/>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/messages" element={<MessagePage date={date} getLocation={getLocation} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
