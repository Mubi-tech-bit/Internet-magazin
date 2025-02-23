import React from 'react'
import { Link } from 'react-router-dom'
import logo from './images/logo.png'

const Navbar = () => {
    return (
        <div className='w-[1920px] m-auto'>
            <div className="navbar bg-[#BB2339] font-['opens'] text-white text-[16px] px-[310px] py-[26px]">
                <Link to='/' className="btn btn-ghost text-xl"><img src={logo} alt="" /></Link>
                <Link to='/menu' className="btn btn-ghost ml-[626px] ">Menu</Link>
                <Link to='/news' className="btn btn-ghost">News</Link>
                <Link to='/about' className="btn btn-ghost">About US</Link>
                <Link to='/contact' className="btn btn-ghost">Contact Us</Link>
                <Link to='/signin' className="btn btn-ghost border border-white w-[131px] rounded-[100px] ">Log In</Link>
            </div>
        </div>
    )
}

export default Navbar