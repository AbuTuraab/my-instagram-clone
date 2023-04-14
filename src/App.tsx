import { useState } from 'react'
import Appbuilder from "@appbuilder/react"
import './App.css'
import customization from './useCustomization'

function App() {
  const [count, setCount] = useState(0)

  customization
  return (
    <div style={{ display: "flex", 
    width: "100vw", 
    height: "550px", 
    flexDirection: "column"
    }}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Appbuilder.View />
     
    </div>
  )
}

export default App
