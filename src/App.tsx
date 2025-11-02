import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Certifications />
      <Gallery />
      <Contact />
    <FloatingWhatsApp 
      phoneNumber="923466762561"
          accountName="A. Qayyum Lone"
          chatMessage="Hello! How can I help you?"
          statusMessage="Online"
          avatar="https://res.cloudinary.com/dlkyywyml/image/upload/v1762086156/Avatar_adyum1.jpg"
          allowEsc
          allowClickAway
          notification
          notificationSound

    />
      <Footer />
    </div>
  );
}

export default App;
