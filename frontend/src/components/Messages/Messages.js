import React, {useState} from 'react';



const Messages = (props) => {
    
    const[name, setName] = useState('');
    const [message, setMessage] = useState('');
    
   
    function handleSubmit(event) {
        event.preventDefault();
        let newMessage = {
            name: name,
            message: message
        };
        console.log(newMessage);
        addNewMessage(newMessage)
    }
    function addNewMessage(newMessage){

        let tempMessage = [...message, newMessage]
    
        setMessage(tempMessage)
    
    }
    
    return ( 
        <form onSubmit={handleSubmit} className ='form-grid' >
            <div className='form-group'>
            <label>Name</label>
            <input type = 'name' value ={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div className='form-group'>
            <label>Message</label>
            <input type = 'post' value={message} onChange={(event) => setMessage(event.target.value)} />
            <div className="d-flex justify-content-end">
            <button type='submit' className='btn btn-primary'  >Create</button>
            </div>
            </div>
    </form> 


     );
}
 
export default Messages;