import React from 'react'
import Nandan1 from './Nandan1'
import Nandan2 from './Nandan2'
import Nandan3 from './Nandan3'
import Nandan4 from './Nandan4'
 
import styledComponents from 'styled-components'

function Home() {
  return (
      <HiIamContainer>
        
   
      <Nandan1
    
    title="MODEL 3 "
    description="test"
    backgroundImg="model-3.jpg"


    />
    

    
    <Nandan2
     title="MODEL Y"
     description="test"
     backgroundImg="model-y.jpg"
    />
    
    <HiIamContainer>
     
      <Nandan3
      title="MODEL S"
      description="test"
      backgroundImg="model-s.jpg"
      />
    
      
     <Nandan4
      title="MODEL X"
      description="test"
      backgroundImg="model-x.jpg"
      />
      
    </HiIamContainer>
      </HiIamContainer>  
  )
}
export default Home
const HiIamContainer=styledComponents.div``