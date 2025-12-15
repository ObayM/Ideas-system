
import Card from './Card'
import { Bot, Palette, Atom, Building2, BrainCircuit, Code2 } from 'lucide-react';

const MOCK_DATA = [
    {
        id: 1,
        title: "AI Agentic Workflows: The Shift from Features to Autonomous Systems",
        description: "The focus in enterprise AI is shifting from bolt-on features to 'autonomous workflows' and 'AI workers' that execute entire business processes, with multi-agent collaboration and self-correcting systems being the next frontier for 2026.",
        source: "IT Brief / Venture Capital Insights",
        topic: "Technology",
        date: "2 days ago",
        Icon: Bot,
        link: "https://itbrief.news/story/ai-set-to-power-autonomous-workflows-new-work-models"
    },
    {
        id: 2,
        title: "Typography That Breathes: The Rise of Kinetic and Handwritten Fonts in 2026",
        description: "Web design trends are embracing 'expressive' and 'kinetic' typography—where text moves and reacts to user input—alongside a return to raw, handwritten fonts to inject a 'human fingerprint' into digital interfaces.",
        source: "Muzli Blog / Wannathis",
        topic: "Design",
        date: "57 days ago",
        Icon: Palette,
        link: "https://muz.li/blog/web-design-trends-2026/"
    },
    {
        id: 3,
        title: "Quantinuum Launches Helios: Claimed Most Accurate Commercial Quantum Computer",
        description: "Quantinuum commercially launched the Helios quantum computer, touting it as the most accurate available system. It combines quantum AI with Nvidia technology and is being used by early testers like SoftBank and JPMorgan Chase.",
        source: "Network World / Quantinuum",
        topic: "Science",
        date: "31 days ago",
        Icon: Atom,
        link: "https://www.networkworld.com/article/4088709/top-quantum-breakthroughs-of-2025.html"
    },
    {
        id: 4,
        title: "Sustainable Urban Renewal: How 5 Big Cities are Building Green Networks",
        description: "A look at Milan, Oslo, Copenhagen, Berlin, and Amsterdam, focusing on their initiatives in creating extensive green networks, zero-emission mobility, and innovative projects like the CopenHill waste-to-energy plant.",
        source: "We Build Value Digital Magazine",
        topic: "Architecture",
        date: "2 days ago",
        Icon: Building2,
        link: "https://www.webuildvalue.com/en/facts/sustainable-cities.html"
    },
    {
        id: 5,
        title: "The Psychological Trap of Productivity Tools on Employee Morale",
        description: "HBR insights reveal that while productivity tools boost efficiency, the constant monitoring and performance metrics can lead to increased anxiety, burnout, and a decline in job satisfaction, emphasizing the need for a 'human-centered' approach.",
        source: "Harvard Business Review / Psico-Smart",
        topic: "Productivity",
        date: "286 days ago",
        Icon: BrainCircuit,
        link: "https://blogs.psico-smart.com/blog-what-are-the-unexpected-psychological-effects-of-using-productivity-an-190065"
    },
    {
        id: 6,
        title: "Rust vs. Go in 2025: Rust is 30% Faster, Go Compiles Quicker",
        description: "Recent benchmarks confirm that optimized Rust code runs at least 30% faster than Go due to zero-cost abstractions, but Go maintains a significant lead in compilation speed, making it the choice for faster prototyping and iteration.",
        source: "Netguru / Evrone",
        topic: "Coding",
        date: "153 days ago",
        Icon: Code2,
        link: "https://www.netguru.com/blog/golang-vs-rust"
    }
];

export default function Feed() {
    return(
    <div className="min-h-screen  bg-neutral-900 text-white p-8" >
        <header className='mb-12 flex items-center justify-between max-w-7xl mx-auto'>

            <div>
                <h1 className="text-3xl font-bold bg-linear-to-r
                 from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                    Your Daily Feed
                </h1>

                <p className="text-neutral-400 mt-1">Cool ideas and inspiration for you!</p>
            </div>

            <div className="flex gap-4">
                {/* will implement this soon(tm) */}
                <button className="px-4 py-2 bg-neutral-800 rounded-full text-sm font-medium hover:bg-neutral-700 transition-colors">
                    Customize
                </button>
            </div>

        </header>

         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MOCK_DATA.map((item) => (
                    <Card key={item.id} item={item} />
                ))}
        </div>

    </div>
    )
}