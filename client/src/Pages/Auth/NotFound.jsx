import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved. Please check the URL or return to the homepage.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Go Back Home
      </Link>
    </div>
    </div>
  )
}

export default NotFound;
