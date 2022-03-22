import React from 'react';
import Messages from '../../components/Messages/Messages';
import useAuth from "../../hooks/useAuth";




const MessagePage = (props) => {
    const [user, token] = useAuth();
    console.log('Message Page:', props.date)
    return (  

       <Messages date={props.date} user={user} token={token}   />

    );
}
 
export default MessagePage;