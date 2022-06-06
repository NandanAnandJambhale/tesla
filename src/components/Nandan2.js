import React from 'react'
import styledComponents from 'styled-components'
function Nandan2({backgroundImg,title,desciption})
 {
  return (
    
    <Wrap 
          bgImage={backgroundImg}>
         <TeslaTitle>
             <h1>
             {title}    
             </h1>
             <p>
                 {desciption}
                 </p>
                 </TeslaTitle>
                 </Wrap>
  )
}
export default  Nandan2
const Wrap=styledComponents.div`
width:25%;
height:50vh;
float:right;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
display:flex;
flex-direction:column;
justify-content:space-between;
align-item:center;
background-image: ${props=>`url("/images/${props.bgImage}")`}
`
const TeslaTitle=styledComponents.div`
padding-top:3vh;
text-align:center;
`