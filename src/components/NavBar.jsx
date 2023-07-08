import { useRef } from 'react';
import cv from '../../public/assets/CV_Diego_Mitma.pdf';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

// import { BsFillMoonStarsFill } from 'react-icons/bs';

const NavBar = () => {
  return (
    <div>
      <nav className='py-8 mb-8 flex justify-between'>
        <h1 className='text-3xl font-bold text-gradient'>Diego Mitari</h1>
        <ul className='flex items-center gap-8 font-bold'>
          <li><a href='#skills' className='navbar-item text-xl cursor-pointer hover:text-[#6209DB]'>Skills</a></li>
          <li><a href='#projects' className='navbar-item text-xl cursor-pointer hover:text-[#6209DB]'>Projects</a></li>
          {/* <li><BsFillMoonStarsFill className='cursor-pointer text-2xl' /></li> */}
          <li>
            <a href={cv} target="_blank"
              className='bg-[#6209DB] text-white active:bg-white active:text-[#6209DB] px-4 py-2 border-none rounded-md'
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;
