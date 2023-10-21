import React, { useEffect, useState } from "react";
import { getScreenSize } from "../../utils/helper";

// Functional component to display circular images
function Circle({ src }) {
  return (
    <img className="rounded-full w-full h-full" src={src} alt=" description" />
  );
}

// ImageSlider component
function ImageSlider({ images }) {
  // State and variables
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxImages, setMaxImages] = useState(5);

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
          setMaxImages(3);
          break;
        case "large":
          setMaxImages(4);
          break;
        case "extraLarge":
          setMaxImages(5);
          break;
        default:
          setMaxImages(5); // Default value for unknown screen sizes
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
  }, []);

  // Render the component
  return (
    <div className="flex my-6">
      <button className="" onClick={prevSlide} disabled={!canGoBack}>
        {`<`}
      </button>

      <div className="overflow-hidden w-full">
        <div className="flex my-6 justify-center">
          {carousalImages.map((image, index) => (
            <div key={index} className="mx-6 w-40 h-40 image">
              <Circle src={image} />
            </div>
          ))}
        </div>
      </div>

      <button className="" onClick={nextSlide} disabled={!canGoForward}>
        {`>`}
      </button>
    </div>
  );
}

export default ImageSlider;
