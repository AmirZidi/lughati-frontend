'use client';
import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import StudentProfile from '../../components/StudentProfile';
import InstructorProfile from '../../components/InstructorProfile';

export default function ProfilePage() {
  const [user, setUser] = useState<any | null>(undefined);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((u) => setUser(u))
      .catch(() => setUser(null));
  }, []);

  if (user === undefined) return <p>Loading...</p>;
  if (user === null) return <p>Not authenticated</p>;

  const role = user.attributes['custom:role'];
  return role === 'instructor' ? (
    <InstructorProfile user={user} />
  ) : (
    <StudentProfile user={user} />
  );
}
