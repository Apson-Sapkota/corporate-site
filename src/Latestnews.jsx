import React, { useEffect } from "react";
import { latestnewsinfo } from "./data";
import { Link } from "react-router-dom";
import useScrollToTop from "./Usescrolltotop";

function Latestnews() {
 
 

  return (
    <>
      <div className="py-5 dd">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="py-3 text-white">Latest News</h2>
            </div>
            <div className="col-lg-6 text-end read">
              <a href="#">READ MORE NEWS</a>
            </div>
          </div>
          <div className="row">
            {latestnewsinfo.map((item, index) => (
              <div key={item.id} className="col-lg-4">
                <div className="hover1">
                  <img src={item.img} alt="image" width="100%" />
                  <div className="effect"></div>
                  <div className="link2">
                    <Link to={`${item.id}`}>
                      <i className="bi bi-link" />
                    </Link>
                  </div>
                </div>

                <div className="py-3 repair">
                  <span>
                    <i className={item.icon1} />
                    admin
                  </span>
                  <span className="px-2">
                    <i className={item.icon2} />
                    September 17, 2019
                  </span>
                </div>
                <h5>{item.info}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Latestnews;
