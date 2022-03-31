import React, { useState, useEffect } from "react";

function Error(props) {

const [errorData, setErrorData] = useState();
useEffect(() => {errorWrite()},[props.error]);

const errorWrite = () => {

    if (props.error.type === "DATE_NOT") { return(
        setErrorData(`Sorry,${props.error.payload}' validity has Expired!`),
        setTimeout(() => {setErrorData("")}, 5000));
    } else if (props.error.type === "STUDENT_NOT") {return (
        setErrorData(`Sorry,${props.error.payload} is not a verified student!`),
        setTimeout(() => {setErrorData("")}, 5000))}
    return errorData;};

  return (
    <div data-testid="errorMsg" className="alert error mt-20 slide-up-fade-in">
      {errorData}
    </div>
  );
}

export default Error;
