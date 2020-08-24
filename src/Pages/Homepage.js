import React, {useState} from 'react';
import Nav from '../prepages/Nav';
import '../components-styles/_homepage.scss'
import {NavLink} from 'react-router-dom';
import { ReactComponent as Hamburger} from '../img/svg/hamburger-menu-black.svg'
import { ReactComponent as HamburgerWhite} from '../img/svg/hamburger-menu.svg';
import { ReactComponent as Hourglass} from '../img/svg/hourglass.svg'
import { ReactComponent as Price} from '../img/svg/price.svg'
import { ReactComponent as Person} from '../img/svg/person.svg'
import { ReactComponent as Arrow} from '../img/svg/left-arrow.svg'
import { ReactComponent as Like} from '../img/svg/like.svg'
import { ReactComponent as LikeFull} from '../img/svg/like-full.svg'

const Homepage = () => {

   const {flag, setFlag} = useState(true)

   return ( 
      <section className="homepage">
         <div className="homepage__top">
            <div className="homepage__top__introduction">
               <Nav/>
               <div className="homepage__top__introduction__info">
                  <h2>Imagination</h2>
                  <h1>Your brain is your strongest weapon. Make sure it is in good shape...</h1>
                  <button><NavLink to="/courses">CHECK OUR COURSES</NavLink>
                  </button>
               </div>
            </div>
         </div>
         <main className="homepage__middle">
            <div className="homepage__middle__phones">
               <div className="homepage__middle__phones__primary">
                  <div className="homepage__middle__phones__primary_top">
                     <div className="homepage__middle__phones__primary_top--info">
                        <p>12:43</p>
                        <p><Hamburger/></p>
                     </div>
                     <h3>Home</h3>
                  </div>
                  <div className="homepage__middle__phones__primary_foryou">
                     <cite>For you</cite>
                     <div className="homepage__middle__phones__primary_foryou--info">
                        <p><span>Monday 24th 2043</span></p>
                        <h4>Test your mind with our mentors</h4>
                        <span><Hourglass/> 8 A.M. - 6 P.M.</span>
                        <span><Price/> 50$</span>
                        <span><Person/> Andrew Richardson</span>
                     </div>
                  </div>
                  <div className="homepage__middle__phones__primary_latest">
                     <cite>Our latest course</cite>
                     <div className="homepage__middle__phones__primary_latest--info">
                        <p><span>Thursday 21st 2023</span></p>
                        <h4>Awesome thing around all of us</h4>
                        <span><Hourglass/> 9 A.M. - 11 P.M.</span>
                        <span><Price/> 70$</span>
                        <span><Person/> Steve Brown</span>
                     </div>
                  </div>
               </div>
               <div className="homepage__middle__phones__secondary">
                  <div className="homepage__middle__phones__secondary__top">
                     <div className="homepage__middle__phones__secondary__top--info">
                        <p>12:43</p>
                        <p><HamburgerWhite/></p>
                     </div>
                     <h3>Find your mystery</h3>
                  </div>
               </div>
               <div className="homepage__middle__phones__tertiary">
                  <div className="homepage__middle__phones__tertiary__top">
                     <div className="homepage__middle__phones__tertiary__top--info">
                        <Arrow/>
                        <Like onClick={()=>{(setFlag(false))}}/>
                        {/* {flag? <Like/>: <LikeFull/>} */}
                     </div>
                     <h3>Check details of our main course</h3>
                  </div>
                  <div className="homepage__middle__phones__tertiary__middle">
                     <h3>Details</h3>
                     <p>Our best people will make sure that you will have full Understanding of every topic. They will help you to understand a multiple futuristic styles and types of imagination. 
                     You will also learn why you should control your
                     brain all the time, which music should you listen to, and why our course is the best in the world. Make sure you will join to our imagination course and find out at your own skin why it is so important.</p>
                  </div>
                  <div className="homepage__middle__phones__tertiary__bottom">
                     <h2>Steven Johnsonn</h2>
                  </div>
               </div>
            </div>
         </main>
         <div className="homepage__bottom">
            <div className="homepage__bottom__customers">
               Customers
            </div>
         </div>
         <div className="homepage__verybottom">
            <div className="homepage__verybottom__contact">
               Contact
            </div>
         </div>
      </section>
    );
}
 
export default Homepage;