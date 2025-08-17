import React, { useState } from 'react';
import { Mail, User, Phone, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { EmailSignup } from '../lib/supabase';

const EmailSignupForm = () => {
  const [formData, setFormData] = useState<EmailSignup>({
    full_name: '',
    email: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error } = await supabase
        .from('email_signups')
        .insert([{
          full_name: formData.full_name,
          email: formData.email,
          phone: formData.phone || null
        }]);

      if (error) {
        throw error;
      }

      setSuccess(true);
      setFormData({ full_name: '', email: '', phone: '' });
    } catch (err: any) {
      if (err.code === '23505') {
        setError('This email is already registered!');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (success) {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Welcome to Klaryti!</h3>
        <p className="text-gray-300">We'll keep you updated on our launch progress.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
      <h3 className="text-2xl font-bold text-white mb-6">Get Early Access</h3>
      
      <div className="space-y-4">
        <div className="relative">
          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        <div className="relative">
          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        <div className="relative">
          <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number (Optional)"
            className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </div>
      </div>

      {error && (
        <p className="mt-4 text-red-400 text-sm">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full mt-6 px-8 py-4 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 text-white font-semibold rounded-xl transition-colors duration-200 transform hover:scale-[1.02] disabled:scale-100"
      >
        {loading ? 'Signing Up...' : 'Get Started'}
      </button>

      <p className="mt-4 text-xs text-gray-400 text-center">
        Join our waitlist to be notified when we launch
      </p>
    </form>
  );
};

export default EmailSignupForm;