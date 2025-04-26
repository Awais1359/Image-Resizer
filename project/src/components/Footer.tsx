import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Heart, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-8 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2">
              <Image className="h-6 w-6 text-blue-600" />
              <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ResizeHub
              </span>
            </Link>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              Easily resize, compress, and convert your images with our free online tool. 
              Maintain the quality while reducing file size for your website, social media, 
              or any other purpose.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link 
                  to="/"
                  className="text-gray-600 hover:text-blue-600 transition duration-150"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about"
                  className="text-gray-600 hover:text-blue-600 transition duration-150"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy"
                  className="text-gray-600 hover:text-blue-600 transition duration-150"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Connect With Us
            </h3>
            <ul className="mt-4 space-y-2 flex flex-col">
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-blue-600 transition duration-150 flex items-center"
                >
                  <Github className="h-4 w-4 mr-2" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition duration-150 flex items-center"
                >
                  <Heart className="h-4 w-4 mr-2" />
                  <span>Support</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            &copy; {currentYear} ResizeHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;