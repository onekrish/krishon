import React from 'react'
import {Link} from 'react-router-dom'
import network from '../images/network.jpg'
import DummyText from './DummyText'


function Serv2() {
  return (
    <div>
        <div class="card">
          <img src={network} class="card-img-top" alt="..."/>
          <div class="card-body bg-warning rounded">
            <h5 class="card-title">Network Security</h5>
            <DummyText/>
            <Link href="#" class="btn btn-success">Read More</Link>
          </div>
        </div>      
    </div>
  )
}

export default Serv2
