import React from "react";
import { useNavigate } from "react-router-dom";

// Functional component to display circular images
export default function Circle({ src, alt, data }) {
  // misc
  const navigate = useNavigate();

  // func
  const goToShop = () => {
    navigate(`/business-profile/${data?.businessName}/${data?._id}`);
  };

  return (
    <div className="mx-6 w-40 h-40 image cursor-pointer" onClick={goToShop}>
      <img
        className="rounded-full object-cover w-full h-full"
        src={src}
        alt={alt}
      />
    </div>
  );
}
