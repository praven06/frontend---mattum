import {  Home } from "./components/Home"
import { BrowserRouter,  Route, Routes } from "react-router-dom"
import Login from "./components/Login"
function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
