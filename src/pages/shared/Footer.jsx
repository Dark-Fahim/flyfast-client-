import { NavLink } from "react-router"; 
import logo from '/assests/logo.png'

export default function FlyFastFooter() {
  const linkClass =
    "text-gray-300 hover:text-[#FF7A00] transition text-sm";

  return (
    <footer className="bg-[#0D1117] text-white rounded-2xl mx-2 my-6 py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Logo */}
        <div className="flex justify-center items-center space-x-2 mb-4">
          <img className="h-11" src={logo} alt="logo" />
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
          Fast, reliable parcel delivery with real-time tracking and zero hassle.  
          Personal packages to business shipments — delivered on time, every time.
        </p>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8 w-full opacity-30" />

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8">
          <NavLink to="/services" className={linkClass}>Services</NavLink>
          <NavLink to="/coverage" className={linkClass}>Coverage</NavLink>
          <NavLink to="/about" className={linkClass}>About Us</NavLink>
          <NavLink to="/pricing" className={linkClass}>Pricing</NavLink>
          <NavLink to="/blog" className={linkClass}>Blog</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-300 hover:text-[#FF7A00] text-xl">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-[#FF7A00] text-xl">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-[#FF7A00] text-xl">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-[#FF7A00] text-xl">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>

      </div>
    </footer>
  );
}
