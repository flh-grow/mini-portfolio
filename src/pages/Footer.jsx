import { useContext, useState } from "react"
import { MyInfo } from '../context/MyInfo'


function Footer() {
  const {name, email, github} = useContext(MyInfo)
  const [copied, setCopied] = useState(false)


  function handleCopy() {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000);
  }


  return (
    <footer className="border-t border-gray-800 mt-20 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          © 2026 {name}. Built with React & Tailwind.
        </p>
      <div className="flex gap-6">
        <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="text-gray-500 hover:text-white text-sm transition">
          Github
        </a>
        <button onClick={handleCopy} className="text-gray-500 hover:text-white text-sm transition">
            {copied ? 'Copied! ✅' : 'Email'}
            </button>
      </div>
    </div>
    </footer>
  )
}

export default Footer