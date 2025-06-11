'use client';
import { useState } from 'react';
import { Auth } from 'aws-amplify';

export default function Connexion() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      await Auth.signIn(email, password);
      setMessage('Connexion réussie ✅');
    } catch (err: any) {
      console.error('[ERROR login]', err);
      if (err.code === 'UserNotFoundException') {
        setMessage("Aucun compte trouvé avec cet email ❌");
      } else if (err.code === 'NotAuthorizedException') {
        setMessage("Mot de passe incorrect ❌");
      } else if (err.code === 'UserNotConfirmedException') {
        setMessage("Compte non confirmé ❗ Veuillez vérifier votre email.");
      } else {
        setMessage("Erreur de connexion ❌");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Connexion</h1>
      <input className="w-full p-2 mb-3 border rounded" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input className="w-full p-2 mb-3 border rounded" placeholder="Mot de passe" type="password" onChange={(e) => setPassword(e.target.value)} />
      <button className="w-full p-2 bg-blue-600 text-white rounded" onClick={handleLogin}>Se connecter</button>
      {message && <p className="mt-4 text-sm">{message}</p>}
    </div>
  );
}