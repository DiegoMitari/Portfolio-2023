

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
        <div>
          <img src={avatar} className='object-cover rounded-full img-gradient' />
        </div>
        <div className='main-flex-text mx-10 text-gray-500'>
          <p className='text-xl leading-relaxed'>
            I studied Industrial Engineering, after six years working in the field 👷, I discovered my true passion: Web Development.
            Currently I am improving my skills as a Developer.
          </p>
          <p className='text-xl leading-relaxed'>
            The technologies I use the most are: HTML, CSS, TailwindCSS, JavaScript and ReactJS.
            My goal is to become Full Stack🧑‍💻.
          </p>
          <p className='text-xl leading-relaxed'>
            When I&apos;m not browsing twitter, you'&apos;ll probably find me fixing bugs.
          </p>
        </div>
      </div>
    </div>

  )
}

export default Main;