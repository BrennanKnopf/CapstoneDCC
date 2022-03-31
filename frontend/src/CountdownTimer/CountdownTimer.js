import React from 'react';
import { useTimer } from 'react-timer-hook';


// const CountdownTimer = (props) => {
function CountdownTimer( props, { expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: props.openClose});


  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '100px'}}>
       <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button onClick={() => {
        const time = new Date();
        time.setSeconds(time.getSeconds() + 10);
        restart(time)
      }}>Restart</button>
    </div>
  );
}
export default CountdownTimer;
   