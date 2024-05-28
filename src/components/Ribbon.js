import zebpayLogo from "../images/zebpay-app-logo.svg"
import quickTrade from "../images/quick-trade.png"
import cryptoPacks from "../images/cryptopacks.png"
import futures from "../images/futures.png"
import exchange from "../images/exchange.png"
import overview from "../images/overview.png"
import lend from "../images/lend.png"
import markets from "../images/markets.png"
import orders from "../images/orders.png"
import "./portfolio.css"
import wallet from "../images/wallet.png"

export default function Ribbon(){
    return(
        <div className = "ribbon">
            <div className="logo-container"><img src = {zebpayLogo} alt = "ZebPay Logo"></img></div>   
            <div className="ribbon-sub-section">
                <div className = "ribbon-sub-title">Trade & Invest</div>
                <a href="#" className = "ribbon-directing-button">
                    <img src = {quickTrade} alt = "Quick-Trade Icon"></img>
                    <p>QuickTrade</p>
                </a>
                <a href="#" className = "ribbon-directing-button">
                    <img src = {exchange} alt = "Exchange Icon"></img>
                    <p>Exchange</p>
                </a>
                <a href="#" className = "ribbon-directing-button">
                    <img src = {futures} alt = "Futures Icon"></img>
                    <p>Futures</p>
                </a>
                <a href="#" className = "ribbon-directing-button">
                    <img src = {cryptoPacks} alt = "CryptoPacks Icon"></img>
                    <p>CryptoPacks</p>
                </a>
            </div>
            <div className="ribbon-sub-section">
                <div className = "ribbon-sub-title">Portfolio</div>
                <a href="#" className = "ribbon-directing-button">
                    <img src = {overview} alt = "Overview Icon"></img>
                    <p>Overview</p>
                </a>
                <a href="#" className = "ribbon-directing-button">
                    <img src = {lend} alt = "Lend Icon"></img>
                    <p>Lend</p>
                </a>
            </div>
            <div className="ribbon-sub-section">
                <div className = "ribbon-sub-title">Others</div>
                <a href="#" className = "ribbon-directing-button">
                    <img src = {markets} alt = "Markets Icon"></img>
                    <p>Markets</p>
                </a>
                <a href="#" className = "ribbon-directing-button">
                    <img src = {orders} alt = "Orders Icon"></img>
                    <p>Orders</p>
                </a>
                <a href="#" className = "ribbon-directing-button">
                    <img src = {wallet} alt = "wallet Icon"></img>
                    <p>Wallet</p>
                </a>
            </div>
        </div>
    )
}