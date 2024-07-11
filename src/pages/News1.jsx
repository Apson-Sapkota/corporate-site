import React from "react";
import { Link } from "react-router-dom";
import useScrollToTop from "../Usescrolltotop";

function News1() {
  useScrollToTop();
  return (
    
    <>
   

   
      <h3 className="py-5 text-center school">
        IPad Repairs For Schools / Universities Across The Usa
      </h3>
      <div className="news1">
        <div className="container ">
          <div>
            <Link to="/">
              HOME <i class="bi bi-caret-right-fill"></i>
              </Link>
            <a href="#">
              LATEST NEWS <i class="bi bi-caret-right-fill"></i>
            </a>
            <span className="usa">
              <a href="#">
                IPAD REPAIRS FOR SCHOOLS/UNIVERSITIES ACROSS THE USA
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="content py-5">
        <img
          src="http://tk.commonsupport.com/repairplus/wp-content/uploads/2017/02/lat-blog-1.jpg.webp"
          alt="image"
        />
        <div className="row py-4">
          <div className="col-lg-1 sep">
            
            17 <br /> Sep
          </div>
          <div className="col-lg-11">
            <h4>IPAD REPAIRS FOR SCHOOLS / UNIVERSITIES ACROSS THE USA</h4>
            <div className="d-flex">
              <div className="d-flex">
                <i class="bi bi-person"></i> <h6>Admin</h6>
              </div>
              <div className="d-flex">
                <i class="bi bi-newspaper"></i> <h6>Latest News</h6>
              </div>
              <div className="d-flex">
                <i class="bi bi-eye"></i>
                <h6>0 Views</h6>
              </div>
              <div className="d-flex">
                <i class="bi bi-chat-dots"></i>
                <h6>Comment</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-end align-items-center py-2">
          <div className="d-flex">
            <h5>Share</h5>
            <i class="bi bi-share-fill"></i>
          </div>

          <div className="box">
            <i class="bi bi-facebook"></i>
          </div>
          <div className="box">
            <i class="bi bi-twitter"></i>
          </div>
          <div className="box">
            {" "}
            <i class="bi bi-google"></i>
          </div>
          <div className="box">
            {" "}
            <i class="bi bi-linkedin"></i>
          </div>
        </div>
        <section className="admin py-3 px-4">
          <div className="row">
            <div className="col-lg-2">
              <img
                src="http://2.gravatar.com/avatar/?s=85&d=mm&r=g"
                alt="image"
              />
            </div>
            <div className="col-lg-10">
              <h3>Admin</h3>
              <p>
                " We will give you a complete account of the system, and expound
                the actual teachings of the great explorer of the truth, the
                master-builder of human happiness."
              </p>
              <div>
                <i class="bi bi-facebook"></i>
                <i class="bi bi-google"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-linkedin"></i>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h3>Add Your Comments</h3>
          
            <p className="py-3">
              Your email address will not be published. Required fields are
              marked*
            </p>
            <div className="row formdata gy-3">
              <div className="col-lg-6">
                <h5>First Name*</h5>
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="col-lg-6">
                <h5>Last Name*</h5>
                <input type="text" placeholder="Enter a subject" />
              </div>
              <div className="col-lg-12">
                <h5>Email*</h5>
                <input type="text" placeholder="Enter your email address" />
              </div>
              <div className="col-lg-12 ">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{ height: 100 }}
                    defaultValue={""}
                  />
                  <label htmlFor="floatingTextarea2">Comments</label>
                </div>
              </div>
              <div className="col-lg-3">
              <button>SUBMIT NOW</button>
              </div>
              
            </div>
            
        </section>
      </div>
      
    </>
  );
}

export default News1;
