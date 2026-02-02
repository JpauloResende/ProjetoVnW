import { useState } from 'react'
import NavBar from './componets/navbar/NavBar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar />
    </>
  )
}

export default App
