// Filename - App.js

import React from "react";
import CountUp from "react-countup";

function Countingup() {
  return (
    <>
      <section className="co1">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="App">
                
                <div style={{ fontSize: "50px" }}>
                  <CountUp start={0} end={2456} duration={15} />
                </div>
				<div className="line "></div>
				<div><h5>Mobiles Repaired</h5></div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="App">
                
                <div style={{ fontSize: "50px" }}>
                  <CountUp start={0} end={146} duration={15} />
				  <span>+</span>
                </div>
				<div className="line "></div>
				<div><h5>Mobiles Repaired</h5></div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="App">
               
                <div style={{ fontSize: "50px" }}>
                  <CountUp start={0} end={853} duration={15} />
				  <span>+</span>
                </div>
				<div className="line "></div>
				<div><h5>Mobiles Repaired</h5></div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="App">
                
                <div style={{ fontSize: "50px" }}>
                  <CountUp start={0} end={2381} duration={15} />
				  <span>+</span>
                </div>
				<div className="line "></div>
				<div><h5>Mobiles Repaired</h5></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Countingup;
