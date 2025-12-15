import { ExternalLink, Clock } from "lucide-react"

export default function Card({ item }) {
    const { Icon } = item;

    return (
        <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-neutral-800/30 border border-neutral-700/50 rounded-2xl p-6
                 hover:bg-neutral-800/50 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-400/10 
                 transition-all duration-300 ease-out flex flex-col h-full backdrop-blur-sm"
        >
            <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-neutral-800 rouned-xl border border-neutral-700 group-hover:border-blue-500/30 
                group-hover:bg-blue-500/10 transition-colors duration-300">

                    <Icon size={24} className="text-neutral-400 group-hover:text-blue-400 transition-colors duration-300" />

                </div>

                <span className=" text-neutral-400 px-3 py-1 bg-neutral-800/50 border border-neutral-700/50 rounded-full 
                text-xs tracking-wider group-hover:border-neutral-600 transition-colors">
                    {item.topic}
                </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                {item.title}
            </h3>

           <p className="text-sm text-neutral-400 line-clamp-3 mb-6 grow leading-relaxed">
                {item.description}
           </p>

           <div className="flex items-center justify-between pt-4 border-t border-white/7 mt-auto">
                <div className="flex items-center gap-2 text-xs pt-2">
                    <span className="text-blue-400/40">
                        {item.source}
                    </span>

                    <div className="flex items-center gap-1 text-neutral-500">
                        <Clock  size={12}/>
                        <span> {item.date}</span>
                    </div>
                </div>

                  <div className="text-neutral-600 group-hover:text-white 
                  transition-colors transform group-hover:translate-x-1 duration-300">
                    <ExternalLink size={16} />
                </div>
           </div>

        </a>
    )
}

