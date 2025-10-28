import React, { useState, useEffect, useRef } from "react";

function App() {
  const [timeLeft, setTimeLeft] = useState(10);
  const [clicks, setClicks] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          setIsActive(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const handleClick = () => {
    if (isActive) setClicks((prev) => prev + 1);
  };

  return (
    <div className="App">
      <h3>No of Clicks until timer expires</h3>
      <div className="Box"
      >
        <h1>{clicks}</h1>
        <p>Time left: {timeLeft} seconds</p>

        {isActive && (
          <button onClick={handleClick} >   +  </button>
        )}
      </div>
    </div>
  );
}

export default App;
