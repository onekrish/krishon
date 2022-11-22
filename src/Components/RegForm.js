import React from 'react'
import { Link } from 'react-router-dom';

function RegForm() {
  return (
    <>
        <form className='fw-bold mt-4' id="contact-form" name="contact-form" action="mail.php" method="POST">

            <div class="row ">

                <div class="col-md-6">
                    <div class="md-form">
                        <label for="name" class="">Your name</label>
                        <input placeholder='Enter Your Name'  type="text" id="name" name="name" class="form-control mb-3"/>

                    </div>
                </div>

                <div class="col-md-6">
                    <div class="md-form">
                        <label for="email" class="">Your email</label>
                        <input placeholder='ex: krish@gmail.com' type="text" id="email" name="email" class="form-control mb-3"/>
                    
                    </div>
                </div>

            </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="md-form">
                    <label for="subject" class="">Subject</label>
                    <input placeholder='Subject' type="text" id="subject" name="subject" class="form-control mb-3"/>
                    </div>
                </div>
            </div>

            <div class="row">

                <div class="col-md-12">

                    <div class="md-form">
                    <label for="message">Your message</label>
                    <textarea placeholder='Write your message' type="text" id="message" name="message" rows="3" class="form-control md-textarea mb-3"></textarea>
                    </div>

                </div>
            </div>

        </form>
        <div class="text-center">
            <Link class="btn btn-primary w-100">Send</Link>
        </div>
    </>
  )
}

export default RegForm
