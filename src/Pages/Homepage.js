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
import { ReactComponent as Right} from '../img/svg/right.svg';
import Customer1 from '../img/people/woman-2.png'
import Customer2 from '../img/people/man.png'
import Customer3 from '../img/people/woman-1.png'
import FormPerson from '../img/photos/photos-opinions/form-photo.png'

const Homepage = () => {

   const [flag, setFlag] = useState(true)
   const [state, setState] = useState({
      firstName: "",
      email: "",
      information: "",
      course: ""
   })

   function handleForm (e){
      const value = e.target.value;
      setState({
         ...state,
         [e.target.value]: value
      })
   }

   const handleSubmit = (e)=>{
      e.preventDefault();
   }


   const likeHandler = ()=>{
      if(flag){
         return(
            <Like onClick = {()=> setFlag(false)}/>
         )
      }
      else{
         return(
             <LikeFull onClick = {()=> setFlag(true)}/>
         )
      }
   }

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
                        <h4>Awesome things around all of us</h4>
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
                        {likeHandler()}
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
            <h1>Many Happy Customers</h1>
               <div className="homepage__bottom__customers__primary">
                  <div className="homepage__bottom__customers__primary__top">
                     <article>
                        “My imagination went at another level. I trully didn’t know that
                        my mind is possible to do such things! Every single coin was
                        very worth it. I hope you - people reading this will make awesome
                        decision in their life and they will take their imagination
                        at another level which will help you with everyday problems”
                     </article>
                     <p><img src={Customer1} alt="customer-1"/></p>
                  </div>
                  <div className="homepage__bottom__customers__primary__bottom">
                     <div>
                        <h3>MARENNE FREEMAN</h3>
                        <span>Young investor</span>
                     </div>
                     <p>
                        <button>Awesome</button>
                        <button>Modern</button>
                        <button>Well organized</button>
                     </p>
                  </div>
               </div>
               <div className="homepage__bottom__customers__secondary">
                  <div className="homepage__bottom__customers__secondary__top">
                  <img src={Customer2} alt="customer-2"/>
                     <article>
                        “My everyday life changed A LOT. Me and a friend of mine - Paul
                        Made a really fast decision on starting our own company.
                        Thanks to your courses our minds were blowning away every
                        problem we met. Thank you very much once again and I hope
                        we will meet one more time. Also thanks to your awesome
                        prices I didn’t need to spent all my savings to be open-minded”
                     </article>
                     
                  </div>
                  <div className="homepage__bottom__customers__secondary__bottom">
                     <div>
                        <h3>JACK DOUGHLASS</h3>
                        <span>Web manager</span>
                     </div>
                     <p>
                        <button>Cheap</button>
                        <button>Deep</button>
                        <button>Fancy</button>
                     </p>
                  </div>
               </div>
               <div className="homepage__bottom__customers__tertiary">
                  <div className="homepage__bottom__customers__tertiary__top">
                     <article>
                        “I had very big problem with my mind... Sadly I had deep
                        depression but thankfully I’ve found your website and 
                        I joined to the best course in my life. It changed
                        EVERYTHING. Thank you Stevard - thanks to you I can
                        see this awesome world in new and better shapes
                        Also i found this course kinda hard but it was “do able””
                     </article>
                     <img src={Customer3} alt="customer-3"/>
                  </div>
                  <div className="homepage__bottom__customers__tertiary__bottom">
                     <div>
                        <h3>JASMINE COATCH</h3>
                        <span>Awesome wife</span>
                     </div>
                     <p>
                        <button>Imposting</button>
                        <button>Staggering</button>
                        <button>"Hardish"</button>
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div className="homepage__verybottom">
            <div className="homepage__verybottom__contact">
               <h1>Talk to us and get <span>your brain moving!</span></h1>
               <div className="homepage__verybottom__contact__form">
                  <div className="homepage__verybottom__contact__form--left">
                     <p>This is exacly what will happen after you submit your form:</p>
                     <img src={FormPerson} alt="person"/>
                     <ul>
                        <li><Right/> You will find your own path!</li>
                        <li><Right/> We will respons as fast as it's possible!</li>
                        <li><Right/> You will take a giant part in out project!</li>
                     </ul>
                  </div>
                  <div className="homepage__verybottom__contact__form--right">
                     <form onSubmit = {handleSubmit}>
                        <textarea name="" id="" cols="20" rows="10" placeholder="Tell us about yourself" value = {state.information} onChange = {handleForm}></textarea>
                        <select name="" id=""  value = {state.courses} onChange = {handleForm}>
                           <option value="Test your mind with our mentors">Test your mind with our mentors</option>
                           <option value="Awesome things around all of us">Awesome things around all of us</option>
                           <option value="Challenge your brain">Challenge your brain</option>
                        </select>
                        <input type="text" placeholder="Your name" value = {state.firstName} onChange = {handleForm}/>
                        <input type="email" placeholder="Your email" value = {state.email} onChange = {handleForm}/>
                        <button type="submit">Let your adventure begins!</button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
}
 
export default Homepage;