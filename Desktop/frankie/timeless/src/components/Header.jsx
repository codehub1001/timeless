import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-[#4b2c5e] text-white shadow-md sticky top-0 z-50">
    <div className="flex justify-between items-center px-4 md:px-8 py-2">
      {/* Logo */}
      <div>
        <Link to="/" className="flex items-center">
          <img src="./img/tlogo.png" alt="InteriorElegance Logo" className="h-25 w-auto" />
        </Link>
      </div>
  
      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6 font-medium text-white text-sm">
        <Link to="/about" className="hover:text-[#d1a37b] transition-colors">About</Link>
        <Link to="/portfolio" className="hover:text-[#d1a37b] transition-colors">Portfolio</Link>
        <Link to="/contact" className="hover:text-[#d1a37b] transition-colors">Contact</Link>
      </nav>
  
      {/* Social Icons */}
      <div className="hidden md:flex space-x-3 text-lg">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} className="hover:text-[#d1a37b]" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="hover:text-[#d1a37b]" />
        </a>
        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faPinterestP} className="hover:text-[#d1a37b]" />
        </a>
      </div>
  
      {/* Mobile Menu Toggle */}
      <button onClick={toggleMenu} className="md:hidden text-white text-xl">
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  
    {/* Mobile Nav */}
    <div
      className={`md:hidden bg-[#4b2c5e] px-6 py-3 space-y-3 text-white transition-all duration-300 ${
        mobileMenuOpen ? 'block' : 'hidden'
      }`}
    >
      <Link to="/about" onClick={toggleMenu} className="block hover:text-[#d1a37b]">About</Link>
      <Link to="/portfolio" onClick={toggleMenu} className="block hover:text-[#d1a37b]">Portfolio</Link>
      <Link to="/contact" onClick={toggleMenu} className="block hover:text-[#d1a37b]">Contact</Link>
      <div className="flex space-x-4 pt-2 text-lg">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} className="hover:text-[#d1a37b]" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="hover:text-[#d1a37b]" />
        </a>
        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faPinterestP} className="hover:text-[#d1a37b]" />
        </a>
      </div>
    </div>
  </header>
  
  );
};

export default Header;
