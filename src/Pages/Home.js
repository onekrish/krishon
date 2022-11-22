import React from 'react'
import MainHeading from '../Components/MainHeading'
import {Link} from 'react-router-dom'
import './Home.css'
import Slide from '../Components/Slide'

function Home(props) {
  return (
    <>
      <div>
      <Slide/>
      </div>
      <div className="banner-btn md-12 mb-5">
        <div className="col-md-12 text-center">
          <MainHeading/>
          <p className="fst-italic pb-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's <br/>standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
			    <Link to="/Services"><span></span>Services</Link>
			    <Link to="/About"><span></span>About Us</Link>
		</div>
    </>
  )
}

export default Home
