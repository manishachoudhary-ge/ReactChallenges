import { useState } from 'react'
import './App.css'

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <div className="App">
      <button onClick={() => setShow((show) => !show)}>Show/Hide</button>
      {show ? <h2>Welcome to React Challenges</h2> : null}
    </div>
    </>
  )
}

export default App
