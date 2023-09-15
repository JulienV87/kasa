import LogoWhite from "../assets/logo-white.png"

export default function Footer() {
  return (
    <div className="footer">
        
       <p className="footer-text">© 2020 Kasa. All rights reserved</p> 
       <div>
            <img src={LogoWhite} alt="logo" className="logo"/>
        </div>
  
    </div>
  )
}
