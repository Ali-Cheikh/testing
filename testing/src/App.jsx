import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="author" content="Ali Cheikh" />
  <meta name="keywords" content="game zone iset, GameZone iset, GameZone" />
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
  />
  <link rel="stylesheet" href="card.css" />
  <link
    rel="stylesheet"
    href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"
  />
  <title>GameZone 🕹️</title>
  <link rel="shortcut icon" href="gamezone.png" type="image/x-icon" />
  <meta name="title" content="GameZone" />
  <meta
    name="description"
    content="Join us in the Gaming journey of ISET Sfax "
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://fedi-peach.vercel.app/" />
  <meta property="og:title" content="GameZone" />
  <meta
    property="og:description"
    content="Join us in the Gaming journey of ISET Sfax "
  />
  <meta property="og:image" content="gamezone.png" />
  <meta property="twitter:card" content="gamezone.png" />
  <meta property="twitter:url" content="https://fedi-peach.vercel.app/" />
  <meta property="twitter:title" content="GameZone" />
  <meta
    property="twitter:description"
    content="Join us in the Gaming journey of ISET Sfax "
  />
  <meta property="twitter:image" content="gamezone.png" />
  <center>
    <div id="hide">
      <div className="containerLogin" id="containerLogin">
        <div className="form-container sign-up">
          <form id="signupForm">
            <img
              src="logo.png"
              style={{ backgroundColor: "black" }}
              width="111%"
            />
            <h1>Register</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <i className="fa-brands fa-google-plus-g" />
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-github" />
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </div>
            <span>or use your email for registration</span>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              required=""
            />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              required=""
            />
            <a> please wait at least 10sec after clicking the button</a>
            <button type="button" id="signupButton" className="btn btn-primary">
              submit
            </button>
            <hr />
          </form>
        </div>
        <div className="form-container sign-in">
          <form id="loginForm">
            <img
              src="logo.png"
              style={{ backgroundColor: "black" }}
              width="111%"
            />
            <div className="social-icons">
              <a href="#" className="icon">
                <i className="fa-brands fa-google-plus-g" />
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-github" />
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </div>
            <span>or use your email password</span>
            <input
              type="email"
              className="form-control"
              id="loginEmail"
              placeholder="Enter email"
              required=""
            />
            <input
              type="password"
              className="form-control"
              id="loginPassword"
              placeholder="Password"
              required=""
            />
            <a href="#">Forget Your Password?</a>
            <a> please wait at least 10sec after clicking the button</a>
            <button type="button" id="loginButton" className="btn btn-primary">
              submit
            </button>
          </form>
        </div>
        <div className="toggle-containerLogin">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button className="hidden" id="loginn">
                Login
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Welcome Back!</h1>
              <p>
                Register with your personal details to use all of site features
              </p>
              <button className="hidden" id="registerr">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </center>
  <div className="container" id="dashboard" style={{ display: "none" }}>
    <br />
    <br />
    <br />
    <br />
    <h2>
      Welcome to <b style={{ color: "red" }}>GameZone</b> WEB-SITE
    </h2>
    <br />
    <br />
    <br />
    <p>
      <img src="logo.png" alt="" />
    </p>
    <div
      className="elfsight-app-4d3bd7a9-856a-44c8-a42e-feea28a987f4"
      data-elfsight-app-lazy=""
    />
    <div className="footer buttom">
      <div className="row" id="people-list" />
    </div>
  </div>
</>

  )
}

export default App
