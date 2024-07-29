import React from 'react';
import {Link} from 'react-router-dom';
function NotFound(){
  return(
    <div className="flex flex-col items-center justify-center gap-5">
    <img src="https://www.verticalrail.com/wp-content/uploads/2015/05/404-Page-Not-Found.png" className="w-3/12 h-3/12"></img>
      <div className="font-bold text-primary-default">Page Not Found</div>
      <div className="font-light text-gray-700 ">We are Sorry, the page you requested could not be found. <br/>Please go back to the homepage</div>
      <button className="bg-primary-dark text-white px-8 py-2 rounded-md"><Link to="/">Go Home</Link></button>
    </div>
  );
}

export default React.memo(NotFound);