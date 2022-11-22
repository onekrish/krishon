import React from 'react'
import {Link} from 'react-router-dom'
import cloud from '../images/cloud.jpg'
import '../Pages/Home.css'
import DummyText from './DummyText'

function Serv4() {
  return (
    <>
      <div className='container-fluid'>
        <div class="card mb-3">
          <img src={cloud} class="card-img-top" alt="..."/>
          <div class="card-body row bg-warning rounded">
            <div className='col-9'>
            <h5 class="card-title fs-2">Cloud Services</h5>
            <DummyText/>
            </div>
            <div className='col-3'>
              <br></br>
            <Link to="/" class="btn btn-success">Read More..</Link>
            </div>
          </div>
        </div>
      </div>  
    </>
  )
}

export default Serv4
