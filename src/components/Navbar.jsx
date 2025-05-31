import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="mb-20 flex justify-between items-center py-6">
      <div className="flex flex-shrink-0 items-center">
        <Link to="/">
          <img className="mx-2 w-20" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="m-8 flex items-center justify-center text-2xl gap-4">
        <Link
          to={{ pathname: "http://www.linkedin.com/in/tebogo-mokwena-2a8887209" }}
          target="_blank"
          className="text-gray-600 hover:text-blue-600"
        >
          <FaLinkedin size={24} />
        </Link>
        <Link
          to={{ pathname: "https://github.com/hottyy" }}
          target="_blank"
          className="text-gray-600 hover:text-gray-200"
        >
          <FaGithub size={24} />
        </Link>
        <Link
          to={{ pathname: "https://www.instagram.com/shaun__mok" }}
          target="_blank"
          className="text-gray-600 hover:text-pink-500"
        >
          <FaInstagram size={24} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;