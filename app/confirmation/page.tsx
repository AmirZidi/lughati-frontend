'use client';
import { useState } from 'react';
import { Auth } from 'aws-amplify';
import Link from 'next/link';

export default function Confirmation() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');

  const handleConfirm = async () => {
    try {
      await Auth.confirmSignUp(email, code);
      setMessage('Compte confirmé ✅ Vous pouvez vous connecter.');
    } catch (err: any) {
      console.error('[ERROR confirmSignUp]', err);
      setMessage('Échec de la confirmation ❌');
    }
  };

  const handleResend = async () => {
    try {
      await Auth.resendSignUp(email);
      setMessage('Code de confirmation renvoyé ✅ Vérifiez votre email.');
    } catch (err: any) {
      console.error('[ERROR resendSignUp]', err);
      setMessage('Erreur de renvoi du code ❌');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Confirmation du compte</h1>
      <input
        className="w-full p-2 mb-3 border rounded"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="w-full p-2 mb-3 border rounded"
        placeholder="Code de confirmation"
        onChange={(e) => setCode(e.target.value)}
      />
      <button
        className="w-full p-2 bg-green-600 text-white rounded mb-2"
        onClick={handleConfirm}
      >
        Confirmer
      </button>
      <button
        className="w-full p-2 bg-gray-200 text-black rounded"
        onClick={handleResend}
      >
        Renvoyer le code
      </button>
      {message && <p className="mt-4 text-sm">{message}</p>}
      <p className="mt-4 text-sm">
        <Link href="/connexion" className="text-blue-600 underline">
          Aller à la connexion
        </Link>
      </p>
    </div>
  );
}
