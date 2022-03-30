import React, { useState, useEffect } from "react";

function Error(props) {

const [errorData, setErrorData] = useState();
const [visibility, setvisibility] = useState(false);

useEffect(() => {errorWrite();setTimeout(() => { return( setvisibility(true),setErrorData(" "))
}, 5000);},[props.error.payload]);

const errorWrite = () => {
    if (props.error.type === "DATE_NOT") {
        setErrorData(`Sorry,${props.error.payload}' validity has Expired!`)
    } else if (props.error.type === "STUDENT_NOT") {
        setErrorData(`Sorry,${props.error.payload} is not a verified student!`)}
    return errorData;};


  return (
    <div style={{display:visibility?"block":"none"}} data-testid="errorMsg" className="alert error mt-20 slide-up-fade-in">
   
      {errorData}
    </div>
  );
}

export default Error;
