import React, { useState, useEffect } from 'react';
import ImageUploader from '../components/ImageUploader';
import ImageProcessor from '../components/ImageProcessor';
import { ImageFile } from '../types/image';
import Hero from '../components/Hero';
import Features from '../components/Features';

const Home: React.FC = () => {
  const [uploadedImages, setUploadedImages] = useState<ImageFile[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImagesUploaded = (images: ImageFile[]) => {
    setUploadedImages(images);
  };

  return (
    <div className="pt-16">
      {/* Show hero section if no images are uploaded */}
      {uploadedImages.length === 0 && (
        <>
          <Hero />
          <div className="my-16">
            <ImageUploader onImagesUploaded={handleImagesUploaded} />
          </div>
          <Features />
        </>
      )}

      {/* Show image processor if images are uploaded */}
      {uploadedImages.length > 0 && (
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Resize Your Images
          </h1>
          <ImageProcessor 
            images={uploadedImages}
            isProcessing={isProcessing}
            setIsProcessing={setIsProcessing}
            resetUpload={() => setUploadedImages([])}
          />
        </div>
      )}
    </div>
  );
};

export default Home;