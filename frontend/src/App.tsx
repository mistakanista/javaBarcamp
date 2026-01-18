import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConfirmPage from "./ConfirmPage";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/confirm" element={<ConfirmPage />} />
          </Routes>
        </BrowserRouter>
      
    </>
  )
}

export default App
