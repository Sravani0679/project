import React from "react";
import { useState } from "react";
import './Relax.scss';

const Relax = () => {

    const [countDown, setCountDown] = useState(0);
    const [runTimer, setRunTimer] = useState(false);
   // const [time, setTime] = useState('00:00');
  
    React.useEffect(() => {
      let timerId;
  
      if (runTimer) {
        setCountDown(60 * 5);
        timerId = setInterval(() => {
          setCountDown((countDown) => countDown - 1);
        }, 1000);
        
      } else {
        clearInterval(timerId);
      }
  
      return () => clearInterval(timerId);
    }, [runTimer]);
  
    //5 mins
    React.useEffect(() => {
      if (countDown < 0 && runTimer) {
        console.log("expired");
        setRunTimer(false);
        setCountDown(0);
      }
    }, [countDown, runTimer]);


    // const handleTwoMins = (props) => {
    //     let setMins = "02";
    //     let setSeconds = "00"
    // const setTimer = setMins +"::" + setSeconds
    //     setTime(setTimer)
    // }
    // const handleThreeMins = (props) => {
    //     let setMins = "03";
    //     let setSeconds = "00"
    // const setTimer = setMins +"::" + setSeconds
    //     setTime(setTimer)
    // }

    // const handleFiveMins = (props) => {
    //     let setMins = "05";
    //     let setSeconds = "00"
    // const setTimer = setMins +"::" + setSeconds
    //     setTime(setTimer)
    // }


const togglerTimer = () => {
    setRunTimer((t) => !t);
    
}

  const seconds = String(countDown % 60).padStart(2, 0);
  const minutes = String(Math.floor(countDown / 60)).padStart(2, 0);

  function handleMouseMove(ev) { 
   if(runTimer) {
   alert("Oops! Try Again")
    setCountDown(0);
   }
  }
  
    return(
<div onMouseMove={(ev)=> handleMouseMove(ev)}>

<div>
<h3>Don't move your cursor, Sit back and relax</h3>
<button className="btn-start">2 Mins</button>
  <button className="btn-start" onClick={()=>togglerTimer()}>5 Mins</button>
    <button className="btn-start" onClick={()=>togglerTimer()}> 3 Mins</button>
    <div>
       <b> Time : {minutes}:{seconds} </b>

      </div>
    </div>
      </div>
  );
}

export default Relax;