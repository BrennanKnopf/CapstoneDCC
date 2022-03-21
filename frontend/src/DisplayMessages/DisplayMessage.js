import React from 'react';


const DisplayMessage = (props) => {

    console.log(props.message)
    return (  
        <table className="displayMessage">
        <tbody>
                return (
                    <tr key = {index}>
                        <div className='border-box'>
                        <td>{props.user.username}</td>
                        <td>{message.message}</td>
                        </div>
                    </tr>
                );
            )
        </tbody>
    </table>

    ;
}
 
export default DisplayMessage;