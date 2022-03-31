import React, {useEffect, useState} from 'react';
import {Button} from 'react-bootstrap';
import Modal from "react-bootstrap/Modal"
// import "bootstrap/dist/css/bootstrap.min.css"

const CheckinModalFIRW = (props) => {
    
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
                    <Modal.Title>First Warning Check-in</Modal.Title>
                </Modal.Header>
                <Modal.Body>Hey, you missed your first Checkin. Please Respond</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Confirm</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
 
export default CheckinModalFIRW;