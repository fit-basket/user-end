import React from "react";

// Functional component to display circular images
export default function Circle({ src, alt }) {
  return (
    <div className="mx-6 w-40 h-40 image">
      <img
        className="rounded-full object-cover w-full h-full"
        src={src}
        alt={alt}
      />
    </div>
  );
}
