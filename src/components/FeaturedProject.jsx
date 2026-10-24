import { featured } from '../data/featured'

function FeaturedProject() {
  return (
    <section className="mb-20 rounded-2xl border border-purple-600/40 bg-gray-900 overflow-hidden">
      <div className="grid md:grid-cols-2">

        {/* LEFT: screenshot */}
        <img
          src={featured.image}
          alt={`Screenshot of ${featured.title}`}
          className="w-full h-full object-cover"
        />

        {/* RIGHT: content */}
        <div className="p-8 flex flex-col">
          <span className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-2">
            ⭐ Featured Project
          </span>
          <h2 className="text-3xl font-bold text-white mb-1">{featured.title}</h2>
          <p className="text-gray-400 mb-6">{featured.subtitle}</p>

          <p className="text-gray-300 text-sm mb-3">
            <span className="text-white font-semibold">Problem: </span>{featured.problem}
          </p>
          <p className="text-gray-300 text-sm mb-3">
            <span className="text-white font-semibold">Solution: </span>{featured.solution}
          </p>

          {/* Scores */}
          <div className="grid grid-cols-4 gap-2 my-6">
            {featured.scores.map((score) => (
              <div key={score.label} className="text-center rounded-lg bg-gray-800 py-3">
                <div className="text-2xl font-bold text-green-400">{score.value}</div>
                <div className="text-[10px] text-gray-400 uppercase">{score.label}</div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {featured.tags.map((tag) => (
              <span key={tag} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-auto">
            <a href={featured.live} target="_blank" rel="noreferrer"
              className="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2 rounded-lg text-sm transition">
              View Live →
            </a>
            <a href={featured.github} target="_blank" rel="noreferrer"
              className="border border-gray-700 hover:border-gray-500 text-gray-300 px-5 py-2 rounded-lg text-sm transition">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProject