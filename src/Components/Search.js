import React, { useState } from "react";
import { STUDENTS } from "../studentList";

// DO NOT CHANGE THIS FUNCTION, IT RETURNS TRUE OR FALSE ACCORDING TO GIVEN DATES
// joiningDate COMES FROM input-date, validityDate COMES FROM studentList,
function checkValidity(joiningDate, validityDate) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const [year, month, day] = joiningDate.split("-");
  const [yyyy, mm, dd] = validityDate.split("-");
  const maxValid = new Date(yyyy, mm - 1, dd);
  const selected = new Date(year, month - 1, day);
  return maxValid >= selected && maxValid >= today;
}

function Search(props) {
 
  const [inputData, setInputData]=useState({studentName:"",joiningDate:""});
  const onChangeInput = (e) => {e.preventDefault();setInputData({...inputData,[e.target.id]: e.target.value })};

  const onClickButton = (e) => {e.preventDefault();
        const filtered = STUDENTS.filter((item)=>item.name.toLowerCase()===inputData.studentName.toLowerCase());
        if (filtered.length>0) {
              const boolenData = checkValidity(inputData.joiningDate,filtered[0].validityDate);
              if (boolenData) {
                  props.listFunction(inputData.studentName)
              }else {props.errorFunction({type:"DATE_NOT",payload:inputData.studentName})}
        }else {props.errorFunction({type:"STUDENT_NOT",payload:inputData.studentName})}  
        setInputData({studentName:"",joiningDate:""})
  };


  return (
    <div className="my-50 layout-row align-items-end justify-content-end">
      <label htmlFor="studentName">Student Name:<div>
      <input id="studentName" onChange={onChangeInput} value={inputData.studentName} data-testid="studentName" type="text" className="mr-30 mt-10" autoComplete="off"/></div></label>

      <label htmlFor="joiningDate">Joining Date:<div>
      <input id="joiningDate" onChange={onChangeInput} value={inputData.joiningDate} data-testid="joiningDate" type="date" className="mr-30 mt-10"/></div></label>

      <button type="button" onClick={onClickButton} data-testid="addBtn" className="small mb-0"> Add</button>
    </div>
  );
}

export default Search;
