import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setSubmitted(true)
  }


  return (
    <div className="py-20">
      <div className="mb-2 text-purple-400 text-sm font-medium tracking-widest uppercase">Get in touch</div>
      <h1 className="text-5xl font-bold text-white mb-4">Contact</h1>
      <p className="text-gray-400 text-lg mb-12 max-w-xl">
        Have a project in mind or just want to say hi? Fill out the form below.
      </p>

      <form className="max-w-lg flex flex-col gap-6"
      onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400">Name</label>
          <input
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400">Email</label>
          <input
            type="email"
            placeholder="your@email.com"
             value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400">Message</label>
          <textarea
            rows={5}
            placeholder="What's on your mind?"
             value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition resize-none"
          />
        </div>

        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg font-medium transition"
        >
          Send Message
        </button>
      </form>
      {submitted && (
  <p className="mt-6 text-green-400 font-medium">
    ✅ Message sent! I'll get back to you soon.
  </p>
)}
    </div>
  )
}

export default Contact