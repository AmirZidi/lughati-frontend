'use client';
import { useState } from 'react';
import { Auth } from 'aws-amplify';
import Link from 'next/link';

export default function Confirm() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');

  const handleConfirm = async () => {
    try {
      await Auth.confirmSignUp(email, code);
      setMessage('Account confirmed ✅ You can now log in.');
    } catch (err: any) {
      console.error('[ERROR confirmSignUp]', err);
      setMessage('Confirmation failed ❌');
    }
  };

  const handleResend = async () => {
    try {
      await Auth.resendSignUp(email);
      setMessage('Confirmation code resent ✅ Check your email.');
    } catch (err: any) {
      console.error('[ERROR resendSignUp]', err);
      setMessage('Error resending code ❌');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Confirm Account</h1>
      <input
        className="w-full p-2 mb-3 border rounded"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="w-full p-2 mb-3 border rounded"
        placeholder="Confirmation Code"
        onChange={(e) => setCode(e.target.value)}
      />
      <button
        className="w-full p-2 bg-green-600 text-white rounded mb-2"
        onClick={handleConfirm}
      >
        Confirm
      </button>
      <button
        className="w-full p-2 bg-gray-200 text-black rounded"
        onClick={handleResend}
      >
        Resend Code
      </button>
      {message && <p className="mt-4 text-sm">{message}</p>}
      <p className="mt-4 text-sm">
        <Link href="/login" className="text-blue-600 underline">
          Go to login
        </Link>
      </p>
    </div>
  );
}
