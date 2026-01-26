import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import Signup from "./pages/Signup"
import Membership from "./pages/Membership"
import Dashboard from "./pages/Dashboard"
import Verification from "./pages/Verification"
import Welcome from "./pages/Welcome"
import SingleBarrel from "./pages/SingleBarrel"
import BourbonProfile from "./pages/BourbonProfile"
import BourbonDescription from "./pages/BourbonDescription"
import BlantonsDescription from "./pages/BlantonsDescription"


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
        <Route path="/bourbon-profile" element={<BourbonProfile />} />
        <Route path="/bourbon-description" element={<BourbonDescription />} />
        <Route path="/blantons-description" element={<BlantonsDescription />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App