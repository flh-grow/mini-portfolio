import { useContext } from "react"
import { MyInfo } from '../context/MyInfo'





function About() {
     const {name, email, github, location} = useContext(MyInfo)

  return (
    <div className="text-center py-20 max-w-3xl">
      <div className="mb-2 text-purple-400 text-sm font-medium tracking-widest uppercase">
        About Me 
      </div>
      <h1 className="text-5xl font-bold text-white mb-6">
         A little bit about my background and what I'm building towards.
      </h1>

      <div className="space-y-4 text-gray-400 text-lg leading-relaxed mb-10">
      <p>
        My name is {name}. I'm a 22-year-old frontend developer and marketer based in {location}. 
        I started learning to code because I wanted to build things that actually work — 
         not just look good on paper.
      </p>
       <p>
          I combine clean frontend development with conversion-focused marketing thinking. 
          That means I don't just build websites — I build websites that turn visitors into customers.
        </p>
        <p>
          Right now I'm available for freelance projects. If you need a landing page, 
          a portfolio, or a small web app — let's talk.
        </p>
      </div>

    <div className="grid grid-cols-2 gap-4 mb-12">
      {[
        { label: 'Location', value: `${location} 🇩🇪`},
        { label: 'Age', value: '22' },
        { label: 'Focus', value: 'Frontend + Marketing' },
        { label: 'Status', value: '✅ Available for work' },
      ].map(({label, value }) => (
        <div key={label} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">{label}</div>
          <div className="text-white font-semibold">{value}</div>
        </div>
      ))}
    </div>

      <a href={`mailto:${email}`} className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:-translate-y-1">
        Get in touch →
      </a>
    </div>
  )
}

export default About