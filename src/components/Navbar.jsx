import logo from "../assets/logo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";


const Navbar = () => {
  return (
  <nav className="mb-20 flex justify-between items-center py-6">
    <div className="flex flex-shrink-0 items-center">
      <img  className="mx-2 w-20" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center text-2xl gap-4">
      <a href="http://www.linkedin.com/in/tebogo-mokwena-2a8887209" rel="noreferrer" target="_blank" className="text-gray-600 hover:text-blue-600">
        <FaLinkedin size={24} />
      </a>
      <a href="https://github.com/hottyy" rel="noreferrer" target="_blank" className="text-gray-600 hover:text-gray-200">
        <FaGithub size={24} />
      </a>
      <a href="https://www.instagram.com/shaun__mok" rel="noreferrer" target="_blank" className="text-gray-600 hover:text-pink-500">
        <FaInstagram size={24} />
      </a>
      
    </div>
  </nav>
  )
}

export default Navbar
