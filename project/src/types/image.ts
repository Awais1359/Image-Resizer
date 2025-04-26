export interface ImageFile {
  file: File;
  preview: string;
  name: string;
  size: number;
  type: string;
  id: string;
  width?: number;
  height?: number;
}

export interface ProcessingOptions {
  width: number;
  height: number;
  maintainAspectRatio: boolean;
  format: string;
  quality: number;
  resizeMode: string;
}

export interface ProcessedImage {
  id: string;
  originalName: string;
  dataUrl: string;
  blob: Blob;
  format: string;
  width: number;
  height: number;
  size: number;
}

export interface ResizeResult {
  dataUrl: string;
  blob: Blob;
  width: number;
  height: number;
}