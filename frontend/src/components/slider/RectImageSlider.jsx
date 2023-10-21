import React from "react";

// Functional component to display circular images
export default function Rect({ src }) {
  return (
    <div className="mx-3 w-72 h-40 image">
      <img
        className="h-full w-full object-cover rounded-lg"
        src={src}
        alt="description"
      />
    </div>
  );
}
