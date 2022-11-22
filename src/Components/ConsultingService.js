import React from 'react'
import {Link} from 'react-router-dom'
import consulting from '../images/consulting.jpg'
import DummyText from './DummyText'


function Serv3() {
  return (
    <div>
        <div class="card">
          <img src={consulting} class="card-img-top ratio ratio-4x3" alt="..."/>
          <div class="card-body bg-warning rounded">
            <h5 class="card-title">IT Counsulting</h5>
            <DummyText/>
            <Link href="#" class="btn btn-success">Read More</Link>
          </div>
        </div>       
    </div>
  )
}

export default Serv3
