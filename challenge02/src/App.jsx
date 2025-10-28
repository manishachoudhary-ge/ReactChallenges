import { useState , useRef} from 'react'

import './App.css'

function App() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);

    const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };
  const stopTimer = (timer) => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };
  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTimer(0);
  };

  return (
    <>
    <div className="container">
      <h1>Timer</h1>
      <span> {Math.floor(timer / 60)} mins </span>
      <span> {timer % 60} secs</span>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
      
    </>
  )
}

export default App
