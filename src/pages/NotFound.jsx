import {Link} from 'react-router-dom'

function NotFound() {
  return(
    <div className='text-center py-20 bg-gray-800'>
      <h2 className="text-9xl font-bold text-purple-400 mb-4">
        404
      </h2>
      <p className='text-red-400 text-sm mb-6'>Page not found!</p>
      <Link to="/" className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg transition mt-6 inline-block">
  Go back Home →
</Link>
    </div>
  )
}


export default NotFound