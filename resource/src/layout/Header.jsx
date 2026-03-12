import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router'
import '../assets/css/header.css'
import { CiHeart, CiLocationOn } from 'react-icons/ci'
import { GoArrowSwitch } from 'react-icons/go'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { RxPerson } from 'react-icons/rx'
import { IoIosArrowDown } from 'react-icons/io'
import { PiSunDuotone } from 'react-icons/pi'
import { ModeContext } from '../pages/ModeProvider'
import { GiMoonBats } from 'react-icons/gi'
import { useCart } from 'react-use-cart'

const Header = () => {
  const [mode, setMode]=useContext(ModeContext);
  const { totalItems } = useCart();
  return (
    <>
      <header>
        <nav className="navbar first navbar-expand-lg ">
          <div className="container-fluid">

            <div className="collapse navbar-collapse">
              <img  src={mode === "light"
             ? "https://klbtheme.com/supgor/wp-content/uploads/2025/10/logo-dark-2.png":"https://klbtheme.com/supgor/wp-content/uploads/2025/10/logo-light-2.png" } className='me-5'></img>
              <div className='location me-3'>
                <CiLocationOn className='locicon' />
                <div className="loc-text">
                  <p>All</p>
                  <p><span>your location</span></p>
                </div>
              </div>

              <input className="form-control me-2" type="search" placeholder="Search popular products..." aria-label="Search" />


              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
                <li className="nav-item iconp ">
                  <RxPerson />

                </li>
                <li className="nav-item icons">
                  <CiHeart />
                </li>
                <li className="nav-item icons">
                  <GoArrowSwitch />
                </li>
                <li className="nav-item icons">
                  <Link to='/basket' style={{backgroundColor:"transparent", color:"grey"}}  class=" icons position-relative">

   <HiOutlineShoppingBag size={24} />
        {totalItems > 0 && (
          <span style={{fontSize:"12px" , borderRadius:"50%"}} className="badge bg-danger position-absolute top-0 start-100 translate-middle">
            {totalItems}
          </span>
        )}
</Link>
               
                </li>
                <li className="nav-item icons">
                <button onClick={()=>setMode(mode==="light" ? "dark":"light")}>{mode==="light"?  <PiSunDuotone /> : <GiMoonBats />}</button> 
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <nav className="navbar second navbar-expand-lg ">
          <ul className="navbar-nav my-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Home <IoIosArrowDown /></NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className="nav-link">Shop <IoIosArrowDown /></NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blog" className="nav-link" >Blog</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </li>
          </ul>
        </nav>

      </header>
    </>
  )
}

export default Header