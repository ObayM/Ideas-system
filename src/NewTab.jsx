
import  { useState, useEffect } from 'react';
import Onboarding from './components/Onboarding';
import Feed from './components/Feed/index';

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
    <>
    <Feed />
    </>
  );
}

export default NewTab;