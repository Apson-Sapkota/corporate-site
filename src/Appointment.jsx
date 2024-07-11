import React from 'react'

function Appointment() {
  return (
    <>
    <section>
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <h2 className="py-5">Works Before &amp; After</h2>
        <div className="row gy-4">
          <div className="col-lg-6">
            <img src="http://tk.commonsupport.com/repairplus/wp-content/uploads/2017/02/before-1.jpg.webp" alt="image" />
            <img src="http://tk.commonsupport.com/repairplus/wp-content/uploads/2017/02/after-1.jpg.webp" alt="image" />
          </div>
          <div className="col-lg-6">
            <img src="http://tk.commonsupport.com/repairplus/wp-content/uploads/2017/02/before-2.jpg.webp" alt="image" />
            <img src="http://tk.commonsupport.com/repairplus/wp-content/uploads/2017/02/after-2.jpg.webp" alt="image" />
          </div>
          <div className="col-lg-6">
            <img src="http://tk.commonsupport.com/repairplus/wp-content/uploads/2017/02/before-3.jpg.webp" alt="image" />
            <img src="http://tk.commonsupport.com/repairplus/wp-content/uploads/2017/02/after-3.jpg.webp" alt="image" />
          </div>
          <div className="col-lg-6">
            <img src="http://tk.commonsupport.com/repairplus/wp-content/uploads/2017/02/before-4.jpg.webp" alt="image" />
            <img src="http://tk.commonsupport.com/repairplus/wp-content/uploads/2017/02/after-4.jpg.webp" alt="image" />
          </div>
        </div>
      </div>
      <div className="col-lg-6 cc">
        <h2 className="py-5">Make An Appoinment</h2>
        <form>
          <fieldset className="py-3">
            <div className="row">
              <div className="col-lg-6">
                <input type="text" placeholder="Name*" />
              </div>
              <div className="col-lg-6">
                <input type="text" placeholder="Email*" />
              </div>
              <div className="col-lg-6">
                <input type="text" placeholder="Phone*" />
              </div>
              <div className="col-lg-6">
                <input type="date" placeholder="Date" />
              </div>
              <div className="col-lg-6">
                <input type="time" />
              </div>
              <div className="col-lg-6 d-flex align-items-center justify-content-start">
                <select name="Service" id="Service">
                  <option value="Select-Service">Select-Service</option>
                  <option value="Service1">Service1</option>
                  <option value="Service2">Service2</option>
                  <option value="Service3">Service3</option>
                </select>
              </div>
              <div className="col-lg-12">
                <div className="form-floating">
                  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" defaultValue={""} />
                  <label htmlFor="floatingTextarea">Comments</label>
                </div>
              </div>
            </div>
            <button className="m-3 buttona">Send Now</button>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Appointment