import React, {useState} from 'react';
import axios from 'axios';



const Messages = (props) => {
    
    const [message, setMessage] = useState('');

   
    function handleSubmit(event) {
        event.preventDefault();
        let newMessage = {
            dater: props.date[0].id,
            emergency_contact: props.date[0].emergency_contact,
            message: message
        };
        addNewMessage(newMessage)
        createMessage(newMessage)
        props.start()
    }
    
    function addNewMessage(newMessage){

        let tempMessage = [...message, newMessage]
    
        setMessage(tempMessage)
    
    }



    async function createMessage(message){
        let response = await axios.post(`http://127.0.0.1:8000/api/Personal_Info/messages/sent/`, message,  { headers: {Authorization: 'Bearer ' + props.token}});
        setMessage(response.data)
    }
    
   
    

    return ( 
        <form onSubmit={handleSubmit} className ='form-grid' >
            <div className='form-group'>
            <label>Message</label>
            <input type = 'post'  onChange={(event) => setMessage(event.target.value)} />
            <div className="d-flex justify-content-end">
            <button type='submit' className='btn btn-primary'  >Send</button>
            </div>
            </div>
        </form> 


     );
}
 
export default Messages;