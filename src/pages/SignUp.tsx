import React, { useState } from 'react';
import { supabase } from '../supabaseclient';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignUp = async () => {
    const { data } = await supabase.auth.getUser();
    if (data.user) {
      setMessage('User already exists!');
    } else {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        setMessage(error.message);
      } else {
        setMessage('Check your email for confirmation!');
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Create an account</h2>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            onClick={handleSignUp}
            className="w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800 transition"
          >
            Sign Up
          </button>
          <p className="text-center text-sm text-gray-600">
            Already have an account? <span className="text-purple-700 font-medium cursor-pointer">Sign in</span>
          </p>
          {message && <p className="text-center text-sm text-red-500">{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default SignUp;



