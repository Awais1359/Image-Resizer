import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Image } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
    if (path === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => handleNavigation('/')} 
            className="flex items-center space-x-2"
          >
            <Image className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ResizeHub
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink 
              onClick={() => handleNavigation('/')} 
              current={location.pathname === "/"}
            >
              Home
            </NavLink>
            <NavLink 
              onClick={() => handleNavigation('/about')} 
              current={location.pathname === "/about"}
            >
              About
            </NavLink>
            <NavLink 
              onClick={() => handleNavigation('/privacy')} 
              current={location.pathname === "/privacy"}
            >
              Privacy Policy
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          <div className="container mx-auto px-4 py-3 space-y-1">
            <MobileNavLink onClick={() => handleNavigation('/')}>
              Home
            </MobileNavLink>
            <MobileNavLink onClick={() => handleNavigation('/about')}>
              About
            </MobileNavLink>
            <MobileNavLink onClick={() => handleNavigation('/privacy')}>
              Privacy Policy
            </MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

type NavLinkProps = {
  onClick: () => void;
  children: React.ReactNode;
  current: boolean;
};

const NavLink: React.FC<NavLinkProps> = ({ onClick, children, current }) => {
  return (
    <button
      onClick={onClick}
      className={`relative font-medium transition-colors duration-300 
        ${current 
          ? 'text-blue-600' 
          : 'text-gray-700 hover:text-blue-600'
        }
        after:content-[''] after:absolute after:left-0 after:bottom-[-4px] 
        after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300
        ${current ? 'after:w-full' : 'hover:after:w-full'}
      `}
    >
      {children}
    </button>
  );
};

type MobileNavLinkProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition duration-150"
    >
      {children}
    </button>
  );
};

export default Navbar;