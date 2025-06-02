'use client';
import { useState } from 'react';

export default function Instructeur() {
  const [title, setTitle] = useState('');
  const [language, setLanguage] = useState('');
  const [level, setLevel] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    setMessage('⏳ Envoi...');
    try {
      const res = await fetch('https://api.example.com/courses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, language, level, description })
      });
      if (!res.ok) throw new Error();
      setMessage('✅ Cours ajouté');
    } catch {
      setMessage('❌ Erreur');
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">👩‍🏫 Ajouter un cours</h2>
      <input type="text" placeholder="Titre" value={title} onChange={(e) => setTitle(e.target.value)} className="input mb-2" />
      <input type="text" placeholder="Langue" value={language} onChange={(e) => setLanguage(e.target.value)} className="input mb-2" />
      <input type="text" placeholder="Niveau" value={level} onChange={(e) => setLevel(e.target.value)} className="input mb-2" />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="input mb-2" />
      <button onClick={handleSubmit} className="btn-primary">Ajouter</button>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
}
