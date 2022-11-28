import React from 'react'
import propTypes from 'prop-types' ; 

const Componenets = ({name,bio,pro , children, handleName}) => {
  return (
    <div>
      <h1 style={{color : "green"}}>
        my name is {name}
      </h1>
      <h1 style={{color : "blue"}}>
        my biography is {bio}
      </h1>
      <h1 style={{color : "purple"}}>
         my proffessionnal is {pro} 
      </h1>
      {children}
      <br /> <br />
      <button style={{marginLeft:'50px' , width:'150px' , height:'90px', backgroundColor:'gold' , borderRadius:'50px'}} onClick={()=>handleName(name)}> 
      <h1 style={{color:'purple' , textalign:'15px'}}>
      CLICK
        </h1>   </button>
      
    </div>
    
  )
}

Componenets.defaultProps = {
 name : 'guest' ,
  bio : ' cool',
  proffession : 'students'
 
}
Componenets.propTypes = {
  name : propTypes.string, 
  bio : propTypes.string ,
  proffession : propTypes.string
  
}
export default Componenets;
