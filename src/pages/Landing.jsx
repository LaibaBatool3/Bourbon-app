import "./Landing.css"
import bg from "../assets/background-img.jpg"
import logo from "../assets/bourbon-logo.png"
import { useNavigate } from "react-router-dom"

function Landing() {
  const navigate = useNavigate()

  return (
    <div className="landing" onClick={() => navigate("/signup")}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${bg})` }}
      />

      <div className="overlay">
        <img src={logo} alt="Bourbon Logo" className="logo" />
      </div>
    </div>
  )
}

export default Landing
