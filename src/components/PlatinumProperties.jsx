import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Armchair, Wifi, Zap, UserCheck, ChevronLeft, ChevronRight, Briefcase, MessageCircle } from 'lucide-react';

// --- IMAGES (Make sure these exist in your public folder!) ---
const heroImages = [
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop"  
];

// Note: Ensure apt1.jpg, floor1.jpg etc are in your 'public' folder
const project1Images = [
  "/Platinum_Properties/apt1.jpg", 
  "/Platinum_Properties/apt2.jpg", 
  "/Platinum_Properties/apt3.jpg", 
  "/Platinum_Properties/apt4.jpg"
]; 

const project2Images = [
  "/Platinum_Properties/floor1.jpg", 
  "/Platinum_Properties/floor2.jpg", 
  "/Platinum_Properties/floor3.jpg", 
  "/Platinum_Properties/floor4.jpg"
];

const PlatinumProperties = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  const [p1Index, setP1Index] = useState(0);
  const [p2Index, setP2Index] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextP1 = () => setP1Index((prev) => (prev === project1Images.length - 1 ? 0 : prev + 1));
  const prevP1 = () => setP1Index((prev) => (prev === 0 ? project1Images.length - 1 : prev - 1));
  const nextP2 = () => setP2Index((prev) => (prev === project2Images.length - 1 ? 0 : prev + 1));
  const prevP2 = () => setP2Index((prev) => (prev === 0 ? project2Images.length - 1 : prev - 1));

  return (
    <div className="min-h-screen font-sans text-[#4A4036] bg-[#F9F7F2] selection:bg-[#BCAAA4] selection:text-white">
      {/* NAVIGATION */}
      <nav className="fixed w-full top-0 z-50 bg-[#F9F7F2]/90 backdrop-blur-sm border-b border-[#EBE5DA]">
        <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">
          <div className="text-xl font-serif tracking-widest text-[#2C241B] uppercase">Platinum Properties</div>
          <div className="hidden md:flex space-x-12 text-xs font-bold tracking-[0.2em] uppercase text-[#8D7F71]">
            <a href="#about" className="hover:text-[#2C241B] transition-colors">About Us</a>
            <a href="#projects" className="hover:text-[#2C241B] transition-colors">Rooms</a>
            <a href="#location" className="hover:text-[#2C241B] transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO SLIDESHOW */}
      <div className="mt-20 relative h-[70vh] w-full overflow-hidden bg-[#F9F7F2]">
        {heroImages.map((src, index) => (
          <img key={index} src={src} alt="Hero" className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${index === heroIndex ? "opacity-100" : "opacity-0"}`} />
        ))}
        <div className="absolute inset-0 bg-[#2C241B]/20 z-10"></div>
      </div>

      {/* INTRO */}
      <section id="about" className="py-24 px-6 bg-[#F9F7F2]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-[#2C241B] mb-4 tracking-tight uppercase">Platinum Properties</h1>
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#8D7F71] mb-16">Constructions & Developers</p>
          <div className="h-px w-24 bg-[#EBE5DA] mx-auto mb-12"></div>
          <p className="text-xl md:text-2xl leading-relaxed font-light text-[#5D5247]">
            Premier developers in <span className="font-serif italic">HSR Layout</span>. We specialize in crafting high-quality residential spaces that blend modern architecture with functional living.
          </p>
          <div className="mt-12">
             <p className="text-lg font-bold tracking-[0.2em] uppercase text-[#2C241B]">M. Babu Reddy</p>
             <p className="text-sm text-[#8D7F71] uppercase tracking-widest mt-1">Managing Director</p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-32 bg-[#D7D0C3]">
        <div className="max-w-7xl mx-auto px-6">
          {/* PROJECT 1 */}
          <div className="grid md:grid-cols-2 gap-16 mb-32 items-center">
            <div className="order-2 md:order-1 space-y-8">
              <h3 className="text-4xl font-serif italic text-[#2C241B]">The Liyan Orchids</h3>
              <p className="text-[#5D5247] leading-relaxed max-w-md">LLocated in the heart of HSR Layout, The Liyan Orchids offers a refined boutique hotel experience. 
                Our executive suites feature premium Italian marble finishes and custom furnishings. 
                Perfectly situated near the vibrant HSR Club,we provide a serene 
                oasis for guests seeking comfort in Bangalore.</p>
              <div className="grid grid-cols-2 gap-6 text-sm text-[#4A4036] border-t border-[#BCAAA4] pt-6">
                <div className="flex items-center gap-2"><Briefcase size={16}/> Executive Suites</div>
                <div className="flex items-center gap-2"><Wifi size={16}/> High-Speed Wi-Fi</div>
                <div className="flex items-center gap-2"><MapPin size={16}/> Prime Location</div>
              </div>
            </div>
            <div className="order-1 md:order-2 h-[500px] w-full relative group overflow-hidden bg-[#EBE5DA]">
              <img src={project1Images[p1Index]} alt="Liyan Orchids" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500" />
              <button onClick={prevP1} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full hover:bg-white text-[#2C241B] opacity-0 group-hover:opacity-100 transition-all z-20"><ChevronLeft size={24} /></button>
              <button onClick={nextP1} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full hover:bg-white text-[#2C241B] opacity-0 group-hover:opacity-100 transition-all z-20"><ChevronRight size={24} /></button>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="h-[500px] w-full relative group overflow-hidden bg-[#EBE5DA]">
              <img src={project2Images[p2Index]} alt="Crystal Suites" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500" />
              <button onClick={prevP2} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full hover:bg-white text-[#2C241B] opacity-0 group-hover:opacity-100 transition-all z-20"><ChevronLeft size={24} /></button>
              <button onClick={nextP2} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full hover:bg-white text-[#2C241B] opacity-0 group-hover:opacity-100 transition-all z-20"><ChevronRight size={24} /></button>
            </div>
            <div className="space-y-8">
              <h3 className="text-4xl font-serif italic text-[#2C241B]">Crystal Suites</h3>
              <p className="text-[#5D5247] leading-relaxed max-w-md">Experience the pinnacle of privacy and comfort. Each floor is meticulously designed with plush seating and premium upholstery.</p>
              <div className="grid grid-cols-2 gap-6 text-sm text-[#4A4036] border-t border-[#BCAAA4] pt-6">
                <div className="flex items-center gap-2"><Armchair size={16}/> Premium Upholstery</div>
                <div className="flex items-center gap-2"><Zap size={16}/> 24/7 Power Backup</div>
                <div className="flex items-center gap-2"><UserCheck size={16}/> 24/7 Concierge</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="location" className="py-24 bg-[#BCAAA4] text-[#2C241B]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-serif mb-8">Contact Us</h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start"><MapPin className="mt-1" size={20} /><p># 774, 17th Main, HSR 3rd Sector, Bangalore</p></div>
              <div className="flex gap-4 items-center"><Phone size={20} /><p>080-25723444 / 98451 97188</p></div>
              <div className="flex gap-4 items-center"><Mail size={20} /><p>babureddy188@gmail.com</p></div>
            </div>
          </div>
          <div className="h-[400px] bg-[#F9F7F2] p-2">
            <iframe src="https://maps.google.com/maps?q=HSR+Club+Bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
          </div>
        </div>
      </section>

      {/* WHATSAPP */}
      <a href="https://wa.me/919845197188?text=Hi,%20I%20am%20interested%20in%20Platinum%20Properties." target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all hover:scale-110 flex items-center gap-2">
        <MessageCircle size={28} />
        <span className="hidden md:inline font-bold">Chat with us</span>
      </a>

      <footer className="bg-[#2C241B] text-[#8D7F71] py-8 text-center text-xs tracking-widest uppercase">© 2024 Platinum Properties.</footer>
    </div>
  );
};
export default PlatinumProperties;