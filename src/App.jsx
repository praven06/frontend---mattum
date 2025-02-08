import {  Home } from "./components/Home"
import { BrowserRouter,  Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import ChatScreen from "./components/ChatScreen"
function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Login/>} />
        <Route path="/chat" element={<ChatScreen/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
