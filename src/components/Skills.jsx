import { SiHtml5, SiCss3, SiJavascript, SiReact, SiVuedotjs, SiBootstrap, SiTailwindcss, SiPostgresql, SiGoogleanalytics, SiGithub, SiFigma } from 'react-icons/si';


const Skills = () => {
  return (
    <div className='skills my-6 mx-1 md:m-10 text-center' id='skills'>
      {/* Skills Dev */}
      < div >
        <h3 className='text-2xl md:text-4xl font-bold py-2 hover:text-[#6209DB]'>Professional Skills<span className='text-6xl text-[#6209DB]'>.</span></h3>
        <p className='my-4 font-semibold'>Development</p>
        <div className="skillname-container m-4 md:m-8 grid gap-8 grid-cols-3 sm:grid-cols-5 md:grid-cols-6 justify-center items-center">
          <div className="skills-name flex flex-col justify-center items-center">
            <SiReact className='text-gray-600 text-4xl md:text-5xl hover:text-[#6209DB]' />
            <p className="skills-text-icon mt-2 text-sm md:text-lg font-semibold">React</p>
          </div>
          <div className="skills-name flex flex-col justify-center items-center">
            <SiVuedotjs className='text-gray-600 text-4xl md:text-5xl hover:text-[#6209DB]' />
            <p className="skills-text-icon mt-2 text-sm md:text-lg font-semibold">VueJS</p>
          </div>
          <div className="skills-name flex flex-col justify-center items-center">
            <SiHtml5 className='text-gray-600 text-4xl md:text-5xl hover:text-[#6209DB]' />
            <p className="skills-text-icon mt-2 text-sm md:text-lg font-semibold">HTML</p>
          </div>
          <div className="skills-name flex flex-col justify-center items-center">
            <SiCss3 className='text-gray-600 text-4xl md:text-5xl hover:text-[#6209DB]' />
            <p className="skills-text-icon mt-2 text-sm md:text-lg font-semibold">CSS</p>
          </div>

          <div className="skills-name flex flex-col justify-center items-center">
            <SiJavascript className='text-gray-600 text-4xl md:text-5xl hover:text-[#6209DB]' />
            <p className="skills-text-icon mt-2 text-sm md:text-lg font-semibold">Javascript</p>
          </div>

          <div className="skills-name flex flex-col justify-center items-center">
            <SiBootstrap className='text-gray-600 text-4xl md:text-5xl hover:text-[#6209DB]' />
            <p className="skills-text-icon mt-2 text-sm md:text-lg font-semibold">Bootstrap</p>
          </div>

          <div className="skills-name flex flex-col justify-center items-center">
            <SiTailwindcss className='text-gray-600 text-4xl md:text-5xl hover:text-[#6209DB]' />
            <p className="skills-text-icon mt-2 text-sm md:text-lg font-semibold">TailwindCSS</p>
          </div>

          <div className="skills-name flex flex-col justify-center items-center">
            <SiPostgresql className='text-gray-600 text-4xl md:text-5xl hover:text-[#6209DB]' />
            <p className="skills-text-icon mt-2 text-sm md:text-lg font-semibold">PostgreSQL</p>
          </div>

          <div className="skills-name flex flex-col justify-center items-center">
            <SiGoogleanalytics className='text-gray-600 text-4xl md:text-5xl hover:text-[#6209DB]' />
            <p className="skills-text-icon mt-2 text-sm md:text-lg font-semibold">Analytics</p>
          </div>

          <div className="skills-name flex flex-col justify-center items-center">
            <SiGithub className='text-gray-600 text-4xl md:text-5xl hover:text-[#6209DB]' />
            <p className="skills-text-icon mt-2 text-sm md:text-lg font-semibold">Github</p>
          </div>
        </div>
      </div >

      {/* Skills Design */}
      < div >
        <p className='my-4 font-semibold'>Design</p>
        <div className="skillname-container m-4 md:m-8 grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-8 justify-center items-center">
          <div className="skills-name flex flex-col justify-center items-center">
            <SiFigma className='text-gray-600 text-4xl md:text-5xl hover:text-[#6209DB]' />
            <p className="skills-text-icon mt-2 text-sm md:text-lg font-semibold">Figma</p>
          </div>
        </div>
      </div >


    </div >
  )
}

export default Skills