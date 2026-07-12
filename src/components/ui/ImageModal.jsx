import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

function ImageModal({
  open,
  onClose,
  images,
  currentIndex,
  setCurrentIndex,
}) {

  if (!open) return null;

  const currentImage = images[currentIndex];

  useEffect(() => {

    const handleKey = (e) => {

      if (e.key === "Escape") onClose();

      if (e.key === "ArrowRight") {

        if (currentIndex < images.length - 1) {

          setCurrentIndex(currentIndex + 1);

        }

      }

      if (e.key === "ArrowLeft") {

        if (currentIndex > 0) {

          setCurrentIndex(currentIndex - 1);

        }

      }

    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);

  }, [currentIndex]);

  return (

    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
      onClick={onClose}
    >

      <div
        className="relative max-w-6xl w-full"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          onClick={onClose}
          className="absolute right-0 -top-14 text-white"
        >
          <X size={34} />
        </button>

        <img
          src={currentImage.image}
          alt={currentImage.title}
          className="w-full rounded-2xl"
        />

        <div className="bg-white rounded-b-2xl p-6">

          <h2 className="text-2xl font-bold">

            {currentImage.title}

          </h2>

          <p className="mt-3 text-gray-600">

            {currentImage.description}

          </p>

        </div>

        {

          currentIndex > 0 && (

            <button
              onClick={() => setCurrentIndex(currentIndex - 1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3"
            >

              <ChevronLeft />

            </button>

          )

        }

        {

          currentIndex < images.length - 1 && (

            <button
              onClick={() => setCurrentIndex(currentIndex + 1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3"
            >

              <ChevronRight />

            </button>

          )

        }

      </div>

    </div>

  );

}

export default ImageModal;