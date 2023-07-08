
import work01 from '../../public/imgs/work01.png';
import work02 from '../../public/imgs/work02.png';
import work03 from '../../public/imgs/work03.png';
import work04 from '../../public/imgs/work04.png';
import work05 from '../../public/imgs/work05.png';
import work06 from '../../public/imgs/work06.jpg';
import { FiGithub, FiLink } from 'react-icons/fi';
const Portfolio = () => {
  return (
    <div className='text-center' id='projects'>
      <h3 className='text-2xl md:text-4xl font-bold py-2 hover:text-[#6209DB]'>Projects<span className='text-6xl text-[#6209DB]'>.</span></h3>
      <div>
        <div className="container-work-item">
          {/* Work 01 */}
          <div className="work-item">
            <img src={work01} className='rounded-md object-cover' />

            <div className="portfolio-link">
              <div className="text-lg text-gray-700 hover:text-[#6209DB]">
                <span className='font-bold'>Job Search Web</span> <br />
                <small>React | Javascript |</small> <br />
                <small>TailwindCSS | Firebase</small>
              </div>
              <div className='mt-3 flex gap-3 text-gray-700'>
                <a href="https://github.com/DiegoMitari/Job-Search-Web" className="" target="_blank">
                  <FiGithub className='text-3xl md:text-4xl cursor-pointer hover:text-[#6209DB]' />
                </a>
                <a href="https://job-search-web.vercel.app/" className="" target="_blank">
                  <FiLink className='text-3xl md:text-4xl cursor-pointer hover:text-[#6209DB]' />
                </a>
              </div>
            </div>
          </div>

          {/* Work 02 */}
          <div className="work-item">
            <img src={work02} className='rounded-md object-cover' />

            <div className="portfolio-link">
              <div className="text-lg text-gray-700 hover:text-[#6209DB]">
                <span className='font-bold'>FreeCodeCamp Web Clone</span> <br />
                <small>React | HTML | CSS</small>
              </div>
              <div className='mt-3 flex gap-3 text-gray-700'>
                <a href="https://github.com/DiegoMitari/FreecodeCamp-Clone" target="_blank">
                  <FiGithub className='text-3xl md:text-4xl cursor-pointer hover:text-[#6209DB]' />
                </a>
                <a href="https://diegomitari.github.io/FreecodeCamp-Clone/" target="_blank">
                  <FiLink className='text-3xl md:text-4xl cursor-pointer hover:text-[#6209DB]' />
                </a>
              </div>
            </div>
          </div>

          {/* Work 03 */}
          <div className="work-item">
            <img src={work03} className='rounded-md object-cover' />

            <div className="portfolio-link">
              <div className="text-lg text-gray-700 hover:text-[#6209DB]">
                <span className='font-bold'>Simulator Credit | Fintech</span> <br />
                <small>Javascript | Jquery | HTML |</small> <br />
                <small>CSS | Bootstrap</small> <br />
                <small>Final Project CoderHouse</small>
              </div>
              <div className='mt-3 flex gap-3 text-gray-700'>
                <a href="https://github.com/DiegoMitari/Javascript-Project-CoderHouse" className="" target="_blank">
                  <FiGithub className='text-3xl md:text-4xl cursor-pointer hover:text-[#6209DB]' />
                </a>
                <a href="https://diegomitari.github.io/Javascript-Project-CoderHouse/" className="" target="_blank">
                  <FiLink className='text-3xl md:text-4xl cursor-pointer hover:text-[#6209DB]' />
                </a>
              </div>
            </div>
          </div>

          {/* Work 04 */}
          <div className="work-item">
            <img src={work04} className='rounded-md object-cover' />

            <div className="portfolio-link">
              <div className="text-lg text-gray-700 hover:text-[#6209DB]">
                <span className='font-bold'>Landing Page 01</span> <br />
                <small>HTML | CSS </small> <br />
                <small></small>
              </div>
              <div className='mt-3 flex gap-3 text-gray-700'>
                <a href="https://github.com/DiegoMitari/landingpage01" className="https://github.com/DiegoMitari/landingpage01" target="_blank">
                  <FiGithub className='text-3xl md:text-4xl cursor-pointer hover:text-[#6209DB]' />
                </a>
                <a href="https://diegomitari.github.io/landingpage01/" className="" target="_blank">
                  <FiLink className='text-3xl md:text-4xl cursor-pointer hover:text-[#6209DB]' />
                </a>
              </div>
            </div>
          </div>

          {/* Work 05 */}
          <div className="work-item">
            <img src={work05} className='rounded-md object-cover' />

            <div className="portfolio-link">
              <div className="text-lg text-gray-700 hover:text-[#6209DB]">
                <span className='font-bold'>Landing Page 02</span> <br />
                <small>HTML | CSS | Javascript</small>
              </div>
              <div className='mt-3 flex gap-3 text-gray-700'>
                <a href="https://github.com/DiegoMitari/Page-Web" target="_blank">
                  <FiGithub className='text-3xl md:text-4xl cursor-pointer hover:text-[#6209DB]' />
                </a>
                <a href="https://diegomitari.github.io/Page-Web/" target="_blank">
                  <FiLink className='text-3xl md:text-4xl cursor-pointer hover:text-[#6209DB]' />
                </a>
              </div>
            </div>
          </div>

          {/* Work 06 */}
          <div className="work-item">
            <img src={work06} className='rounded-md object-cover' />

            <div className="portfolio-link">
              <div className="text-lg text-gray-700 hover:text-[#6209DB]">
                <span className='text-sm font-bold'></span> <br />
                <small></small>
              </div>
              <div className='mt-3 flex gap-3 text-gray-700'>
                <a href="" className="" target="_blank">
                  <FiGithub className='text-3xl md:text-4xl cursor-pointer hover:text-[#6209DB]' />
                </a>
                <a href="" className="" target="_blank">
                  <FiLink className='text-3xl md:text-4xl cursor-pointer hover:text-[#6209DB]' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Portfolio