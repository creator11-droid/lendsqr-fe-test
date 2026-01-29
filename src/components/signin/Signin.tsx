import logo from "../../assets/images/logo.svg"
import hero from "../../assets/images/signIn.svg"
import "./css/Signin.css"
import { Link } from "react-router"
const Signin = () => {
  return (
    <div className="Si_wrapper">
        <div className="ls_wrapper">
    <div className="logo">
    <img src={logo}/> 
    </div>
    <div className="hero">
    <img src={hero}/>
    </div>
        </div>
        <div className="rs_wrapper">
    <div className="ld_wrapper">
         <div className="lead_logo">
            <img src={logo} className="rs_logo"/>
        </div>
        <div className="leader">
             <h1>Welcome!</h1>
        <p>Enter details to login.</p>
        </div>
       
    </div>
    <div className="sign_in_form">
       
        <form action="">
            <label>
                <input placeholder="Email"/>
            </label>
            <label>
                <input placeholder="Password"/>
                <p>Show</p>
            </label>
            <span> FORGOT PASSWORD?</span>
            <Link to="/home" type="button" className="sign_in_btn"> LOG IN</Link>
        </form>
    </div>
        </div>
    </div>
  )
}

export default Signin
