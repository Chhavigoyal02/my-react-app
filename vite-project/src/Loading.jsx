import React from "react";
import { PiSpinnerBold } from "react-icons/pi";
function Loading(){
  return(
    <div className=" text-6xl text-primary-dark flex justify-center items-center"><PiSpinnerBold className="animate-spin"/></div>
  );
}

export default React.memo(Loading);