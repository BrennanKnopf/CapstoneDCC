import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';




const Messages = (props) => {
    
    const [message, setMessage] = useState('');
    const [timer, setTimer] = useState(3600);
    console.log(timer)
    const id = useRef(null);
    const clear = () => {
      window.clearInterval(id.current);
    };
    useEffect(() => {
      id.current = window.setInterval(() => {
        setTimer((time) => time - 1);
      }, 3600);
      return () => clear();
    }, []);
  
   useEffect(() => {
      if (timer === 0) {
        clear();
      }
    }, [timer]);
   
    function handleSubmit(event) {
        event.preventDefault();
        let newMessage = {
            dater: props.date[0].id,
            emergency_contact: props.date[0].emergency_contact,
            message: message
        };
        console.log(newMessage);
        addNewMessage(newMessage)
        createMessage(newMessage)
        setTimer()
        
    }
    
    function addNewMessage(newMessage){

        let tempMessage = [...message, newMessage]
    
        setMessage(tempMessage)
    
    }



    async function createMessage(message){
        let response = await axios.post(`http://127.0.0.1:8000/api/Personal_Info/messages/sent/`, message,  { headers: {Authorization: 'Bearer ' + props.token}});
        console.log(response.data)
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