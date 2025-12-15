
import  { useState, useEffect } from 'react';
import Onboarding from './components/Onboarding';

function NewTab() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const topics = localStorage.getItem('user_topics');

    if (!topics) {
      setShowOnboarding(true);
    }

    setLoading(false);

  }, []);

  const handleOnboardingComplete = () => {

    setShowOnboarding(false);
  };

  if (loading){
    return (
      <div className='min-h-screen flex items-center justify-center text-2xl'>
        Loading!
      </div>
    );
  };

  if (showOnboarding) {
    return (
      <Onboarding onComplete={handleOnboardingComplete} />
    );

  }

  return (
    <div className="min-h-screen bg-neutral-900 text-white p-8">
      <h1 className="text-3xl font-bold">Your feed</h1>
      <p className="mt-4 text-neutral-400">Feed content coming soon(tm)...</p>
    </div>
  );
}

export default NewTab;