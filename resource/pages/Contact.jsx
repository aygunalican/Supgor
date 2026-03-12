import React from 'react'
import '../assets/css/contact.css'
const Contact = () => {
  return (
    <section className="contact">
      <div className="left-con">
        <div className="first-con">
        <h1>Our Stores</h1>
        <p>On dekande mydurtad mora även om skurkstat. Semirade timaheten rena. Radiogen pasam inte loba även om prerade i garanterad traditionell specialitet till bebel. Ev is sönde. Tun gps-väst att epiligt. Diliga tresk dira. Ens biov dijevis.</p>
      </div>
      <div className="second-con">
        <div className="uni-state">
          <p>United States</p>
          <h3>United States</h3>
          <h6>205 Middle Road, 2nd Floor, New York 2485</h6>
           <h5>+02 1234 567 89</h5>
          <h5>inf0.az@gmail.com</h5>
        </div>
                <div className="uni-state">
          <p>Nedherlands</p>
          <h3>Nedherlands</h3>
          <h6>205 Middle Road, 2nd Floor, New York 2485</h6>
           <h5>+02 1234 567 89</h5>
          <h5>inf0.az@gmail.com</h5>
        </div>
      </div>
      
      
      </div>
     <div className="contact-con">
      <h2>Write us...</h2>
      <p>
     On dekande mydurtad mora även om skurkstat. Semirade timaheten rena. Radiogen pasam inte loba även om prerade i garanterad traditionell specialitet till bebel.
      </p>

      <form className="contact-form">
        <div className="wow">
          <div className="field ">
            <label>Your name *</label>
            <input type="text" />
          </div>

          <div className="field">
            <label>Your email *</label>
            <input type="email" />
          </div>
        </div>

        <div className="field subj">
          <label>Subject *</label>
          <input type="text" />
        </div>

        <div className="field mesg">
          <label>Your message</label>
          <textarea rows="5"></textarea>
        </div>

        <button type="button">Send Message</button>
      </form>
    </div>
    </section>
  );

}

export default Contact