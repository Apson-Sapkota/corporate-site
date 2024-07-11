import React from 'react'
import { topinfo } from './data'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
 
function Header() {
  return (
    <>
 <header>
  <div className="top">
    <div className="container">
      <div className="row">
        <div className="col-lg-9">
          <p>Welcome to Repairplus Experts,Theme for Repair Shops</p>
        </div>
        <div className="col-lg-3">
          <a href="#"><i className="bi bi-facebook" /></a>
          <a href="#"> <i className="bi bi-twitter" /></a>
          <a href="#"><i className="bi bi-google" /></a>
          <a href="#"><i className="bi bi-linkedin" /></a>
        </div>
      </div>
    </div>
  </div>
  <div className="bottom py-4">
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <Link to='/'>
          <img src="http://tk.commonsupport.com/repairplus/wp-content/themes/repairplus/images/resources/logo.png.webp" alt="logo" />
          </Link>
        </div>
        {topinfo.map(item=>(
          <div key={item.id} className="col-lg-3 combine">
          <div className="circle">
            <i className ={item.icon} />
          </div>
          <div>
            <h3>{item.name}</h3>
            <p>{item.info}</p>
          </div>
        </div>
          
        ))}
       
      </div>
    </div>
  </div>
  <nav className="navbar navbar-expand-lg navc">
    <div className="container">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">HOME</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              SERVICES
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">Smartphone Repair</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Tablet And Ipad Repair</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Desktop &amp; Mac Repair</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Game Console Repair</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Led &amp; Led Tv Repair</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Mp3 &amp; mp4 Player Repair</a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              PAGES
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">About Us</a></li>
              <li>
                <a className="dropdown-item" href="#">Meet Our Team</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">FAQs</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">FAQs Single</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Testimonials</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Pricing Plans</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">404 Page</a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              SHOP
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Shop Products</a></li>
              <li>
                <a className="dropdown-item" href="#">Single Products</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Shopping Cart</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Checkout</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">My Account</a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              BLOG
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Blog Default</a></li>
              <li>
                <a className="dropdown-item" href="#">Blog Single</a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">CONTACT US</a>
          </li>
        </ul>
        <div className="ms-auto phone d-flex align-items-center sm:d-flex">
          <i className="bi bi-phone Phone" />
          <p className='align-self-end'><span className='care'>Customer Care </span><br />1800-56-78-9012</p>
          <div className="search"><i className="bi bi-search" /></div>
        </div>
      </div>
    </div>
  </nav>
</header>

  <Routes>
    <Route path='/' element={<Home/>}/>
  </Routes>
    </>
  )
}

export default Header