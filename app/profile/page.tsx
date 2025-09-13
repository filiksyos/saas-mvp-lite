"use client";
import { useState, useEffect } from 'react';

const mockProfile = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  occupation: 'Software Engineer',
};

export default function ProfilePage() {
  const [profile, setProfile] = useState(mockProfile);
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    const storedSubscription = localStorage.getItem('subscription');
    if (storedSubscription) {
      setSubscription(JSON.parse(storedSubscription));
    }
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">Profile</h1>

      <div className="bg-white rounded-lg shadow-md p-5">
        <h2 className="text-xl font-bold mb-2">User Information</h2>
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Occupation:</strong> {profile.occupation}</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-5 mt-5">
        <h2 className="text-xl font-bold mb-2">Subscription Status</h2>
        {
          subscription ? (
            <p>You are subscribed to the <strong>{subscription.plan}</strong> plan.</p>
          ) : (
            <p>You are not subscribed to any plan.</p>
          )
        }
      </div>
    </div>
  );
}
