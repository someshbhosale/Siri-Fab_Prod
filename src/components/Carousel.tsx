// src/components/carousel.tsx
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  images: string[];
  name: string;
}

export default function Carousel({ images, name }: CarouselProps) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex(index === 0 ? images.length - 1 : index - 1);
  const next = () => setIndex(index === images.length - 1 ? 0 : index + 1);

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="overflow-hidden">
        <img
          src={images[index]}
          alt={`${name} image ${index + 1}`}
          className="w-full h-auto object-contain transition-all duration-800"
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`thumb ${idx}`}
              className={`w-16 h-16 object-cover border rounded cursor-pointer ${
                idx === index ? "border-primary" : "border-gray-300"
              }`}
              onClick={() => setIndex(idx)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
