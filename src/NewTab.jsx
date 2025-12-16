
import  { useState, useEffect } from 'react';
import Onboarding from './components/Onboarding';
import Feed from './components/Feed/index';

import { Plus } from 'lucide-react';
import CreateIdeaModal from './components/Ideas/CreateIdeaModal';
import IdeaCard from './components/Ideas/IdeaCard';
import IdeaPage from './components/Ideas/IdeaPage';


function NewTab() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ideas, setIdeas] = useState([]);
  const [activeIdeaId, setActiveIdeaId] = useState(null);

  useEffect(() => {

    const topics = localStorage.getItem('user_topics');

    if (!topics) {
      setShowOnboarding(true);
    }

    const savedIdeas = JSON.parse(localStorage.getItem('user_ideas') || '[]');

    setIdeas(savedIdeas);
    setLoading(false);

  }, []);

  const handleOnboardingComplete = () => {

    setShowOnboarding(false);
  };

  const handleSaveIdea = (newIdea) => {
    const ideaData = {
      ...newIdea,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      status: "active"
    };

    const CompleteIdeas = [ideaData, ...ideas]; // trying my best to make it clean :pf
    setIdeas(CompleteIdeas);

    localStorage.setItem('user_ideas', JSON.stringify(CompleteIdeas));
  }

  const handleUpdateIdea = (updatedIdea) => {

    const updatedIdeas = ideas.map(idea =>
      idea.id === updatedIdea.id ? updatedIdea : idea
    );

    setIdeas(updatedIdeas);
    localStorage.setItem('user_ideas', JSON.stringify(updatedIdeas));
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
  
  if (activeIdeaId) {
    const activeIdea = ideas.find(i => i.id === activeIdeaId);
    if (activeIdea) {
      return (
        <IdeaPage
          idea={activeIdea}
          onBack={() => setActiveIdeaId(null)}
          onUpdate={handleUpdateIdea}
        />
      );
    }
  }


  return (
    <div className='min-h-screen bg-neutral-900 text-white'>

      <div className="max-w-7xl mx-auto px-8 pt-8 flex justify-end">
        <button
          onClick={() => setIsModalOpen(true)}
          className='flex items-center text-black bg-slate-50 gap-2 px-6 py-3 rounded-full font-bold cursor-pointer
                    hover:bg-blue-50 hover:scale-105 shadow-lg shadow-white/10 transition-all
          '
        >
          <Plus size={17} />
          Create Idea
        </button>
      </div>

      {ideas.length > 0 &&(
        <div className="max-w-7xl mx-auto px-8 py-8">
          <h2 className="text-xl font-bold text-neutral-400 mb-6 uppercase">
            Active Ideas
          </h2>

          <div className='grid grid-cols gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {ideas.slice(0, 3).map((idea) => (
              <div key={idea.id} onClick={() => setActiveIdeaId(idea.id)}>
                <IdeaCard idea={idea} />
              </div>
            ))}
          </div>

        </div>
      )}
      
      <Feed />

      <CreateIdeaModal 
        isOpen={isModalOpen}
        onClose={()=> setIsModalOpen(false)}
        onSave={handleSaveIdea}
        />

    </div>
  );
}

export default NewTab;