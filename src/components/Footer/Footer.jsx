import Logo from "../Logo/Logo";
import Social from "../Social/Social";
import "./Footer.scss";
import { FaAt, FaPhoneFlip, FaGhost, FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
     <div className="content">
         <div className="content__logo">
          <Logo />
        </div>

        <div className="content__center">
          <Social />        
          <p>© 2024 - All rights reserved</p>
          
        </div>

        <div className="content__location">
          <ul>
            <li>
              <span><FaGhost /></span>Franck Chapelon
            </li>
            <li>
              <span>
               <FaLocationDot />
              </span>
              24300 Savignac-de-Nontron (24)
            </li>
            <li>
              <span>
                <FaAt />
              </span>
              <a href="mailto:franckick2@gmail.com">franckick2@gmail.com</a>
            </li>
            <li>
              <span>
                <FaPhoneFlip />
              </span>
              tel: 06 35 22 32 57
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
