function ProjectCard({ title, desc, url, tags }) {
  return (
    <div className="flex flex-col rounded-2xl border border-gray-800 bg-gray-900 hover:border-purple-600 transition-all duration-300 overflow-hidden">
      <div className="h-1 bg-purple-600" />
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 flex-1">{desc}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span key={tag} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">
              {tag}
            </span>
          ))}
        </div>
        <a href={url} target="_blank" rel="noreferrer"
          className="inline-block text-center bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg text-sm transition">
          View Live →
        </a>
      </div>
    </div>
  )
}

export default ProjectCard