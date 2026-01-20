import "./Membership.css"
import bg from "../assets/background-img.jpg"
import logo from "../assets/bourbon-logo.png"
import { useNavigate } from "react-router-dom"

function Membership() {
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="membership-page">
      <div 
        className="background-image"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className="overlay">
        <div className="content-container">
          <img src={logo} alt="Bourbon Logo" className="logo-top" />
          
          <h1 className="heading">Become a Member</h1>
          
          <p className="description">
            You've secured your access! To finalize your Inner Circle<br />
            membership and unlock all exclusive benefits, please<br />
            complete your account profile below.
          </p>
          
          <form className="membership-form" onSubmit={handleSubmit}>
            <div className="progress-indicator">2/2</div>
            
            <div className="form-group">
              <label htmlFor="firstName">First name</label>
              <input 
                type="text" 
                id="firstName" 
                defaultValue="Walter"
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="lastName">Last name</label>
              <input 
                type="text" 
                id="lastName" 
                defaultValue="White"
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="birthday">Your birthday</label>
              <input 
                type="text" 
                id="birthday" 
                defaultValue="4/10/2004"
                className="form-input"
              />
            </div>
            
            <button type="submit" className="join-button">
              Join the club
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Membership
