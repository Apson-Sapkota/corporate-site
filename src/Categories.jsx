import React from "react";
import { categoriesinfo } from "./data";

function Categories() {
  return (
    <>
      <section className="py-5 aa">
        <div className="container">
          <div className="row g-5">
            <div className="text-center text-white"><h2>Categories</h2></div>
            {categoriesinfo.map((item,index) => (
              <div key={index} className="col-lg-4">
                <div className="row">
                  <div className="col-3 left">
                    <i className={item.icon} />
                  </div>
                  <div className="col-9 right px-3 py-4">
                    <div className="r1">
                    <h5>{item.heading}</h5>
                    <p>{item.info}</p>
                    </div>
                    
                    <div className="blackeffect py-4 px-3">
                      <h5>{item.heading}</h5>
                      <p>{item.info}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Categories;
