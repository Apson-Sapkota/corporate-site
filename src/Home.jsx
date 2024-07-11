import React from 'react'
import Swipe from './Swipe'
import Repair from './Repair'
import Categories from './Categories'
import Aboutus from './Aboutus'
import Appointment from './Appointment'
import Latestnews from './Latestnews'
import Testimonials from './Testimonials'
import Btestimonials from './Btestimonials'
import useScrollToTop from './Usescrolltotop'
import Countingup from './Countingup'

function Home() {
  useScrollToTop();
  return (
   <>
   <Swipe/>
   <Repair/>
   <Categories/>
   <Aboutus/>
   <Countingup/>
   <Appointment/>
   <Latestnews/>
   <Testimonials/>
   <Btestimonials/>
   </>
  )
}

export default Home