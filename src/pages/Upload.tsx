import React, { useState } from 'react';
import { motion } from 'motion/react';
import { UploadCloud, FileJson, X, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Upload() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handlePublish = () => {
    setIsUploading(true);
    // Simulate upload
    setTimeout(() => {
      setIsUploading(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-3xl p-8 text-center shadow-xl border border-neutral-100"
        >
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-2xl font-display font-bold text-neutral-900 mb-2">Upload Successful!</h2>
          <p className="text-neutral-500 mb-8">Your animation has been published and is now live on AnimHub.</p>
          <div className="flex flex-col gap-3">
            <button 
              onClick={() => {
                setFile(null);
                setIsSuccess(false);
              }}
              className="w-full py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors"
            >
              Upload Another
            </button>
            <button className="w-full py-3 bg-neutral-100 text-neutral-700 rounded-xl font-medium hover:bg-neutral-200 transition-colors">
              View Animation
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-neutral-900">Upload Animation</h1>
        <p className="text-neutral-500 mt-2">Share your motion design with the community.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left: Upload Area */}
        <div className="lg:col-span-3 space-y-6">
          {!file ? (
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={cn(
                "border-2 border-dashed rounded-3xl p-12 text-center transition-all duration-200 ease-in-out",
                isDragging 
                  ? "border-indigo-500 bg-indigo-50/50" 
                  : "border-neutral-300 bg-white hover:border-indigo-400 hover:bg-neutral-50"
              )}
            >
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-indigo-500">
                <UploadCloud className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Drag & drop your file here</h3>
              <p className="text-sm text-neutral-500 mb-6">Supports JSON (Lottie), dotLottie, GIF, or MP4 up to 50MB.</p>
              
              <input 
                type="file" 
                id="file-upload" 
                className="hidden" 
                accept=".json,.lottie,.gif,.mp4"
                onChange={handleFileChange}
              />
              <label 
                htmlFor="file-upload"
                className="inline-flex items-center justify-center px-6 py-3 bg-white border border-neutral-200 text-neutral-700 rounded-xl font-medium hover:bg-neutral-50 hover:border-neutral-300 transition-all cursor-pointer shadow-sm"
              >
                Browse Files
              </label>
            </div>
          ) : (
            <div className="bg-white border border-neutral-200 rounded-3xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0 text-indigo-600">
                <FileJson className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-neutral-900 truncate">{file.name}</h4>
                <p className="text-xs text-neutral-500 mt-1">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                
                {/* Simulated Progress */}
                {isUploading && (
                  <div className="mt-4">
                    <div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 2 }}
                        className="h-full bg-indigo-600"
                      />
                    </div>
                    <p className="text-xs text-neutral-500 mt-2">Uploading and processing...</p>
                  </div>
                )}
              </div>
              {!isUploading && (
                <button 
                  onClick={() => setFile(null)}
                  className="p-2 text-neutral-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          )}
        </div>

        {/* Right: Details Form */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-neutral-200 rounded-3xl p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Title</label>
              <input 
                type="text" 
                placeholder="e.g. Success Checkmark"
                className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Description</label>
              <textarea 
                rows={4}
                placeholder="Describe your animation..."
                className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Category</label>
              <select className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all appearance-none cursor-pointer">
                <option value="">Select a category</option>
                <option value="ui">UI Elements</option>
                <option value="loaders">Loaders</option>
                <option value="icons">Icons</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Tags</label>
              <input 
                type="text" 
                placeholder="Add tags separated by comma"
                className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
              />
            </div>

            <div className="pt-4 border-t border-neutral-100">
              <button 
                onClick={handlePublish}
                disabled={!file || isUploading}
                className={cn(
                  "w-full py-3 rounded-xl font-medium transition-all shadow-sm",
                  !file || isUploading
                    ? "bg-neutral-100 text-neutral-400 cursor-not-allowed"
                    : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-500/20"
                )}
              >
                {isUploading ? 'Publishing...' : 'Publish Animation'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
