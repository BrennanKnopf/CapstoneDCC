import React, {useEffect, useState} from 'react';
import {Button} from 'react-bootstrap';
import Modal from "react-bootstrap/Modal"
// import "bootstrap/dist/css/bootstrap.min.css"

const CheckinModal = (props) => {
    
    const [show, setShow] = useState(false);

    function handleClose(){
        setShow(false);
        props.getLocation();
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
                    <Modal.Title>Check-in</Modal.Title>
                </Modal.Header>
                <Modal.Body>Hey, its time to let your friend know things are ok</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Confirm</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
 
export default CheckinModal;