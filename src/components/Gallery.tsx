import { useState } from 'react';
import { X } from 'lucide-react';
import std1 from "../Images/std1.jpg";
import std2 from "../Images/std2.jpg";
import std3 from "../Images/std3.jpg";
import std4 from "../Images/std4 .jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      title: 'Piano Studio Session',
      category: 'Live Performance',
      image: std1,
    },
    {
      title: 'Song Recording',
      category: 'Recording',
      image: std2,
    },
    {
      title: 'Song Composition',
      category: 'Composition',
      image: std3,
    },
    {
      title: 'Teaching Session',
      category: 'Education',
      image: std4,
    },
    {
      title: 'Grand Piano Close-up',
      category: 'Instruments',
      image: 'https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Jazz Performance',
      category: 'Live Performance',
      image: 'https://images.pexels.com/photos/3971985/pexels-photo-3971985.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
 
  ];

  return (
    <section id="gallery" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Photo <span className="text-amber-500">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Moments captured from performances, recordings, and teaching sessions
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer aspect-square"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-amber-500 text-slate-900 text-xs font-semibold rounded-full mb-2">
                  {item.category}
                </span>
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-amber-500 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={galleryItems[selectedImage].image}
            alt={galleryItems[selectedImage].title}
            className="max-w-full max-h-full object-contain rounded-lg"
          />
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
            <h3 className="text-white text-2xl font-bold mb-2">
              {galleryItems[selectedImage].title}
            </h3>
            <span className="inline-block px-4 py-2 bg-amber-500 text-slate-900 text-sm font-semibold rounded-full">
              {galleryItems[selectedImage].category}
            </span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
