import { useGit } from '../hooks/useGit'
import ProjectCard from '../components/ProjectCard'
import { useState } from 'react'


function Projects() {
  const { data: projects, loading, error } = useGit('https://api.github.com/users/flh-grow/repos')
  const [activeTag, setActiveTag] = useState('All')


  const filtered = activeTag === 'All'
  ? projects
  : projects.filter((repo) => repo.language === activeTag)

 const allTags = ['All', ...new Set(projects.map((repo) => repo.language).filter(Boolean))] // ['HTML', 'JavaScript', null, 'JavaScript']
                                                                                            // removes null → ['HTML', 'JavaScript', 'JavaScript']
                                                                                            // removes duplicates → {'HTML', 'JavaScript'}

  // Show skeleton while loading
  if (loading) {
    return (
      <div className="py-20">
        <div className="mb-2 text-purple-400 text-sm font-medium tracking-widest uppercase">What I've built</div>
        <h1 className="text-5xl font-bold text-white mb-12">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div key={n} className="rounded-2xl border border-gray-800 bg-gray-900 p-6 h-52 animate-pulse">
              <div className="h-4 bg-gray-700 rounded w-1/2 mb-4" />
              <div className="h-3 bg-gray-800 rounded w-3/4 mb-2" />
              <div className="h-3 bg-gray-800 rounded w-2/3" />
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Show error if something broke
  if (error) {
    return <div className="py-20 text-red-400 text-xl">{error}</div>
  }

  // Show real projects
  return (
    <div className="py-20">
      <div className="mb-2 text-purple-400 text-sm font-medium tracking-widest uppercase">What I've built</div>
      <h1 className="text-5xl font-bold text-white mb-4">Projects</h1>
      <p className="text-gray-400 text-lg mb-12 max-w-xl">
        A selection of things I've designed and built along the way.
      </p>

    <div className='flex flex-wrap gap-2 mb-10'>
      {allTags.map((tag) => (
        <button
        key={tag}
        onClick={() => setActiveTag(tag)}
        className={`px-4 py-1.5 rounded-full text-sm border transition ${activeTag  === tag  
          ? 'bg-purple-600 border-purple-600 text-white'
          : 'border-gray-700 text-gray-400 hover:border-gray-500'
            }`} >
              {tag}
            </button>
      ))}
    </div>




      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{filtered.map((repo) => (
  <ProjectCard
    key={repo.id}
    title={repo.name}
    desc={repo.description || 'No description yet.'}
    url={repo.html_url}
    tags={repo.language ? [repo.language] : []}
  />
))}
      </div>
    </div>
  )
}

export default Projects