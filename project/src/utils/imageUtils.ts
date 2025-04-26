import { ImageFile, ProcessingOptions, ResizeResult } from '../types/image';

export const resizeImage = async (
  image: ImageFile,
  options: ProcessingOptions
): Promise<ResizeResult> => {
  return new Promise((resolve, reject) => {
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        reject(new Error('Could not create canvas context'));
        return;
      }
      
      // Create a new image object
      const img = new Image();
      img.onload = () => {
        // Calculate dimensions based on resize mode
        let targetWidth = options.width;
        let targetHeight = options.height;
        
        const originalWidth = img.width;
        const originalHeight = img.height;
        const aspectRatio = originalWidth / originalHeight;
        
        if (options.resizeMode === 'percentage') {
          const scale = options.width / originalWidth;
          targetWidth = Math.round(originalWidth * scale);
          targetHeight = Math.round(originalHeight * scale);
        } else if (options.resizeMode === 'maxWidth') {
          targetWidth = options.width;
          targetHeight = Math.round(targetWidth / aspectRatio);
        } else if (options.maintainAspectRatio) {
          if (targetWidth / targetHeight > aspectRatio) {
            targetWidth = Math.round(targetHeight * aspectRatio);
          } else {
            targetHeight = Math.round(targetWidth / aspectRatio);
          }
        }
        
        // Set canvas dimensions
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        
        // Draw image on canvas with resizing
        ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
        
        // Convert to desired format
        let mimeType = 'image/jpeg';
        if (options.format === 'png') {
          mimeType = 'image/png';
        } else if (options.format === 'webp') {
          mimeType = 'image/webp';
        }
        
        // Get data URL
        const dataUrl = canvas.toDataURL(mimeType, options.quality);
        
        // Convert data URL to Blob
        const binaryString = atob(dataUrl.split(',')[1]);
        const bytes = new Uint8Array(binaryString.length);
        
        for (let i = 0; i < binaryString.length; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        
        const blob = new Blob([bytes], { type: mimeType });
        
        resolve({
          dataUrl,
          blob,
          width: targetWidth,
          height: targetHeight
        });
      };
      
      img.onerror = () => {
        reject(new Error('Failed to load image'));
      };
      
      img.src = image.preview;
    } catch (error) {
      reject(error);
    }
  });
};

export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};