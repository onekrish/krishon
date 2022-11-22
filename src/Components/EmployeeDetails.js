import React from 'react'
import { Link } from 'react-router-dom'
import MyPic from '../images/MyPic.jpg'
import DummyText from './DummyText'
import Fb from '../svgs/Fb.svg'
import Insta from '../svgs/Insta.svg'
import Twitter from '../svgs/Twitter.svg'

function EmployeeDetails() {
  return (
    <>
    <div class="card text-center m-5">
        <img src={MyPic} class="card-img-top rounded-circle" alt="..."/>    
        <div class="card-body">
            <h5 class="card-title">Manager</h5>
            <DummyText/>
            <Link to='/' href="#" class="btn">
              <img className="icon me-3" alt="Icon-facebook" src={Fb}/>
              <img className="icon me-3" alt="Icon-instagram" src={Insta}/>
              <img className="icon me-2" alt="Icon-Twitter" src={Twitter}/>
            </Link>
        </div>
    </div>
      
    </>
  )
}

export default EmployeeDetails
