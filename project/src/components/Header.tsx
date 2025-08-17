import React from 'react';

const Header = () => {
  return (
    <header className="relative z-10 px-6 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div >
          <img src="/Vector.svg" alt="Klaryti Logo" className="w-32" />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {/* <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">
            About Us
          </a>
          <a href="#features" className="text-gray-300 hover:text-white transition-colors duration-200">
            Features
          </a>
          <a href="#pricing" className="text-gray-300 hover:text-white transition-colors duration-200">
            Pricing
          </a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">
            Contact
          </a> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;