import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
import { Link } from "react-router-dom";
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
    <img src={logo} alt="Siri Fab Logo" className="h-12" />
    <h3 className="text-2xl font-myFont text-gold">Siri Fab</h3>
  </div>
            <p className="text-sm leading-relaxed mb-4">
              Discover the finest collection of traditional Indian clothing. 
              From elegant kurtis to stunning suits, we showcase the best in ethnic fashion.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/siri_fab_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/siri.fab.3" className="hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />              
              </a>
              <a href="" className="hover:text-gold transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://wa.me/9483270602?text=Hello%20Siri%20Fab,%20I%20have%20a%20query%20about%20your%20products." className="hover:text-gold transition-colors">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-gold transition-colors">Products</Link></li>
              <li><Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-gold transition-colors">Categories</Link></li>
              <li><Link to="/franchise" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}className="hover:text-gold transition-colors">Franchise</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-gold" />
                <span>+91 11111111111</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-gold" />
                <span>test@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-gold" />
                <span>Nippani, Karnataka, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; Developed by <a href="https://www.linkedin.com/in/somesh-bhosale-943268187/"><b>Somesh Prashant Bhosale</b></a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;