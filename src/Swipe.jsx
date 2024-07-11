
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { sliderinfo } from "./data";

export default function Swipe() {
  return (
    <>
     <Swiper 
  navigation={true} 
  modules={[Navigation]} 
  loop={true}
  className="mySwiper repairplus"
>
        {sliderinfo.map((item) => (
          <SwiperSlide key={item.id} className="s1">
            <div>
              <img
                src={item.img}
                alt="image"
                className="si1"
              />
              <div className={`c1 ${item.id==2 && 'c2'}`}>
                <div>
                <div >
                  <h3>
                    Welcome to RepairPlus <br />
                    quick repair
                  </h3>
                </div>
                <div >
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eos, esse? Accusamus <br />
                    ex tenetur officia! Totam.
                  </p>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
                <div className="d-flex">
                <button className="buy">BUY NOW</button>
                <button className="us">CONTACT US</button>
                </div>
               </div>
               <div></div>
              </div>
              <div />
            </div>
            
          </SwiperSlide>
        ))}

        
      </Swiper>
    </>
  );
}
