'use client';
import { useState } from 'react';
import { Auth } from 'aws-amplify';
import Link from 'next/link';

export default function Inscription() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setMessage("Les mots de passe ne correspondent pas ❌");
      return;
    }

    const isPasswordValid = /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
    if (!isPasswordValid) {
      setMessage("Le mot de passe doit contenir au moins 8 caractères, une majuscule et un chiffre ❌");
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
      setMessage("Inscription réussie ✅ Veuillez vérifier votre boîte mail (Lughati) pour confirmer.");
    } catch (err: any) {
      console.error('[ERROR signup]', err);
      if (err.code === 'UsernameExistsException') {
        setMessage('Un compte avec cet email existe déjà ❌');
      } else if (err.code === 'InvalidPasswordException') {
        setMessage("Mot de passe trop faible ❌");
      } else {
        setMessage("Erreur d'inscription ❌");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Créer un compte</h1>
      <input className="w-full p-2 mb-3 border rounded" placeholder="Nom complet" onChange={(e) => setName(e.target.value)} />
      <input className="w-full p-2 mb-3 border rounded" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input className="w-full p-2 mb-3 border rounded" placeholder="Mot de passe" type="password" onChange={(e) => setPassword(e.target.value)} />
      <input className="w-full p-2 mb-3 border rounded" placeholder="Confirmer le mot de passe" type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
      <button className="w-full p-2 bg-green-600 text-white rounded" onClick={handleSignup}>S'inscrire</button>
      {message && (
        <p className="mt-4 text-sm">
          {message}{' '}
          <Link href="/confirmation" className="text-blue-600 underline">
            Confirmer votre compte
          </Link>
        </p>
      )}
    </div>
}
