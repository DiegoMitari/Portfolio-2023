import { useRef } from 'react';
import cv from '../../public/CV_Diego_Mitma.pdf';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

// import { BsFillMoonStarsFill } from 'react-icons/bs';

const NavBar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  }

  return (
    <div>
      <nav className='nav-bar py-8 mb-8 flex justify-between'>
        <h1 className='text-2xl md:text-3xl font-bold text-gradient'>Diego Mitma</h1>

        <ul className='flex items-center gap-8 font-bold' ref={navRef}>
          <li>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
              <AiOutlineClose size={30} className='text-center md:hidden' />
            </button>
          </li>
          <li><a href='#skills' className='navbar-item text-2xl md:text-xl cursor-pointer hover:text-[#6209DB]' onClick={showNavbar}>Skills</a></li>
          <li><a href='#projects' className='navbar-item text-2xl md:text-xl cursor-pointer hover:text-[#6209DB]' onClick={showNavbar}>Projects</a></li>
          <li>
            <a href={cv} target="_blank" className='navbar-item text-2xl md:text-xl cursor-pointer hover:text-[#6209DB]' onClick={showNavbar}>
              Resume
            </a>
          </li>
        </ul>


        <button className="nav-btn" onClick={showNavbar}>
          <AiOutlineMenu size={30} className='text-center md:hidden' />
        </button>
      </nav>
    </div>
  )
}

export default NavBar;
