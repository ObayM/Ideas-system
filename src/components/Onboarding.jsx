import { useState } from "react";

import {
    Brain,
    Globe,
    Atom,
    Gamepad2,
    Cloud,
    Shield,
    Database,
    Smartphone,
    Rocket,
    Rss,
    CircuitBoard,
    Palette
} from "lucide-react"

const TOPICS = [
    {
        id:"ai-ml", lable:"AI/ML", icon: Brain
    },
    {
        id:"webdev", lable:"Web Development", icon: Globe 
    },
    {
        id:"quantum-copmuting", lable:"Quantum Computing", icon: Atom
    },
    {
        id:"game-dev", lable:"Game Development", icon: Gamepad2
    },
    {
        id:"devops", lable:"DevOps", icon: Cloud
    },
    {
        id:"cyber-security", lable:"Cyber Security", icon: Shield
    },
    {
        id:"data-science", lable:"Data Science", icon: Database
    },
    {
        id:"mobile-dev", lable:"Mobile Development", icon: Smartphone
    },
    {
        id:"aerospace-software", lable:"Aerospace Software", icon: Rocket
    },
    {
        id:"embedded-systems", lable:"Embedded Systems", icon: CircuitBoard
    },
    {
        id:"blockchain", lable:"Blockchain/Web3", icon: Rss 
    },
    {
        id:"ui-ux", lable:"UI/UX Design", icon: Palette
    }
]


export default function Onboarding({ onComplete }) {
    
    const [selectedTopics, setSelectedTopics] = useState([]);

    const toggleTopic = (id) => {
        setSelectedTopics((prev) =>
            prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
        );
    };

    const handleContinue = () => {
        if (selectedTopics.length > 0) {
            localStorage.setItem('user_topics', JSON.stringify(selectedTopics));
            onComplete();
        };
    }

    return (
        <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center p-8">
            <div className="max-w-4xl w-full space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-xl font-bold tracking-tight bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Welcome to Untitled  {/* name should go here but too lazy to think of one rn  */}
                    </h1>

                    <p className="text-xl text-neutral-400">
                        Select a few topics to personalize your daily inspiration!
                    </p>

                </div>

                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {TOPICS.map((topic) => (
                        <button
                            key={topic.id}
                            onClick={() => toggleTopic(topic.id)}
                            className=
                            {`
                            group relative p-6 rounded-2xl border-2 transition-all duration-300 ease-out
                            flex flex-col items-center justify-center gap-3
                            hover:scale-105 hover:shadow-xl
                            ${selectedTopics.includes(topic.id)
                            ? 'border-blue-500 bg-blue-500/10 shadow-blue-500/20'
                            : 'border-neutral-800 bg-neutral-800/50 hover:border-neutral-600 hover:bg-neutral-800'
                            }
                            `}
                        >
                            <span className="text-4xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                                  <topic.icon />

                            </span>

                            <span
                                className={`font-medium tracking-wide ${selectedTopics.includes(topic.id)
                                        ? 'text-blue-400'
                                        : 'text-neutral-300 group-hover:text-white'
                                    }`}
                            >
                                {topic.lable}
                            </span>

                            {selectedTopics.includes(topic.id) && (
                                <div className="absolute top-3 right-3 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                            )}
                            
                        </button>
                    ))}
                </div>

                <div className="flex justify-center pt-8">

                    <button
                        onClick={handleContinue}
                        disabled={selectedTopics.length === 0}
                        className=
                        {`
                        px-12 py-4 rounded-full font-bold text-lg tracking-wide transition-all duration-300
                        ${selectedTopics.length > 0
                        ? 'bg-slate-50 text-black hover:bg-blue-50 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] cursor-pointer'
                        : 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
                        }
                        `}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}
