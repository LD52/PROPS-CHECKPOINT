import React from 'react'
function HandleName (props){
   alert(props.fullName)
   return (
    <div style={{display:"flex"}}>
      <div style={{paddingRight:'1rem'}}>
        <p>Hi My name is {props.fullName}</p>
        <p>{props.bio}</p>
        <p>I'm now ready for the post of {props.profession}</p>
      </div>
      <div>{props.children}</div>

    </div>

   );
  }
  

export default HandleName