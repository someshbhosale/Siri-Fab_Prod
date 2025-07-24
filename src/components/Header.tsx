import { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png'; // Adjust the path as necessary
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { state } = useCart();

  const navigation = [
    { name: 'Products', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Franchise', href: '/franchise' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-background border-b border-light-gray shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Siri Fab Logo" className="h-12" />
            {/* Uncomment below if you want both logo and gradient text */}
            <div className="ml-2 text-2xl font-myFont bg-gradient-to-r from-royal-purple to-gold bg-clip-text text-transparent">
              Siri Fab
            </div>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href) 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Cart Icon */}
          <div className="flex items-center">
            <Link to="/cart">
              <Button variant="ghost" size="sm" className="relative p-2">
                <ShoppingBag className="h-6 w-6" />
                {state.itemCount > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs"
                  >
                    {state.itemCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden ml-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-light-gray">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary hover:bg-accent rounded-md ${
                    isActive(item.href) ? 'text-primary bg-accent' : 'text-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;