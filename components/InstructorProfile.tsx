'use client';
import React from 'react';

interface InstructorProfileProps {
  user: any;
}

export default function InstructorProfile({ user }: InstructorProfileProps) {
  const { name, email } = user.attributes;
  const stats = { studentsCount: 120, coursesCount: 8, rating: 4.8 }; // TODO: fetch real data

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Hero */}
      <div className="flex items-center p-6 bg-white rounded-2xl shadow">
        <img
          src={user.attributes.picture || '/default-avatar.png'}
          className="w-24 h-24 rounded-full mr-6"
          alt="Avatar"
        />
        <div>
          <h2 className="text-3xl font-semibold">{name}</h2>
          <p className="text-sm text-gray-500">Instructeur</p>
          <div className="mt-2 flex space-x-4">
            <span className="px-2 py-1 bg-gray-100 rounded">{stats.coursesCount} cours publiés</span>
            <span className="px-2 py-1 bg-gray-100 rounded">{stats.studentsCount} étudiants</span>
            <span className="px-2 py-1 bg-gray-100 rounded">{stats.rating} ⭐</span>
          </div>
        </div>
        <div className="ml-auto space-x-2">
          <button className="px-4 py-2 border rounded">Éditer profil</button>
          <button className="px-4 py-2 border rounded">Voir mes revenus</button>
        </div>
      </div>

      {/* À propos */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="text-xl font-medium mb-2">Biographie</h3>
        <p>{user.attributes['custom:bio'] || 'Pas de bio pour le moment.'}</p>
      </div>
    </div>
  );
}
