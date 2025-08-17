import React from 'react';
import { FileText, Mail, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 px-6 py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Klaryti</span>
          </div>

          <div className="flex items-center space-x-6">
            <a href="mailto:hello@klaryti.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Klaryti. All rights reserved. Making contracts clear for everyone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;