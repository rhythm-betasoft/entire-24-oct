import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">


        <div className="text-2xl font-semibold whitespace-nowrap dark:text-white">
          Website
        </div>

        <ul className="hidden md:flex space-x-8 font-medium">
          <li>
            <Link to="/" className="text-blue-700 dark:text-blue-500">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500">About</Link>
          </li>
          <li>
            <Link to="/Register" className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500">Register</Link>
          </li>
          <li>
            <Link to="/ToDo" className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500">ToDo</Link>
          </li>
             <li>
            <Link to="/Products" className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500">Products</Link>
          </li>

</ul>




      </div>
    </nav>
  );
}

export default Navbar;
