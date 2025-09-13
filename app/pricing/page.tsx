"use client";
import { useState, useEffect } from 'react';

const plans = [
  { id: 'basic', name: 'Basic', price: 10, description: 'Essential features' },
  { id: 'pro', name: 'Pro', price: 20, description: 'Advanced features' },
];

export default function PricingPage() {
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    const storedSubscription = localStorage.getItem('subscription');
    if (storedSubscription) {
      setSubscription(JSON.parse(storedSubscription));
    }
  }, []);

  const subscribe = (planId) => {
    localStorage.setItem('subscription', JSON.stringify({ plan: planId }));
    setSubscription({ plan: planId });
    alert(`Subscribed to ${planId}!`);
  };

  const unsubscribe = () => {
    localStorage.removeItem('subscription');
    setSubscription(null);
    alert('Unsubscribed!');
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">Pricing</h1>
      <p className="mb-5">Choose a subscription plan that fits your needs.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {plans.map((plan) => (
          <div key={plan.id} className="bg-white rounded-lg shadow-md p-5">
            <h2 className="text-xl font-bold mb-2">{plan.name}</h2>
            <p className="text-gray-700 mb-3">{plan.description}</p>
            <p className="text-2xl font-bold">${plan.price}/month</p>
            {
              subscription?.plan === plan.id ? (
                <button onClick={unsubscribe} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">Unsubscribe</button>
              ) :
                (<button onClick={() => subscribe(plan.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Subscribe</button>)
            }
          </div>
        ))}
      </div>
    </div>
  );
}
