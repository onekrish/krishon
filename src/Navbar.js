import React from 'react'
import {Link} from 'react-router-dom';
import logo1 from './images/logo1.png'
import './App.css'

function Navbar() {
  return (
            <>
                <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top position-absolute">
                    <div className="container-fluid">
                        <img className="navbar-brand ms-5" src={logo1} alt="Brand Logo"/>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active text-light fs-5">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Services" className="nav-link text-light fs-5">Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/About" className="nav-link text-light fs-5">AboutUs</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Contact" className="nav-link text-light fs-5">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
         )
    }

export default Navbar
