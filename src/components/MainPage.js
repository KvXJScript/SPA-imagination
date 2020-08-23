import React, {lazy, Suspense} from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import "../components-styles/_base.scss"

const Content = lazy(()=>import('./Content'));

const MainPage = () => {
   return (
      <div className="page">
         <div className="container">
            <Navigation/>
               <Suspense fallback = {<div>Loading...</div>}>
                  <Content/>
               </Suspense>
            <Footer/>
         </div>
      </div> 
    );
}
 
export default MainPage;