import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import Signup from "./pages/Signup"
import Membership from "./pages/Membership"
import Dashboard from "./pages/Dashboard"
import Verification from "./pages/Verification"
import Welcome from "./pages/Welcome"
import SingleBarrel from "./pages/SingleBarrel"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/welcome" element={<Welcome />} />
         <Route path="/single-barrel" element={<SingleBarrel />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App