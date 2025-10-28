import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [city, setCity] = useState([]);
  const [inputvalue, setInputvalue] = useState("");

  const handleInputChange = (e) => {
    setInputvalue(e.target.value);
  };
  const removeCity = (cityToRemove) => {
    setCity((prevCities) => prevCities.filter((city) => city !== cityToRemove));
  };

  const addCities = (e) => {
    setCity((prevCity) => [...prevCity, inputvalue]);
    setInputvalue("");
  };

  return (
    <>
       <div className="App">
      <input
        type="text"
        placeholder="Add City"
        value={inputvalue}
        onChange={handleInputChange}
      />
      <button onClick={addCities}>Add</button>
      <ul>
        {city.map((cityName, index) => (
          <li key={index}>
            {cityName}
            <button onClick={() => removeCity(cityName)}> X</button>{" "}
          </li>
        ))}
      </ul>
    </div>
  
    </>
  )
}

export default App
