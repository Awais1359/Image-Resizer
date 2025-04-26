import React from 'react';
import { Image, LayoutGrid, Clock, Wrench, Download, Repeat, Shield, CreditCard } from 'lucide-react';

const featuresData = [
  {
    title: 'Easy Batch Processing',
    description: 'Resize multiple images at once - save time and boost productivity.',
    icon: <LayoutGrid className="w-8 h-8 text-purple-600" />
  },
  {
    title: 'Lightning Fast',
    description: 'Advanced algorithms process your images in seconds, not minutes.',
    icon: <Clock className="w-8 h-8 text-blue-600" />
  },
  {
    title: 'Custom Dimensions',
    description: 'Resize to exact pixels, percentages, or maintain aspect ratios.',
    icon: <Wrench className="w-8 h-8 text-green-600" />
  },
  {
    title: 'Multiple Formats',
    description: 'Convert between JPG, PNG, WebP and other formats with ease.',
    icon: <Repeat className="w-8 h-8 text-orange-600" />
  },
  {
    title: 'Secure Processing',
    description: 'Your images are processed locally - we never store them on servers.',
    icon: <Shield className="w-8 h-8 text-red-600" />
  },
  {
    title: 'Always Free',
    description: 'No hidden fees, subscriptions, or watermarks. Completely free forever.',
    icon: <CreditCard className="w-8 h-8 text-indigo-600" />
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose ResizeHub?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Powerful image resizing tools with a focus on quality, speed, and security. All the professional
            features you need, none of the complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100"
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#image-uploader" className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium px-8 py-3 rounded-lg hover:opacity-90 transition duration-300 shadow-md">
            <Image className="w-5 h-5 mr-2" />
            Start Resizing Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;