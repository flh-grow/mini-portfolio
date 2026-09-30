function Footer() {

  return (
    <footer className="border-t border-gray-800 mt-20 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          © 2026 Sasha. Built with React & Tailwind.
        </p>
      <div className="flex gap-6">
        <a
        href="https://github.com/flh-grow"
        target="_blank"
        rel="noreferrer"
        className="text-gray-500 hover:text-white text-sm transition">
          Github
        </a>
        <a
        href="mailto:aflatcher47@gmail.com"
        className="text-gray-500 hover:text-white text-sm transition">
          Email
        </a>
      </div>
    </div>
    </footer>
  )
}

export default Footer