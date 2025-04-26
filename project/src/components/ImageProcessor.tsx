import React, { useState, useEffect } from 'react';
import { ImageFile, ProcessingOptions, ProcessedImage } from '../types/image';
import { Download, Trash2, RefreshCw, Image, ArrowLeft } from 'lucide-react';
import { resizeImage } from '../utils/imageUtils';

interface ImageProcessorProps {
  images: ImageFile[];
  isProcessing: boolean;
  setIsProcessing: React.Dispatch<React.SetStateAction<boolean>>;
  resetUpload: () => void;
}

const ImageProcessor: React.FC<ImageProcessorProps> = ({ 
  images, 
  isProcessing, 
  setIsProcessing, 
  resetUpload 
}) => {
  const [options, setOptions] = useState<ProcessingOptions>({
    width: 800,
    height: 600,
    maintainAspectRatio: true,
    format: 'jpeg',
    quality: 0.9,
    resizeMode: 'exact' // 'exact', 'percentage', 'maxWidth', 'maxHeight'
  });
  
  const [processedImages, setProcessedImages] = useState<ProcessedImage[]>([]);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [percentValue, setPercentValue] = useState(50);
  
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setOptions(prev => ({ ...prev, [name]: checked }));
    } else if (name === 'percent') {
      setPercentValue(Number(value));
      if (options.resizeMode === 'percentage') {
        const originalWidth = images[0]?.width || 0;
        const originalHeight = images[0]?.height || 0;
        
        setOptions(prev => ({
          ...prev,
          width: Math.round(originalWidth * (Number(value) / 100)),
          height: Math.round(originalHeight * (Number(value) / 100))
        }));
      }
    } else {
      setOptions(prev => ({ ...prev, [name]: value }));
    }
  };

  const loadOriginalDimensions = async () => {
    const updatedImages = await Promise.all(
      images.map(async (img) => {
        return new Promise<ImageFile>((resolve) => {
          const image = new window.Image();
          image.onload = () => {
            resolve({
              ...img,
              width: image.width,
              height: image.height
            });
          };
          image.src = img.preview;
        });
      })
    );
    
    if (updatedImages.length > 0 && updatedImages[0].width && updatedImages[0].height) {
      setOptions(prev => ({
        ...prev,
        width: updatedImages[0].width,
        height: updatedImages[0].height
      }));
    }
    
    return updatedImages;
  };

  useEffect(() => {
    loadOriginalDimensions();
  }, [images]);

  const handleResizeMode = (mode: string) => {
    setOptions(prev => ({ ...prev, resizeMode: mode }));
  };

  const handleProcessImages = async () => {
    setIsProcessing(true);
    
    try {
      const updatedImages = await loadOriginalDimensions();
      const results = await Promise.all(
        updatedImages.map(async (img) => {
          const result = await resizeImage(img, options);
          return {
            id: img.id,
            originalName: img.name,
            dataUrl: result.dataUrl,
            blob: result.blob,
            format: options.format,
            width: result.width,
            height: result.height,
            size: result.blob.size
          };
        })
      );
      
      setProcessedImages(results);
      setIsPreviewMode(true);
    } catch (error) {
      console.error('Error processing images:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownloadAll = () => {
    processedImages.forEach(img => {
      const link = document.createElement('a');
      link.href = img.dataUrl;
      link.download = `${img.originalName.split('.')[0]}_resized.${img.format}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  const handleDownloadSingle = (img: ProcessedImage) => {
    const link = document.createElement('a');
    link.href = img.dataUrl;
    link.download = `${img.originalName.split('.')[0]}_resized.${img.format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const formatBytes = (bytes: number, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  };

  const calculateCompressionRatio = (original: number, compressed: number) => {
    return Math.round((1 - compressed / original) * 100);
  };

  return (
    <div className="max-w-5xl mx-auto">
      {!isPreviewMode ? (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">Resize Options</h2>
              <button 
                onClick={resetUpload}
                className="text-gray-500 hover:text-gray-700 flex items-center"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back
              </button>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <button
                className={`p-4 border rounded-md text-center ${
                  options.resizeMode === 'exact' 
                    ? 'border-blue-500 bg-blue-50 text-blue-600' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => handleResizeMode('exact')}
              >
                <div className="font-medium mb-1">Exact Size</div>
                <div className="text-sm text-gray-500">Set width & height</div>
              </button>
              
              <button
                className={`p-4 border rounded-md text-center ${
                  options.resizeMode === 'percentage' 
                    ? 'border-blue-500 bg-blue-50 text-blue-600' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => handleResizeMode('percentage')}
              >
                <div className="font-medium mb-1">Percentage</div>
                <div className="text-sm text-gray-500">Scale by percentage</div>
              </button>
              
              <button
                className={`p-4 border rounded-md text-center ${
                  options.resizeMode === 'maxWidth' 
                    ? 'border-blue-500 bg-blue-50 text-blue-600' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => handleResizeMode('maxWidth')}
              >
                <div className="font-medium mb-1">Max Width</div>
                <div className="text-sm text-gray-500">Set maximum width</div>
              </button>
            </div>
            
            {options.resizeMode === 'percentage' ? (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Scale to {percentValue}%
                </label>
                <input
                  type="range"
                  name="percent"
                  min="1"
                  max="100"
                  value={percentValue}
                  onChange={handleOptionChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Width (px)
                  </label>
                  <input
                    type="number"
                    name="width"
                    value={options.width}
                    onChange={handleOptionChange}
                    min="1"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Height (px)
                  </label>
                  <input
                    type="number"
                    name="height"
                    value={options.height}
                    onChange={handleOptionChange}
                    min="1"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            )}
            
            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="maintainAspectRatio"
                  checked={options.maintainAspectRatio}
                  onChange={handleOptionChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">Maintain aspect ratio</span>
              </label>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Format
                </label>
                <select
                  name="format"
                  value={options.format}
                  onChange={handleOptionChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="jpeg">JPEG</option>
                  <option value="png">PNG</option>
                  <option value="webp">WebP</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Quality ({Math.round(options.quality * 100)}%)
                </label>
                <input
                  type="range"
                  name="quality"
                  min="0.1"
                  max="1"
                  step="0.1"
                  value={options.quality}
                  onChange={handleOptionChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="col-span-2 md:col-span-1">
                  <button
                    onClick={resetUpload}
                    className="w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Cancel
                  </button>
                </div>
                
                <div className="col-span-2">
                  <button
                    onClick={handleProcessImages}
                    disabled={isProcessing}
                    className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center justify-center"
                  >
                    {isProcessing ? (
                      <>
                        <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      'Resize Images'
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 border-t border-gray-200">
            <h3 className="font-medium text-gray-800 mb-4">Selected Images ({images.length})</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {images.map(img => (
                <div key={img.id} className="relative">
                  <div className="aspect-square overflow-hidden rounded-md bg-gray-100 border border-gray-200">
                    <img
                      src={img.preview}
                      alt={img.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-1 text-xs text-gray-500 truncate">{img.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">Resized Images</h2>
              <button
                onClick={() => setIsPreviewMode(false)}
                className="text-gray-500 hover:text-gray-700 flex items-center"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back to Options
              </button>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <button
                onClick={handleDownloadAll}
                className="inline-flex items-center py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Download className="w-5 h-5 mr-2" />
                Download All
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {processedImages.map(img => {
                const originalImage = images.find(i => i.id === img.id);
                const compressionRatio = originalImage 
                  ? calculateCompressionRatio(originalImage.size, img.size) 
                  : 0;
                
                return (
                  <div key={img.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="aspect-square overflow-hidden bg-gray-100">
                      <img
                        src={img.dataUrl}
                        alt={img.originalName}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-medium text-gray-800 truncate mb-2">
                        {img.originalName}
                      </h3>
                      
                      <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                        <div className="text-gray-500">Dimensions:</div>
                        <div className="text-gray-700">{img.width} × {img.height} px</div>
                        
                        <div className="text-gray-500">Format:</div>
                        <div className="text-gray-700">{img.format.toUpperCase()}</div>
                        
                        <div className="text-gray-500">Size:</div>
                        <div className="text-gray-700">{formatBytes(img.size)}</div>
                        
                        <div className="text-gray-500">Saved:</div>
                        <div className="text-green-600">{compressionRatio}%</div>
                      </div>
                      
                      <button
                        onClick={() => handleDownloadSingle(img)}
                        className="w-full py-2 flex items-center justify-center text-sm border border-gray-300 rounded bg-gray-50 hover:bg-gray-100 transition duration-150"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageProcessor;