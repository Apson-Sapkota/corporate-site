import React from 'react'

function Footer() {
  return (
    <>
    <footer className="gg">
  <div className="container py-3 ">
    <div className="row">
      <div className="col-lg-4">
        <div className="pb-3"> <img src="http://tk.commonsupport.com/repairplus/wp-content/uploads/2017/02/footer-logo.png.webp" alt="logo" width={200} /></div>
        <p className="text-white">Repairplus brings 41 years of Digital Repairs experience right to your Device. Our Texhnicians are equipped
          to help you that work best.</p>
        <p className="text-white">Our commitment to bring professionalism, good service &amp; trust to the Phone repair service &amp; maintenance
          business.</p>
        <button className="purchase">PURCHASE THEME</button>
      </div>
      <div className="col-lg-8 hh">
        <div className="row py-4 ">
          <div className="col-lg-4 ourservices">
            <h5 className="text-white services">OUR SERVICES</h5>
            <ul>
              <li><a href="#"><i className="bi bi-caret-right-fill" />Smart Phone Repair</a></li>
              <li><a href="#"><i className="bi bi-caret-right-fill" />Tables &amp; iPad Repair</a></li>
              <li><a href="#"><i className="bi bi-caret-right-fill" />Desktop &amp; Laptop</a></li>
              <li><a href="#"><i className="bi bi-caret-right-fill" />Game System Repair</a></li>
              <li><a href="#"><i className="bi bi-caret-right-fill" />LCD &amp; LED TV Repair</a></li>
              <li><a href="#"><i className="bi bi-caret-right-fill" />MP3 &amp; MP4 Player</a></li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h5 className="text-white">SUBSCRIBE US</h5>
            <p className="text-white ">Subscribe to our newsleter!</p>
            <div className="enter">
              <input type="text" placeholder="Enter Your Email..." />
              <div className="paper"><i className="bi bi-send" /></div>
            </div>
            <p className="text-white py-3">We don’t do mail to spam and your mail id is confidential.</p>
            <div className="icons">
              <i className="bi bi-facebook" />
              <i className="bi bi-twitter" />
              <i className="bi bi-google" />
              <i className="bi bi-linkedin" />
            </div>
          </div>
          <div className="col-lg-4 info">
            <h5 className="text-white">CONTACT INFO</h5>
            <div className="d-flex"> <i className="bi bi-house-door-fill" />
              <span className="text-white">
                <p>32, BREAKING STREET, <br />2nd cros, Newyork ,USA 10002</p>
                <p />
              </span>
            </div>
            <div className="d-flex"> <i className="bi bi-telephone-fill" />
              <span className="text-white">
                <p>32, BREAKING STREET, <br />2nd cros, Newyork ,USA 10002</p>
                <p />
              </span>
            </div>
            <div className="d-flex"> <i className="bi bi-envelope-fill" />
              <span className="text-white">
                <p>32, BREAKING STREET, <br />2nd cros, Newyork ,USA 10002</p>
                <p />
              </span>
            </div>
            <div className="d-flex"> <i className="bi bi-alarm-fill" />
              <span className="text-white">
                <p>32, BREAKING STREET, <br />2nd cros, Newyork ,USA 10002</p>
                <p />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer