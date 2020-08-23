import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import "../components-styles/_mainpage.scss";

import Courses from '../Pages/Courses';
import Imagination from '../Pages/Imagination'
import Login from '../Pages/Login'
import Homepage from '../Pages/Homepage';
import ErrorPage from '../Pages/ErrorPage';

const Content = () => {

   return ( 
      <div className="content">
         <Route render ={({location})=>(
            // <TransitionGroup>
            //  <CSSTransition
            //    key={location.key}
            //    timeout={400}
            //    classNames="fade"
            //    >
            <Switch>
               <Route path='/' exact component={Homepage} />
               <Route path='/courses' component={Courses}/>
               <Route path='/your-imagination' component={Imagination}/>
               <Route path='/login' component={Login}/>
               <Route component={ErrorPage}/>
            </Switch>
         //    {/* </CSSTransition>
         //  </TransitionGroup> */}
         )}/>
         
      </div>
    );
}
 
export default Content;
