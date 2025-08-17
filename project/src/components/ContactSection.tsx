import React from 'react';
import { Mail, User } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="relative z-10 px-6 py-20" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions about Klaryti? Want to learn more about our AI-powered contract review? 
            Reach out to our team directly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Tyler Biddle - CEO */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-500/30 transition-colors duration-300">
                <User className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Tyler Biddle</h3>
                <p className="text-blue-400 font-medium">CEO</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Questions about our vision, partnerships, or business opportunities? 
              Tyler leads our mission to make contract review accessible to everyone.
            </p>
            
            <a 
              href="mailto:tyler@klaryti.com"
              className="inline-flex items-center px-6 py-3 bg-blue-500/20 hover:bg-blue-500 text-blue-400 hover:text-white rounded-xl transition-all duration-200 group-hover:scale-105"
            >
              <Mail className="w-4 h-4 mr-2" />
              tyler@klaryti.com
            </a>
          </div>

          {/* Vince Payne - CTO */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-green-500/30 transition-colors duration-300">
                <User className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Vince Payne</h3>
                <p className="text-green-400 font-medium">CTO</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Technical questions, integration inquiries, or developer partnerships? 
              Vince oversees our AI technology and platform development.
            </p>
            
            <a 
              href="mailto:vince@klaryti.com"
              className="inline-flex items-center px-6 py-3 bg-green-500/20 hover:bg-green-500 text-green-400 hover:text-white rounded-xl transition-all duration-200 group-hover:scale-105"
            >
              <Mail className="w-4 h-4 mr-2" />
              vince@klaryti.com
            </a>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400">
            We typically respond within 24 hours. Looking forward to hearing from you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;