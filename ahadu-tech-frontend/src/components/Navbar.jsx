import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              አሐዱ Tech
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition">About Us</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium transition">Services</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition">Contact</Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link to="/services" className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition">
              Order Now
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}