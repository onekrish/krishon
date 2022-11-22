import React from 'react'
import {Link} from 'react-router-dom'
import training from '../images/training.jpg'
import DummyText from './DummyText'

function Serv1() {
  return (
    <div>
        <div class="card">
          <img src={training} class="card-img-top ratio ratio-4x3" alt="..."/>
          <div class="card-body bg-warning rounded">
            <h5 class="card-title">Training Services</h5>
            <DummyText/>
            <Link to="/" class="btn btn-success">Read More</Link>
          </div>
        </div>     
    </div>
  )
}

export default Serv1
