import React from 'react';
import {NavLink} from 'react-router-dom';
import '../components-styles/_nav.scss';
import Logo from '../img/photos/photos-logo/Logo.png'

const navList = [
   {name: "HOME", path: "/", exact: true},
   {name: "OUR COURSES", path: "/courses"},
   {name: "YOUR IMAGINATION", path: "/your-imagination"},
]

const navigation = navList.map(({name, exact, path})=>(
   <li key={name} className="nav__wrapper__top__item">
      <NavLink to={path} exact={exact ? exact : false} activeClassName="nav__wrapper__top__item--active">{name}</NavLink>
   </li>
))

const Nav = () => {
   return ( 
      <nav className="nav">
         <div className="nav__wrapper">
         <div className="nav__wrapper__logo">
            <img src={Logo} alt="Logo"/>
         </div>
         <ul className="nav__wrapper__top">
            {navigation}
            <button className="nav__wrapper__top--button"><NavLink to="/login">LOGIN TO SEE MORE</NavLink>
            </button>
         </ul>
         </div>
      </nav>
    );
}
 
export default Nav;