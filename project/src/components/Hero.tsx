import React from 'react';
import EmailSignupForm from './EmailSignupForm';

const Hero = () => {
  return (
    <section className="relative z-10 px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          AI-powered contract review
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
          Built for consumers and businesses, providing clarity and confidence in your agreements.
        </p>

        <div className="max-w-md mx-auto">
          <EmailSignupForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;