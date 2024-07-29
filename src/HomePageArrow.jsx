import React from 'react';
import {Link} from 'react-router-dom';
import { HiArrowLeft } from "react-icons/hi";

function HomePageArrow(){
  return (
    <Link to="/"><HiArrowLeft className="text-3xl ml-4 mb-5 sm:ml-24"/></Link>
  );
};

export default React.memo(HomePageArrow);