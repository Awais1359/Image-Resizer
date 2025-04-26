import React, { useState, useRef } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { ImageFile } from '../types/image';

interface ImageUploaderProps {
  onImagesUploaded: (images: ImageFile[]) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImagesUploaded }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };
  
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };
  
  const processFiles = (files: FileList) => {
    const imageFiles: ImageFile[] = [];
    
    Array.from(files).forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = () => {
          const imageFile: ImageFile = {
            file,
            preview: reader.result as string,
            name: file.name,
            size: file.size,
            type: file.type,
            id: Math.random().toString(36).substr(2, 9)
          };
          
          imageFiles.push(imageFile);
          
          if (imageFiles.length === files.length) {
            onImagesUploaded(imageFiles);
          }
        };
        reader.readAsDataURL(file);
      }
    });
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFiles(e.dataTransfer.files);
      e.dataTransfer.clearData();
    }
  };
  
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFiles(e.target.files);
    }
  };
  
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  return (
    <div 
      id="image-uploader"
      className="container mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div 
        className={`
          relative border-2 border-dashed rounded-lg p-12 text-center transition-all duration-300
          ${isDragging 
            ? 'border-blue-600 bg-blue-50' 
            : 'border-gray-300 hover:border-blue-400 bg-white'}
        `}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          type="file"
          ref={fileInputRef}
          multiple
          accept="image/*"
          onChange={handleFileInputChange}
          className="hidden"
        />
        
        <div className="mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-blue-100">
          <Upload className="h-8 w-8 text-blue-600" />
        </div>
        
        <h3 className="text-xl font-semibold mb-2">
          Drop your images here
        </h3>
        <p className="text-gray-500 mb-6">
          or click to browse from your computer
        </p>
        
        <button
          onClick={handleButtonClick}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
        >
          Select Images
        </button>
        
        <p className="mt-4 text-sm text-gray-500">
          Supports: JPG, PNG, WebP, GIF (max 10MB)
        </p>

        {isDragging && (
          <div className="absolute inset-0 bg-blue-100 bg-opacity-50 flex items-center justify-center rounded-lg border-2 border-blue-600">
            <div className="text-blue-600 font-semibold text-xl">
              Drop your images here
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;