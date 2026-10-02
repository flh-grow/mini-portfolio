import { useState, useEffect } from 'react'

const projectsData = [
  {
    title: 'GrowFast',
    desc: 'Marketing landing page built to convert visitors into leads.',
    url: 'https://remarkable-parfait-861345.netlify.app/',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Dashboard',
    desc: 'Personal analytics dashboard with live data visualization.',
    url: 'https://guileless-cocada-be4dd4.netlify.app/',
    tags: ['React', 'Tailwind'],
  },
  {
    title: 'Portfolio',
    desc: 'My developer portfolio — the one you\'re looking at right now.',
    url: 'https://lucent-arithmetic-27d0d6.netlify.app/',
    tags: ['React', 'Tailwind', 'Netlify'],
  },
]

const allTags =['All', 'HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Netlify']

function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeTag, setActiveTag] = useState('All')

  useEffect(() => {
    async function loadProjects() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setProjects(projectsData)
        setLoading(false)
      } catch (err) {
        setError('Something went wrong 😢')
        setLoading(false)
      }
    }
    loadProjects()
  }, [])


  const filtered = activeTag === 'All'
  ? projects
  : projects.filter((project) => project.tags.includes(activeTag))


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
        {filtered.map((project) => (
          <div
            key={project.title}
            className="flex flex-col rounded-2xl border border-gray-800 bg-gray-900 hover:border-purple-600 transition-all duration-300 overflow-hidden"
          >
            <div className="h-1 bg-purple-600" />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 flex-1">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">
                    {tag}
                  </span>
                ))}
              </div>
              
                <a href={project.url}
                target="_blank"
                rel="noreferrer"
                className="inline-block text-center bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg text-sm transition"
              >
                View Live →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects