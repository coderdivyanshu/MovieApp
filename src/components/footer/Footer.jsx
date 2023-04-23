import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                Welcome To DIVYANSHU'S movie App......     
                   Tension lene ka nahi, sirf dene ka!Hasso, jiyo, muskurao. Kya pata, kal ho naa hoHaar kar jeetne waale ko hi baazigar kehte hai.
                   Babu Moshai...zindagi badi honi chahiye, lambi nahi,Kal toh chala gaya, us pe koi control nahi. Aur aane waala kal toh tab hi sambhlega jab aaj kuch theek kar do
                    Sometimes the wrong train takes you to the right destination.Khul kar ro nahi sakogi, toh khul kar hass kaise paogi? Picture abhi baaki hai mere dost
                   </div>
                <div className="socialIcons">
                                      <a href="https://facebook.com/divy212" target="_blank" rel="noopener noreferrer">
  <span className="icon">
    <FaFacebookF />
  </span>
  </a>
                 <a href="https://www.instagram.com/rajpoot_divyanshu212" target="_blank" rel="noopener noreferrer">
  <span className="icon">
    <FaInstagram />
  </span>
</a>

                   <a href="https://twitter.com/masterpiecedivy" target="_blank" rel="noopener noreferrer">
  <span className="icon">
    <FaTwitter />
  </span>
</a>

                                   <a href="https://www.linkedin.com/in/divyanshu-singh-954b73208/" target="_blank" rel="noopener noreferrer">
  <span className="icon">
    <FaLinkedin />
  </span>
</a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;