import React, {useState} from 'react';
import axios from 'axios';



const Messages = (props) => {
    
    const [message, setMessage] = useState('');
    
   
    function handleSubmit(event) {
        event.preventDefault();
        let newMessage = {
            dater: props.date.user,
            emergency_contact: props.date.emergency_contact,
            message: message
        };
        console.log(newMessage);
        addNewMessage(newMessage)
        createMessage(newMessage)
    }
    function addNewMessage(newMessage){

        let tempMessage = [...message, newMessage]
    
        setMessage(tempMessage)
    
    }

    async function createMessage(message){
        let response = await axios.post(`http://127.0.0.1:8000/api/Personal_Info/messages/${props.user.user_id}/`, message,  { headers: {Authorization: 'Bearer ' + props.token}});
        console.log(response.data)
        setMessage(response.data)
    }
    
    return ( 
        <form onSubmit={handleSubmit} className ='form-grid' >
            <div className='form-group'>
            <label>Message</label>
            <input type = 'post' value={message} onChange={(event) => setMessage(event.target.value)} />
            <div className="d-flex justify-content-end">
            <button type='submit' className='btn btn-primary'  >Send</button>
            </div>
            </div>
    </form> 


     );
}
 
export default Messages;