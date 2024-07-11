import React from "react";
import { repairinfo } from "./data";
import { Link } from "react-router-dom";

function Repair() {
  return (
    <>
      <div className="container py-5">
        <div className="row">
          {repairinfo.map((item, index) => (
            <div className="col-lg-4 " key={index}>
              <div className="border border-1 py-3 px-4 ">
                <div className="specialise">
                  <h5>{item.heading}</h5>
                  <div className="image-container">
                    <img src={item.img} />
                    <div className="aftereffect" />
                    <div className="link">
                      <Link className="links" onClick={()=>window.scrollTo(0,0)} >
                        <i className="bi bi-link" />
                      </Link>
                    </div>
                  </div>
                  <p>{item.info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Repair;
