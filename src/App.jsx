import { useState } from 'react'
import Button from './components/button'
import Circle from './components/circle'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
    }}>

      <div className='card'>
        <Circle />
        <div>
          <Button value="Pause" />
          <Button value="Reset" />
        </div>
      </div>

    </div>
  )
}

export default App
