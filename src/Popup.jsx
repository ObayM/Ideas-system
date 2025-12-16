import React, { useState } from 'react';
import { Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';

export default function Popup() {
  const [problem, setProblem] = useState('');
  const [solution, setSolution] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (problem.trim() && solution.trim()) {
      const newIdea = {
        id: crypto.randomUUID(),
        problem,
        solution,
        createdAt: new Date().toISOString(),
        status: 'active'
      };

      const savedIdeas = JSON.parse(localStorage.getItem('user_ideas') || '[]');
      const updatedIdeas = [newIdea, ...savedIdeas];
      localStorage.setItem('user_ideas', JSON.stringify(updatedIdeas));

      setProblem('');
      setSolution('');
      setShowSuccess(true);

      setTimeout(() => setShowSuccess(false), 2000);
    }
  };

  if (showSuccess) {
    return (
      <div className="w-[400px] h-[500px] bg-neutral-900 text-white flex flex-col items-center justify-center p-8 text-center">
        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="text-green-500" size={32} />
        </div>
        <h2 className="text-2xl font-bold mb-2">Idea Saved!</h2>
        <p className="text-neutral-400">Your idea has been added to your dashboard.</p>
      </div>
    );
  }

  return (
    <div className="w-[400px] h-[500px] bg-neutral-900 text-white flex flex-col">
      <div className="p-6 border-b border-neutral-800">
        <div className="flex items-center gap-3">
          
          <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
            <Lightbulb className="text-blue-400" size={20} />
          </div>
          <div>
            <h1 className="text-lg font-bold">New Idea</h1>
            <p className="text-neutral-400 text-xs">Write your next big thing!</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grow p-6 flex flex-col gap-4 overflow-y-auto">

        <div className="space-y-2">
          <label className="text-xs font-medium text-neutral-300 ml-1 uppercase tracking-wider">The Problem</label>
          <textarea
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            placeholder="What is the pain?"
            className="w-full h-24 bg-neutral-800/50 border border-neutral-700 rounded-xl p-3 text-sm text-white placeholder-neutral-500 
            focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none transition-all resize-none"
            
            required
          />
        </div>


        <div className="space-y-2">
          <label className="text-xs font-medium text-neutral-300 ml-1 uppercase tracking-wider">The Solution</label>
          <textarea
            value={solution}
            onChange={(e) => setSolution(e.target.value)}
            placeholder="What is the invention?"
            className="w-full h-24 bg-neutral-800/50 border border-neutral-700 rounded-xl p-3 text-sm text-white placeholder-neutral-500 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 outline-none transition-all resize-none"
            required
          />
        </div>

        <div className="mt-auto pt-2">
          <button
            type="submit"
            className="group w-full flex items-center justify-center gap-2 px-6 py-3 bg-white
             text-black rounded-xl font-bold hover:bg-blue-50 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Save Idea
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </form>
    </div>
  );
}