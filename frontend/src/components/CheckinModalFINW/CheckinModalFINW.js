import React, {useEffect, useState} from 'react';
import {Button} from 'react-bootstrap';
import Modal from "react-bootstrap/Modal"
// import "bootstrap/dist/css/bootstrap.min.css"

const CheckinModalFINW = (props) => {
    
    const [show, setShow] = useState(false);
    const [newLat, setNewLat] = useState();
    const [newLong, setNewLong] = useState();
    
   
    function handleClose(){
        setShow(false);
        props.getLocation();
        console.log(props.latitude);
        console.log(props.longitude);
        setNewLat(props.latitude)
        setNewLong(props.longitude)
    }
    
    
    
    const handleShow = () => setShow(true);
  
    
    
    useEffect(()=>{
        if(props.showModal == false){
            handleClose()
        }
        else{
            handleShow()
        }

    },[props.showModal])
    
    return (  
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Final Check-in</Modal.Title>
                </Modal.Header>
                <Modal.Body>If you dont not hit confirm in this checkin, your emergency contact will be notified to contact emergency services.</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Confirm</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
 
export default CheckinModalFINW;