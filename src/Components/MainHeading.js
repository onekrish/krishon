import React from 'react'
import '../Pages/Home.css'
import Typewriter from "typewriter-effect";

function MainHeading() {
  return (
      <div className="mainHead">
            <Typewriter
               onInit={(typewriter) => {
                  typewriter.typeString('Welcome To KrishOnTech')
                     .callFunction(() => {
                     })
                     .pauseFor(1000)
                     .deleteAll()
                     .typeString('KrishOnTech')
                     .start();
                     
              }}
             />
          </div>
  )
}

export default MainHeading
