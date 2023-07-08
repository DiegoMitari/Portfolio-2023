
import { BsWhatsapp } from 'react-icons/bs';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
const Footer = () => {
  return (
    <div className="footer flex justify-around items-center p-[2rem] py-6 rounded-[10px] gap-6 bg-[#6209DB]">
      <div className='text-lg md:text-xl font-bold'>DiegoMitari</div>

      <div className="footer-info flex gap-20 text-center items-center">
        <div>
          <h4 className="font-bold text-sm md:text-base">Cellphone</h4>
          <p className="text-sm md:text-base">51 992 998 907</p>
        </div>

        <div>
          <h4 className="font-bold text-sm md:text-base">Email</h4>
          <p className="text-sm md:text-base">diego89ma@gmail.com</p>
        </div>

        <div>
          <h4 className="font-bold text-sm md:text-base">City</h4>
          <p className="text-sm md:text-base">Lima, Perú</p>
        </div>

        <div className='flex gap-5'>
          <a target="_blank" href="https://api.whatsapp.com/send?phone=51992998907" >
            <BsWhatsapp className='cursor-pointer text-xl md:text-2xl hover:text-[white]' />
          </a>
          <a target="_blank" href="https://twitter.com/DiegoMitari" >
            <FiGithub className='cursor-pointer text-xl md:text-2xl hover:text-[white]' />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/diegomitari/">
            <FiLinkedin className='cursor-pointer text-xl md:text-2xl hover:text-[white]' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer