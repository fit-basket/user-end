import React, { useEffect, useState } from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import axios from "../../utils/axiosConfig";

function SearchBar() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [address, setAddress] = useState("");

  useEffect(() => {
    // Check if geolocation is available in the browser
    if ("geolocation" in navigator) {
      // Get the user's current location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Extract the latitude and longitude from the position object
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
          console.log("LOCATION", latitude, longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  }, []);

  const getAddress = () => {
    if (latitude && longitude) {
      // Create a URL for the Nominatim reverse geocoding request
      const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

      // Make a GET request to the Nominatim API
      axios
        .get(apiUrl)
        .then((response) => {
          console.log("RESPONSE", response.data);
          if (response.data.address) {
            setAddress(response.data.address.city);
          }
        })
        .catch((error) => {
          console.error("Error fetching address:", error);
        });
    }
  };

  return (
    <form className="flex-1">
      <div className="flex">
        <label
          htmlFor="location-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Your Email
        </label>
        <button
          className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
          type="button"
          onClick={getAddress}
        >
          <i className="fa-solid fa-location-arrow pr-1" />
          {address ? address : "Setup Location"}
        </button>

        <div className="relative w-full">
          <input
            type="text"
            id="location-search"
            className="block p-2.5 pr-8 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300   dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            placeholder="Search for anything"
          />
          <div className="absolute top-0 right-0 h-full flex items-center">
            <i className="fa-solid fa-magnifying-glass text-button-main px-2" />
          </div>
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
