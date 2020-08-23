import React from 'react';
import Nav from '../prepages/Nav';
import '../components-styles/_error.scss'

const ErrorPage = () => {
   return ( 
      <div className="error">
         <Nav/>
         Something didn't work :/
      </div>
    );
}
 
export default ErrorPage;