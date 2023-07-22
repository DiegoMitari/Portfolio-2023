

import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi';
import avatar from '../../public/avatar.jpg'
const Main = () => {

  return (
    <div>
      <div className='text-center p-5 pt-1'>
        <h2 className='text-4xl  md:text-6xl py-2 font-bold'>I&apos;m <span className='hover:text-[#6209DB]'>Diego Mitma Ariza</span></h2>
        <div className='text-wrapper-container'>
          <span className='a text-2xl md:text-3xl py-2 font-medium font-bold'>Frontend Developer</span>
          <span className='text-2xl md:text-3xl py-2 font-medium font-bold'>Industrial Engineer</span>
          <span className='text-2xl md:text-3xl py-2 font-medium font-bold'>JavaScript Developer</span>

        </div>
      </div>
      <div className='text-5xl flex justify-center gap-16 py-3 text-gray-500'>
        <a target="_blank" href="https://twitter.com/DiegoMitari" >
          <FiTwitter className='cursor-pointer hover:text-[#6209DB]' />
        </a>
        <a target="_blank" href="https://github.com/DiegoMitari" >
          <FiGithub className='cursor-pointer hover:text-[#6209DB]' />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/diegomitari/" >
          <FiLinkedin className='cursor-pointer hover:text-[#6209DB]' />
        </a>
      </div>
      <div className='main-flex flex items-center justify-between gap-6 m-5 mt-10'>
        <div className='rounded-lg'>
          <img src={avatar} className='object-cover rounded-full' />
        </div>
        <div className='main-flex-text mx-10 text-gray-500'>
          <p className='text-2xl leading-relaxed'>
            I studied Industrial Engineering, after 06 years working as such 👷, I found my true passion in Web Development.
            Currently I am improving my skills as a programmer.
          </p>
          <p className='text-2xl leading-relaxed'>
            The technologies I use the most are: HTML, CSS, JS and ReactJS.
            My goal is to become Full Stack🧑‍💻.
          </p>
          <p className='text-2xl leading-relaxed'>
            My goal is to become Full Stack🧑‍💻.
          </p>
          <p className='text-2xl leading-relaxed'>
            If I&apos;m not browsing twitter, I&apos;ll probably find myself fixing bugs.
          </p>
        </div>
      </div>
    </div>

  )
}

export default Main;