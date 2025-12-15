import { Lightbulb, X, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function CreateIdeaModal({onClose, isOpen, onSave}) {
    const [problem, setProblem] = useState('');
    const [solution, setSolution] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (problem.trim() && solution.trim()){
            onSave({problem, solution})
            setProblem('');
            setSolution('');
            onClose();
        }
    }

    return (
        <div className="flex items-center justify-center p-4 fixed inset-0 z-67">

           <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />
                <div className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-3xl
                                shadow-2xl overflow-hidden transform transition-all">

                    <div className="p-8">

                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3">

                                <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                                    <Lightbulb className="text-blue-500" size={24} />

                                </div>
                                <div>
                                    <h2 className="text-2xl text-white font-bold"> New Idea </h2>
                                    <p className="text-neutral-500 text-sm">Write your next big thing!</p>

                                </div>

                            </div>

                            <button
                               onClick={onClose}
                               className="p-2 text-neutral-500 hover:text-white hover:bg-neutral-800 rounded-full transition-colors"
                            >
                                <X size={17} />
                            </button>



                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-neutral-500 ml-2">The problem</label>

                                <textarea value={problem} 
                                    onChange={(e) => setProblem(e.target.value)}
                                    placeholder="What is the pain?"
                                    className="w-full h-32 bg-neutral-800/50 border border-neutral-700 rounded-xl 
                                            text-white placeholder-neutral-500 outline-none p-4
                                             focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all resize-none"
                                    required
                                />

                            </div>

                             <div className="space-y-2">
                                <label className="text-sm font-medium text-neutral-500 ml-1">The Solution</label>

                                <textarea value={solution} 
                                    onChange={(e) => setSolution(e.target.value)}
                                    placeholder="What is the invention?"
                                    className="w-full h-32 bg-neutral-800/50 border border-neutral-700 rounded-xl 
                                            text-white placeholder-neutral-500 outline-none p-4
                                             focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all resize-none"
                                    required
                                />

                            </div>


                            <div className="pt-4 flex justify-end">
                                <button
                                   type="submit"
                                   className="group flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full
                                    cursor-pointer font-bold hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all"

                                >
                                    Save Idea
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />

                                </button>
                            </div>
                        </form>


                    </div>
                </div>
            </div>

    )
}