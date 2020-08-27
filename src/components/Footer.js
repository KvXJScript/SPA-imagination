import React from 'react'
import '../components-styles/_mainpage.scss';
import Logo from '../img/photos/photos-logo/Logo.png';
import { ReactComponent as ArrowUp } from '../img/svg/arrow-up.svg';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Facebook} from '../img/svg/facebook.svg';
import { ReactComponent as Instagram} from '../img/svg/instagram.svg';
import { ReactComponent as Twitter} from '../img/svg/twitter.svg';

const Footer = () => {
   return ( 
      <div className="footer">
         <div className="footer__top">
            <img src={Logo} alt="logo"/>
            <button>Return to the top <ArrowUp/></button>
            
         </div>
         <hr/>
         <div className="footer__bottom">
            <div className="footer__bottom__company">
               <h4>Company:</h4>
               <ul>
                  <li><NavLink to="/courses">Our courses</NavLink>
                  </li>
                  <li><NavLink to="/imagination">Your imagination</NavLink>
                  </li>
                  <li><NavLink to="/login">Login to see more</NavLink>
                  </li>
               </ul>
            </div>
            <div className="footer__bottom__connect">
               <h4>Connect:</h4>
               <ul>
                  <li><a href="https://www.facebook.com/"><Facebook/> Facebook</a>
                  </li>
                  <li><a href="https://www.instagram.com/"><Instagram/> Instagram</a>
                  </li>
                  <li><a href="https://twitter.com/"><Twitter/> Twitter</a>
                  </li>
               </ul>
            </div>
            <div className="footer__bottom__login">
               <button><NavLink to="/login">Login to see more</NavLink>
               </button>
            </div>
         </div>
      </div>
    );
}
 
export default Footer;