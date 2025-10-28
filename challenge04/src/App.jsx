import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [val, setVal] = useState(10);
  const [error, setError] = useState("");
  const handleInputChange = (e) => {
    const inputValue = Number(e.target.value);

    setError("");
    if (inputValue > 100) {
      setError("Please enter a percentage not greater than 100.");
    } else {
      setVal(inputValue);
    }
  };

  return (
    <>
    <div className="App">
        <h1>Progress bar</h1>
        <div className="container">
          <div style={{ width: `${val}%` }} className="innerContainer">
            {val}%
          </div>
        </div>
        <form>
          <label for="html">Input Percentage:</label>
          <input
            val={val}
            onChange={handleInputChange}
            type="number"
            min="0"
            max="100"
          />
        </form>
        {/* {error && <div>{error}</div>} */}
        {error && <div>{error}</div>}
      </div>
       
    </>
  )
}

export default App
