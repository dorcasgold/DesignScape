import { Link, NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'

function Header() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <nav className="sm:px-20 sm:py-5 px-5 py-5">
      <div className="flex justify-between text-gray-300 items-center">
        <div>
          <Link to="/">
            <h1 className="logo font-semibold grad text-gray-400 text-xl sm:text-2xl">DesignScape</h1>
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex gap-20">
            <NavLink to="/about">
              <li className="font-normal">ABOUT US</li>
            </NavLink>
            <NavLink to="/">
              <li>PROJECTS</li>
            </NavLink>
            <NavLink to="/">
              <li>SERVICES</li>
            </NavLink>
            <NavLink to="/">
              <li>CONTACT</li>
            </NavLink>
          </ul>
        </div>

        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div className={nav ? 'nav flex flex-col px-5 pt-10 items-center gap-5 text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r-gray-900 bg-[#202121] ease-in-out duration-500' : "fixed left-[-100%]"}>
          <div>
            <Link to="/">
              <h1 className="logo  grad font-semibold text-2xl sm:text-4xl">DesignScape</h1>
            </Link>
          </div>
          <ul className="flex flex-col gap-8 mt-10">
            <NavLink to="/about">
              <li className="font-normal">ABOUT US</li>
            </NavLink>
            <NavLink to="/">
              <li>PROJECTS</li>
            </NavLink>
            <NavLink to="/">
              <li>SERVICES</li>
            </NavLink>
            <NavLink to="/">
              <li>CONTACT</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header