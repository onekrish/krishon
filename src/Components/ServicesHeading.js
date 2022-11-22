import React from 'react'
import '../Pages/Home.css'
import Typewriter from "typewriter-effect";

function ServicesHeading() {
  return (
      <div className="mainHead">
            <Typewriter
                onInit={(typewriter)=> {
         
             typewriter.typeString("KrishOn Tech")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Services")
                 .start();
      
            
              }}
             />
          </div>
  )
}

export default ServicesHeading
