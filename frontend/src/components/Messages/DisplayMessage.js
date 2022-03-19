import React from 'react';

const DisplayMessage = (props) => {
    return (  
        <table className="displayMessage">
        <tbody>
            {props.message.map((message, index) =>{
                return (
                    <tr key = {index}>
                        <div className='border-box'>
                        <td>{message.name}</td>
                        <td>{message.message}</td>
                        </div>
                    </tr>
                );
            })}
        </tbody>
    </table>

    );
}
 
export default DisplayMessage;