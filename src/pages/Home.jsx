import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className='min-h-screen flex flex-col justify-center py-20'>

<div className='mb-6 text-purple-400 text-sm font-medium tracking-widest uppercase'>
  Available for freelance work
</div>

    <h1 className='text-6xl font-bold text-white mb-4 leading-tight'>
      Hi, I'm<span className='text-purple-400'> Sasha </span>👋
    </h1>
    <p className='text-2xl text-gray-400 mb-6'>
      Frontend Developer & Marketer
    </p>

    <p className='text-gray-500 text-lg max-w-xl mb-10 leading-relaxed'>
      I build fast, clean websites that convert visitors into customers.
      Based in Erfurt, Germany.
    </p>


    <div className='flex gap-4 mb-16'>
      <Link
      to="/projects"
      className='bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rrounded-lg font-semibold transition-all duration-200 hover:-translate-y-1'>
        See my work →
      </Link>
      <Link 
      to='/about'
      className='border border-gray-600 hover:border-purple-400 text-gray-300 hover:text-purple-400 px-8 py-3 rounded-lg font-semibold transition-all duration-200'>
        About me
      </Link>
    </div>
      
    <div className='flex flex-wrap gap-3'>
      {['HTML', 'CSS','JavaScript','React','Tailwind CSS','Figma',].map(skill => (
        <span
        key={skill}
        className='bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm border-gray-700'>
          {skill}
        </span>
      ))}
    </div>
    </div>
  )
}

export default Home