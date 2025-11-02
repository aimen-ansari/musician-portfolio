import {
  Music2,
  Facebook,
  Youtube,
} from "lucide-react";
import Asign from "../Images/Asign.png";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/p/1BZ95SgkWp/", label: "Facebook" },
    {
      icon: Youtube,
      href: "https://youtube.com/@q_studiothesoundzone6454?si=zTYA5fve9yO65ogn",
      label: "YouTube",
    },
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
  ];

  const moreLinks = [
    { label: "Certifications", href: "#certifications" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-slate-950 border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* LEFT SIDE */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Music2 className="w-8 h-8 text-amber-500" />
              <span className="text-xl font-bold text-white">
                Music Portfolio
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Dedicated to creating beautiful music and inspiring the next
              generation of musicians. Let's make harmony together.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="bg-slate-900 p-3 rounded-lg text-gray-400 hover:text-amber-500 hover:bg-slate-800 transition-all duration-300 hover:transform hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                   
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* MORE LINKS */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">More</h3>
            <ul className="space-y-2">
              {moreLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* LEFT SIDE */}
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} A. Qayyum Lone. All rights reserved.
          </p>

          {/* RIGHT SIDE: Made by Aimen (signature + link) */}
          <a
            href="https://aimenansari.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-10 hover:opacity-90 transition-opacity"
          >
            <span className="text-gray-400 text-sm">Developed by</span>
            <img
              src={Asign}
              alt="Aimen Signature"
              className="h-20 w-auto object-contain scale-150 translate-y-[2px] hover:brightness-200 transition-all duration-300"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
