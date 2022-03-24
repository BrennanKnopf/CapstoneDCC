import React from 'react';
import DateDisplay from '../../components/DateDisplay/DateDisplay';
import Messages from '../../components/Messages/Messages';
import useAuth from "../../hooks/useAuth";




const MessagePage = (props) => {
    const [user, token] = useAuth();
    
    
    return (  
        <div className='container' >
            <DateDisplay  user={user} token={token} dateinfo={props.date} />
            <Messages date={props.date} user={user} token={token}   />
        </div>
    );
}
 
export default MessagePage;