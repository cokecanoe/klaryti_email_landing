import React from 'react';
import { Shield, Zap, Eye } from 'lucide-react';

const MissionSection = () => {
  return (
    <section className="relative z-10 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Bold Mission Statement */}
        <div className="text-center mb-20">
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

        {/* Modern Mission Statement */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Shield className="w-12 h-12 text-green-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Simple, Accessible, Stress-Free
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Klaryti is on a mission to make contract review simple, accessible, and stress-free. 
              Our technology scans your documents in seconds, flags potential issues, and explains 
              them in plain language. Whether you're a founder, freelancer, or team lead, we give 
              you the clarity you need to move forward without hesitation.
            </p>

            {/* Features Preview */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Contract Analysis</h3>
                <p className="text-gray-400">AI-powered scanning identifies key clauses and potential risks</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Risk Assessment</h3>
                <p className="text-gray-400">Clear risk ratings help you understand potential impacts</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Plain Language</h3>
                <p className="text-gray-400">Complex legal terms translated into actionable insights</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;