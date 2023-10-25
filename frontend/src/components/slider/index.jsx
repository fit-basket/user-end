import React, { useEffect, useState } from "react";
import { getScreenSize } from "../../utils/helper";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Rect from "./RectImageSlider";
import Circle from "./CircleImageSlider";
// import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";

// ImageSlider component
function ImageSlider({ imageType, images, maxImage }) {
  console.log("Images", images);
  // State and variables
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxImages, setMaxImages] = useState(maxImage);

  // Function to go to the previous slide
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Function to go to the next slide
  const nextSlide = () => {
    if (currentIndex < images.length - maxImages) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Function to handle the carousel
  const handleCarousal = () => {
    let start = currentIndex * maxImages;
    let end = start + maxImages;
    let updatedImages;

    if (images.length > start) {
      updatedImages = images.slice(start, end);
    }

    return updatedImages;
  };

  const carousalImages = handleCarousal();

  const canGoBack = currentIndex > 0;
  const canGoForward = currentIndex < Math.ceil(images.length / maxImages) - 1;

  // Use the useEffect hook to handle screen size changes
  useEffect(() => {
    // Function to update maxImages based on screen size
    function updateMaxImages() {
      const screenSize = getScreenSize();

      switch (screenSize) {
        case "extraSmall":
          setMaxImages(1);
          break;
        case "small":
          setMaxImages(2);
          break;
        case "medium":
          setMaxImages(maxImage - 2);
          break;
        case "large":
          setMaxImages(maxImage - 1);
          break;
        case "extraLarge":
          setMaxImages(maxImage);
          break;
        default:
          setMaxImages(maxImage); // Default value for unknown screen sizes
      }
    }

    // Initial call to set maxImages based on the initial screen size
    updateMaxImages();

    // Add an event listener to continuously update maxImages on window resize
    window.addEventListener("resize", updateMaxImages);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateMaxImages);
    };
  }, [maxImage]);

  // Render the component
  return (
    <div className="flex my-6">
      <button className="" onClick={prevSlide} disabled={!canGoBack}>
        <ChevronLeftIcon
          className={`h-5 w-5 flex-none ${
            canGoBack ? "text-gray-900" : "text-gray-200"
          }`}
          aria-hidden="true"
        />
      </button>

      <div className="overflow-hidden w-full">
        <div className="flex my-6 justify-center">
          {carousalImages?.map((image, index) =>
            imageType === "circle" ? (
              <Circle key={index} src={image?.image} alt={image.title} />
            ) : (
              <Rect key={index} src={image?.image} alt={image.title} />
            )
          )}
        </div>
      </div>

      <button className="" onClick={nextSlide} disabled={!canGoForward}>
        <ChevronRightIcon
          className={`h-5 w-5 flex-none ${
            canGoForward ? "text-gray-900" : "text-gray-200"
          }`}
          aria-hidden="true"
        />
      </button>
    </div>
  );
}

export default ImageSlider;
