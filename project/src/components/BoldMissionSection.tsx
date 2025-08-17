import React from 'react';
import { Zap } from 'lucide-react';

const BoldMissionSection = () => {
  return (
    <section className="relative z-10 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Zap className="w-12 h-12 text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Breaking Down Legal Barriers
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Contracts run the world—but most people sign them blind. Klaryti changes that. 
            We built an AI-powered reviewer that breaks down complex legal jargon into clear, 
            actionable insights. No more hidden traps, no more wasted hours. Just fast, 
            transparent contract clarity at your fingertips.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BoldMissionSection;