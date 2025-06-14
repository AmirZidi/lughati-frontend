'use client';
import { useState } from 'react';
import { Auth } from 'aws-amplify';
import Link from 'next/link';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setMessage("Passwords don't match ❌");
      return;
    }

    const isPasswordValid = /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
    if (!isPasswordValid) {
      setMessage("Password must be at least 8 characters, include an uppercase letter and a number ❌");
      return;
    }

    try {
      await Auth.signUp({
        username: email,
        password,
        attributes: {
          name,
          email,
        },
      });
      setMessage("Signup successful ✅ Check your email to confirm.");
    } catch (err: any) {
      console.error('[ERROR signup]', err);
      if (err.code === 'UsernameExistsException') {
        setMessage('An account with this email already exists ❌');
      } else if (err.code === 'InvalidPasswordException') {
        setMessage('Weak password ❌');
      } else {
        setMessage('Signup error ❌');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Create Account</h1>
      <input className="w-full p-2 mb-3 border rounded" placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
      <input className="w-full p-2 mb-3 border rounded" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input className="w-full p-2 mb-3 border rounded" placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <input className="w-full p-2 mb-3 border rounded" placeholder="Confirm Password" type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
      <button className="w-full p-2 bg-green-600 text-white rounded" onClick={handleSignup}>Sign Up</button>
      {message && (
        <p className="mt-4 text-sm">
          {message}{' '}
          <Link href="/confirm" className="text-blue-600 underline">
            Confirm your account
          </Link>
        </p>
      )}
    </div>
  );
}
