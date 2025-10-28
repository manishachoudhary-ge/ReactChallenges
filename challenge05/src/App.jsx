import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    age: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted! Check console for data.");
  };

  return (
    <>
         <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label> <br />
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>{" "}
        <br />
        <div>
          <label htmlFor="fullName">Full Name:</label> <br />
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>{" "}
        <br />
        <div>
          <label htmlFor="age">Age:</label> <br />
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>{" "}
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <div>Request Sent to DB with below request data</div>
      <ul>
        <li>UserName: {formData.username}</li>
        <li>Firstname: {formData.fullName}</li>
        <li>Age: {formData.age}</li>
      </ul>
    </div>
 
     
    </>
  )
}

export default App
