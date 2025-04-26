import React, { useEffect } from 'react';
import { Image, Heart, Users, Zap, Shield } from 'lucide-react';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About ResizeHub</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our mission is to provide powerful, easy-to-use image tools that help people optimize 
            their visual content without technical barriers.
          </p>
        </div>
        
        {/* Our story section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              ResizeHub began with a simple vision: to make image optimization accessible to everyone. 
              We noticed that many existing tools were either too complex for beginners or too limited 
              for professionals.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our team of designers and developers set out to create a solution that bridges this gap - 
              a powerful yet intuitive image resizing tool that anyone can use, regardless of their 
              technical expertise.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, ResizeHub is trusted by thousands of users worldwide, from bloggers and social media 
              managers to professional photographers and web developers - all seeking to optimize their 
              images without compromising on quality.
            </p>
          </div>
          <div className="bg-gray-100 rounded-xl p-8">
            <img 
              src="https://images.pexels.com/photos/7947541/pexels-photo-7947541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
              alt="Team working together" 
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
        </div>
        
        {/* Values section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">User-Centric</h3>
              <p className="text-gray-600">
                We design every feature with our users in mind, prioritizing ease of use and accessibility.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously improve our technology to deliver the best performance and results.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Privacy</h3>
              <p className="text-gray-600">
                We process all images locally in your browser, ensuring your data never leaves your device.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
              <p className="text-gray-600">
                We believe powerful tools should be available to everyone, which is why ResizeHub is free.
              </p>
            </div>
          </div>
        </div>
        
        {/* Team section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <img 
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="Team member" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">Alex Johnson</h3>
              <p className="text-purple-600 mb-4">Founder & Developer</p>
              <p className="text-gray-600">
                Alex built ResizeHub with a passion for creating tools that make technology more accessible.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <img 
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="Team member" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">Sarah Chen</h3>
              <p className="text-blue-600 mb-4">Lead Designer</p>
              <p className="text-gray-600">
                Sarah crafts the user experience that makes ResizeHub intuitive and beautiful.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <img 
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="Team member" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">Michael Rodriguez</h3>
              <p className="text-green-600 mb-4">Image Processing Expert</p>
              <p className="text-gray-600">
                Michael optimizes our image processing algorithms for the best quality results.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your images?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust ResizeHub for all their image resizing needs.
          </p>
          <a 
            href="/"
            className="inline-flex items-center bg-white text-blue-600 font-medium px-8 py-3 rounded-lg hover:bg-blue-50 transition duration-300"
          >
            <Image className="w-5 h-5 mr-2" />
            Start Resizing Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;