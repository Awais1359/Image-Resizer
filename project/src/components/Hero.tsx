import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToUploader = () => {
    const uploaderElement = document.getElementById('image-uploader');
    if (uploaderElement) {
      uploaderElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTRNNiA1NFYyTTU0IDZINk02IDE0SDU0TTU0IDIySDZNNiAzMEg1NE01NCAzOEg2TTYgNDZINTQiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Resize, Optimize, <br className="hidden sm:block" />
            <span className="text-yellow-300">Transform Your Images</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-2xl mx-auto">
            Professional-grade image resizing with pixel-perfect results. 
            Fast, free, and without losing quality.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={scrollToUploader}
              className="bg-white text-blue-600 hover:bg-blue-50 transform hover:scale-105 font-medium px-8 py-3 rounded-lg transition duration-300 shadow-lg"
            >
              Resize Images Now
            </button>
            <a 
              href="/about"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium px-8 py-3 rounded-lg transition duration-300"
            >
              Learn More
            </a>
          </div>
          
          <div className="mt-16 animate-bounce">
            <button 
              onClick={scrollToUploader}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition duration-200"
            >
              <ArrowDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Wave SVG at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,128L80,117.3C160,107,320,85,480,90.7C640,96,800,128,960,133.3C1120,139,1280,117,1360,106.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;