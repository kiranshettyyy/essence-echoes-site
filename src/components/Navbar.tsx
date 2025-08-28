import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, Heart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-luxury rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">L</span>
            </div>
            <span className="text-xl font-bold bg-gradient-luxury bg-clip-text text-transparent">
              LuxeScent
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-luxury-purple transition-colors">
              Home
            </Link>
            <Link to="/fragrances" className="text-foreground hover:text-luxury-purple transition-colors">
              Fragrances
            </Link>
            <Link to="/collections" className="text-foreground hover:text-luxury-purple transition-colors">
              Collections
            </Link>
            <Link to="/about" className="text-foreground hover:text-luxury-purple transition-colors">
              About
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:bg-secondary">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-secondary">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-secondary">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-secondary relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-luxury-purple text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-foreground hover:text-luxury-purple transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/fragrances" 
                className="text-foreground hover:text-luxury-purple transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Fragrances
              </Link>
              <Link 
                to="/collections" 
                className="text-foreground hover:text-luxury-purple transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Collections
              </Link>
              <Link 
                to="/about" 
                className="text-foreground hover:text-luxury-purple transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="flex items-center space-x-4 pt-4">
                <Button variant="ghost" size="icon">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-luxury-purple text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;