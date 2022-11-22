import React from 'react'
import CloudService from '../Components/CloudService'
import NetworkService from '../Components/NetworkService'
import TrainingService from '../Components/TrainingService'
import ConsultingService from '../Components/ConsultingService'
import ServicesHeading from '../Components/ServicesHeading'


function Services() {
  return (
 
      <div className='container-fluid position-relative top-50 mb-5 bg-dark'>
      <div>
        <br></br>
        <br></br>
        <br></br>
        <ServicesHeading/>
        <div class="row">
            <CloudService/>
          </div>  
          <div class="row mt-5">
            <div class="col">
              <NetworkService/>
            </div>
            <div class="col">
              <TrainingService/>
            </div>
            <div class="col mb-5">
              <ConsultingService/>
            </div>
          </div>
          
      </div>  
      
      </div>

   
  )
}

export default Services;
