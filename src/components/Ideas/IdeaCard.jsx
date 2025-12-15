export default function IdeaCard({ idea }) {
    return(
        <div className="flex flex-col h-full group relative bg-neutral-900 border border-neutral-900 rounded-2xl
            p-6 hover:border-blue-500/30 transition-all duration-300
        ">
           

            <div className="mb-4 absolute right-10">

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border
                 border-blue-500/20 text-blue-400 text-xs font-medium mb-3 ">
                    <span>Active Idea</span>
                </div>

            </div>

            <div className="space-y-3 mb-6 grow">
                <div>
                    <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Problem</span>
                    <p className="text-sm text-neutral-300 line-calmp-2 mt-1">{idea.problem}</p>
                </div>

                <div>
                    <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">solution</span>
                    <p className="text-sm text-neutral-300 line-calmp-2 mt-1">{idea.solution}</p>
                </div>

            </div>
            <a  className="text-white text-center text-sm font-medium rounded-xl w-full py-2.5 bg-neutral-800 hover:bg-neutral-700
                            cursor-pointer transition-colors border border-neutral-700/50">
                Open Idea
            </a>

        </div>
    )
}