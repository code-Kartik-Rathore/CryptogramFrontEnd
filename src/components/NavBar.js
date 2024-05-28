import "./portfolio.css";
import walletIcon from "../images/wallet.png";
import chatbotIcon from "../images/chatbot.png";
import helpIcon from "../images/help.png";
import profileIcon from "../images/profile.png";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="portfolio-title">Portfolio</div>
        <div id="nav-empty"></div>
        <div className="wallet-balance">
          <img id="wallet-icon" src={walletIcon} alt="Wallet-icon"></img>
          <div className="wallet-balance-details">Wallet Balance: 0.00 INR</div>
        </div>
        <div className="navbar-icons">
          <a className="nav-icons" href="#" id="chatbot">
            <img className="icons" src={chatbotIcon} alt="ChatBot-icon"></img>
          </a>
          <a href="#" id="help" className="nav-icons">
            <img className="icons" src={helpIcon} alt="Help-icon"></img>
          </a>
          <a href="#" id="profile" className="nav-icons">
            <img className="icons" src={profileIcon} alt="Profile-icon"></img>
          </a>
          <Link to="/sign" type="submit" class="link-btn">
            Sign Up
          </Link>
          <Link to="/login" type="submit" class="link-btn">
            Login
          </Link>
        </div>
      </div>
    </>
  );
}
