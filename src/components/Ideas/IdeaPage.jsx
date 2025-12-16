import { useEffect, useState } from "react";
import { ArrowLeft, BrainCircuit, Map, Search } from "lucide-react";

export default function IdeaPage({ idea, onBack, onUpdate }) {
    const [problem, setProblem] = useState(idea.problem);
    const [solution, setSolution] = useState(idea.solution);
    
    const [methodology, setMethodology] = useState(idea.methodology || "");
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (
                problem !== idea.problem ||
                solution !== idea.solution ||
                methodology !== (idea.methodology || '')
            ) {
                handleSave();
            }
        }, 1000);

        return () => clearTimeout(timer)
    }, [problem, solution, methodology])

    const handleSave = () => {
        setIsSaving(true);

        onUpdate({
            ...idea,
            problem,
            solution,
            methodology
        });
        
        setTimeout(() => setIsSaving(false), 500);

    }

    return (
        <div className="min-h-screen bg-neutral-900 text-white flex ">
            <div className="p-8 grow overflow-y-auto h-screen">
                <header className="flex justify-between items-center mb-8">

                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    >
                        <ArrowLeft size={20} />
                        Back To Dashboard
                    </button>

                    <div className="flex items-center gap-2">
                        {isSaving && 
                        <span className="text-sm text-neutral-500 animate-pulse">
                            Saving...
                        </span>
                        }

                        <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full
                                        text-blue-400 text-xs font-medium flex items-center gap-2">
                            Active Idea
                        </div>
                    </div>

                </header>

                <div className="max-w-4xl mx-auto space-y-8">
                    <section className="space-y-3">
                        <h2 className="text-sm font-bold text-neutral-500 uppercase tracking-wider 
                        flex items-center gap-2">
                            <span className="w-1 h-4 bg-red-500 rounded-full" />
                            The Problem
                        </h2>

                        <textarea
                            value={problem}
                            onChange={(e) => setProblem(e.target.value)}
                            className="w-full min-h-[120px] bg-neutral-800/30 border border-neutral-800 rounded-2xl 
                            p-6 text-lg text-white focus:bg-neutral-800/50 focus:border-red-500/30 focus:ring-1
                          focus:ring-red-500/30 outline-none transition-all resize-none leading-relaxed"
                        />
                    </section>

                   <section className="space-y-3">
                        <h2 className="text-sm font-bold text-neutral-500 uppercase tracking-wider 
                        flex items-center gap-2">
                            <span className="w-1 h-4 bg-green-500 rounded-full" />
                            The Solution
                        </h2>

                        <textarea
                            value={solution}
                            onChange={(e) => setSolution(e.target.value)}
                            className="w-full min-h-[120px] bg-neutral-800/30 border border-neutral-800 rounded-2xl 
                            p-6 text-lg text-white focus:bg-neutral-800/50 focus:border-green-500/30 focus:ring-1
                          focus:ring-green-500/30 outline-none transition-all resize-none leading-relaxed"
                        />
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-sm font-bold text-neutral-500 uppercase tracking-wider 
                        flex items-center gap-2">
                            <span className="w-1 h-4 bg-purple-500 rounded-full" />
                            The Methodology & Plan
                        </h2>

                        <textarea
                            value={methodology}
                            onChange={(e) => setMethodology(e.target.value)}
                            className="w-full min-h-[120px] bg-neutral-800/30 border border-neutral-800 rounded-2xl 
                            p-6 text-lg text-white focus:bg-neutral-800/50 focus:border-purple-500/30 focus:ring-1
                          focus:ring-purple-500/30 outline-none transition-all resize-none leading-relaxed"
                        />
                    </section>


                </div>
            </div>

            <div className="w-80 border-l border-neutral-800 bg-neutral-900/50 p-6 flex flex-col gap-6">
                    <div>
                        <h3 className="text-lg font-bold text-white mb-1">AI Tools</h3>
                        <p className="text-sm text-neutral-500">Enhance your Idea</p>
                    </div>

                    <div className="space-y-3">
                        <button className="group w-full p-4 cursor-pointer bg-neutral-800/50 hover:bg-neutral-800 border border-neutral-700/50
                        hover:border-blue-500/50 rounded-xl text-left transition-all">
                            <div className="flex items-center gap-3 mb-2">

                                <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg group-hover:text-blue-300">
                                    <BrainCircuit size={20} />
                                </div>

                                <span className="font-bold text-neutral-200 group-hover:text-white">Brainstorm</span>                            
                            </div>
                            <p className="text-xs text-neutral-500 leading-relaxed">Create similar ideas and expand your idea!</p>

                        </button>

                       <button className="group w-full cursor-pointer p-4 bg-neutral-800/50 hover:bg-neutral-800 border border-neutral-700/50
                        hover:border-blue-500/50 rounded-xl text-left transition-all">
                            <div className="flex items-center gap-3 mb-2">

                                <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg group-hover:text-blue-300">
                                    <Map size={20} />
                                </div>

                                <span className="font-bold text-neutral-200 group-hover:text-white">Roadmap</span>                            
                            </div>
                            <p className="text-xs text-neutral-500 leading-relaxed">Create a roadmap to excute your idea!</p>

                        </button>

                        <button className="group w-full p-4 cursor-pointer bg-neutral-800/50 hover:bg-neutral-800 border border-neutral-700/50
                        hover:border-blue-500/50 rounded-xl text-left transition-all">
                            <div className="flex items-center gap-3 mb-2">

                                <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg group-hover:text-blue-300">
                                    <Search size={20} />
                                </div>

                                <span className="font-bold text-neutral-200 group-hover:text-white">Research</span>                            
                            </div>
                            <p className="text-xs text-neutral-500 leading-relaxed">Research smilar solutinos!</p>

                        </button>

                    </div>


            </div>
        </div>
        )

}