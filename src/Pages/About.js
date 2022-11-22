import React from 'react'
import building from '../images/building.jpg'
import Aboutus from '../Components/AboutusHeading'
import CompanyDescription from '../Components/CompanyDescription'
import EmployeeDetails from '../Components/EmployeeDetails'

function About() {
  return (
    <div className='container-fluid bg-info'>
      <div>
        <br></br>
        <br></br>
        <br></br>
        <div className='row'>
          <div className='col-lg-6'>
            <img to='' src={building} alt='campus' className='rounded m-5 w-75'></img>
          </div>
          <div className='col-lg-6 text-center'>
          <Aboutus/>
          <hr></hr>
          <CompanyDescription/>
          </div>
        </div>
        <div className='fs-1 text-danger text-center'><u>Our Team</u></div>
        <div className='row bg-warning'>
        <div className='col-lg-4'>
          <EmployeeDetails className='text-danger'/>
        </div>
        <div className='col-lg-4'>
          <EmployeeDetails/>
        </div>
        <div className='col-lg-4'>
          <EmployeeDetails/>
        </div>

        </div>
      </div>
      
    </div>
  )
}

export default About;
