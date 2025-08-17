import React from 'react';
import { FileText } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative z-10 px-6 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-white">Klaryti</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">
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
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;