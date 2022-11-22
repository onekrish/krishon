import React from 'react'
import '../Pages/Home.css'
import Typewriter from "typewriter-effect";

function Aboutus() {
  return (
      <div className="mainHead">
            <Typewriter
                onInit={(typewriter)=> {
         
             typewriter
             
                .typeString("KrishOn Tech")
                .pauseFor(1000)
                .deleteAll()
                .typeString("About Us ")
                 .start();
      
            
              }}
             />
          </div>
  )
}

export default Aboutus
