import "./Dashboard.css"
import bg from "../assets/background-img.jpg"
import logo from "../assets/bourbon-logo.png"
import { useNavigate } from "react-router-dom"

function Dashboard() {
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    navigate("/verification")
  }

  const handleGoogleLogin = () => {
    
  }

  const handleAppleLogin = () => {
    
  }

  const handleRegister = () => {
    navigate("/membership")
  }

  return (
    <div className="dashboard-page">
      <div 
        className="background-image"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className="overlay">
        <div className="content-container">
          <img src={logo} alt="Bourbon Logo" className="logo-top" />
          
          <h1 className="heading">Returning Member</h1>
          
          <p className="description">
            Ready for your next pour? Login to continue your tasting experience and see whats new!
          </p>
          
          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="phone">Phone number</label>
              <input 
                type="tel" 
                id="phone" 
                placeholder="+1 23 456 7890"
                className="form-input"
              />
            </div>
            
            <button type="submit" className="login-button">
              Log in
            </button>
          </form>

          <div className="divider">
            <span className="divider-text">or continue with</span>
          </div>

          <div className="social-login">
            <button className="social-button google-button" onClick={handleGoogleLogin}>
              <svg className="google-icon" viewBox="0 0 24 24" width="20" height="20">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Google</span>
            </button>
            <button className="social-button apple-button" onClick={handleAppleLogin}>
              <svg className="apple-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <span>Apple</span>
            </button>
          </div>

          <div className="register-link">
            <span>Don't have an account yet? </span>
            <button className="register-button" onClick={handleRegister}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
