
import './App.css';
import { useTimer } from 'use-timer';
function App() {
  const {time,start,pause,reset,status}=useTimer();
  return (
    <>
     <div><button className='btn1' onClick={start}>Start</button>
     <button className="btn2" onClick={pause}>Pause</button>
     <button className="btn3" onClick={reset}>Reset</button></div>
     <p className='p'>Start Timer {time}</p>
     {status=='RUNNING'&& <p>Running...</p> }
    </>
  );
}

export default App;
