import React from 'react'
import {Link} from 'react-router-dom'
import Home from './svgs/Home.svg'
import Services from './svgs/Services.svg'
import About from './svgs/About.svg'
import Contact from './svgs/Contact.svg'
import Heart from './svgs/Heart.svg'
import Insta from './svgs/Insta.svg'
import Fb from './svgs/Fb.svg'
import Point from './svgs/Point.svg'
import Youtube from './svgs/Youtube.svg'
import Twitter from './svgs/Twitter.svg'
import logo1 from './images/logo1.png'
import './App.css'


function Footer() {
  return (
    <>
        <div className="fs-3 text-light text-center rounded bg-dark border-bottom">KrishOn Tech</div>
      <div className="card-group">
  <div className="card bg-dark">
    <div className="card-body">
      <img className="navbar-brand" src={logo1} alt="Brand Logo"/>
      <h5 className="card-title text-light mt-2">Company info</h5>
      <p className="card-text text-light fst-italic ms-4">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC.</p>
    </div>
    
  </div>
  <div className="card bg-dark border-start">
    <div className="card-body text-light border-success border-start-1 ">
    <h5 className="card-title text-light">Quick Links</h5>
      <p className="card-text ms-3">
      <ul className="nav flex-column">
        <li className="nav-item text-light">
            <Link to="/" className="text-decoration-none text-light active"><img className="icon m-1 me-3" src={Home} alt='home-icon'/>Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/Services" className="text-decoration-none active text-light"><img className="icon m-1 me-3" src={Services} alt='book-icon'/>Services</Link>
        </li>
        <li className="nav-item">
        <Link to="/About" className="text-decoration-none active text-light"><img className="icon m-1 me-3" src={About} alt='about-icon'/>About Us</Link>
        </li>
        <li className="nav-item">
        <Link to="/Contact" className="text-decoration-none active text-light"><img className="icon m-1 me-3" src={Contact} alt='contact-icon'/>Contact</Link>
        </li>
        </ul></p>
     </div>
    
  </div>
  <div className="card bg-dark border-start">
    <div className="card-body ">
      <h5 className="card-title text-light">Contact Us</h5>
      
      <p className="card-text text-light ms-4">
      <img className="icon m-1" src={Point} alt="Icon-geo"/> Address: <br/>
        1-23/4/5 | India |<br/>Earth | Universal |<br/>500001
      </p>
      <div className="text-light ms-4">
        <p className="card-text text-light">Social Media</p>
      <img className="icon me-3" alt="Icon-facebook" src={Fb}/>
      <img className="icon me-3" alt="Icon-instagram" src={Insta}/>
      <img className="icon me-3" alt="Icon-youtube" src={Youtube}/>
      <img className="icon me-2" alt="Icon-twitter" src={Twitter}/>
      </div>
    </div>
  </div>
</div>
<div className="text-center rounded bg-dark text-light border-top">&copy; KrishnaPrasad<img className="icon m-1" src={Heart} alt='icon-heart'/> @2022</div>
</>
  )
}

export default Footer
