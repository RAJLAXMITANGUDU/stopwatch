import React,{useState,useRef} from "react";
const Stopwatch=()=>{
  const [time,setTime]=useState(0);
  const [isRunning,setIsRunning]=useState(false);
  const timerRef=useRef(null);
  const startsStopHandler=()=>{
    if(isRunning){
      clearInterval(timerRef.current);
      setIsRunning(false);
    } else {
      timerRef.current=setInterval(()=>{
        setTime((prevTime)=>prevTime+1);
      },1000);
      setIsRunning(true);
    }
  };
  const resetHandler=()=>{
    clearInterval(timerRef.current);
    setTime(0);
    setIsRunning(false);
  };
  const formatTime=(time)=>{
    const minutes=Math.floor(time/60);
    const seconds=time%60;
    return `${minutes}:${seconds.toString().padStart(2,"0")}`;
  };
  return(
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(time)}</p>
      <div>
        <button onClick={startsStopHandler}>{isRunning ? "Stop" : "Start"}</button>
        <button onClick={resetHandler}>Reset</button>
      </div>
    </div>
  );
};
export default Stopwatch;