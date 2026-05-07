import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#101727] text-gray-300 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* 5‑column grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* Brand column */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">DigiTools</h2>
            <p className="text-sm leading-relaxed">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Features</a></li>
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">Templates</a></li>
              <li><a href="#" className="hover:text-white transition">Integrations</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Press</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">Community</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Social Links</h3>
            <div className="flex gap-3">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition text-white text-xl">
                <FaInstagramSquare />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition text-white text-xl">
                <FaFacebook />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition text-white text-xl">
                <FaTwitterSquare />
              </a>
            </div>
          </div>
        </div>

        {/* copy right section */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>&copy; {new Date().getFullYear()} DigiTools. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;