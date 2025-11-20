import { useState } from "react";

export default function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    setAnimating(true);

    setIndex((prev) => (prev + 1) % images.length);

    setTimeout(() => setAnimating(false), 300);
  };

  const prev = () => {
    if (animating) return;
    setAnimating(true);

    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

    setTimeout(() => setAnimating(false), 300);
  };

  return (
    <div className="relative w-full h-64 overflow-hidden">
      {/* Sliding container */}
      <div
        className="flex h-full transition-transform duration-300 ease-out"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${index * (100 / images.length)}%)`,
        }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            className="w-full h-full object-cover"
            alt=""
          />
        ))}
      </div>

      {/* Prev */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute top-1/2 left-3 -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full"
          >
            ‹
          </button>

          {/* Next */}
          <button
            onClick={next}
            className="absolute top-1/2 right-3 -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full"
          >
            ›
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 w-full flex justify-center gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition ${
                  index === i ? "bg-white" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
