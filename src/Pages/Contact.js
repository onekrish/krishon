import React from 'react'
import RegForm from '../Components/RegForm';
import Point from '../svgs/Point.svg'


function Contact() {
  
  return (
      <div className='bg-warning'>
      <br></br>
      <br></br>
      <br></br>
        <div className="container-fluid ">
          <h1 className='fw-bold ms-3 '><u>Contact Us</u></h1>
          <div className='row '>
            <div className='col-lg-6 border-end fw-bold'>
            <br/><br/>
            <p className="card-text text-dark ms-5">
              <img className="icon m-1" src={Point} alt="Icon-geo"/> Address: <br/><br/>
                1-23/4/5 | India |<br/><br/>Earth | Universal |<br/><br/>500001<br/><br/>
                </p>
              <p className='text-primary ms-5 mb-5'>Email: contactus@krishontech.com
              </p>
            </div>
            <div className='col-lg-6'>
            <h3 className='text-center'><u>Submit Your Query</u></h3>
            <RegForm/>
          <br/><br/>
            </div>
            
        </div>
        <div className='border rounded'>
        <iframe class="gmap_iframe" width="100%" height="300px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=660&amp;height=289&amp;hl=en&amp;q=hyderabad&amp;t=k&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
   
        </div>
        </div>
      </div>
   
  )
}

export default Contact;
