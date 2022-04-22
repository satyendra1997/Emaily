import React from "react";

export default({input,label,meta:{error,touched}})=>{
   
  return(
      <div style={{fontSize:"15px",color:"darkslategray",fontWeight:"bold",fontFamily:"Roboto"}}>
          <labe>{label}</labe>
          <input
              {...input}
              style={{marginBottom:"3px"}}
          />
          <div className="red-text" style={{marginBottom:"22px"}}>{touched && error}</div>
      </div>
  )
};