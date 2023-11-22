import React, { useEffect, useState } from "react";

// import Product from "../../components/products";
// import { cakeList } from "../../constants/products";
// import Modal from "../../components/modals/CakeModal";

import cake from "../../assets/images/blur_edges.jpg";
import down from "../../assets/images/down.gif";

import "./index.css";
import axios from "../../utils/axiosConfig";
import { useParams } from "react-router-dom";
import ImageSlider from "../../components/slider";

export default function BusinessLanding() {
  const { id } = useParams();

  // const [open, setOpen] = useState(false);
  // const [modalItem, setModalItem] = useState({});

  // const [selectedColor, setSelectedColor] = useState([0]);
  // const [selectedSize, setSelectedSize] = useState([2]);

  const [categories, setCategories] = useState([]);

  function scrollToElement() {
    const element = document.getElementById("cakes");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    const getCategory = () => {
      // dispatch(getCategoriesStart());
      axios
        .get(`/products/category/${id}`)
        .then((res) => {
          setCategories(res.data.data);
          // dispatch(getCategoriesSuccess(res.data.data));
        })
        .catch((err) => {
          console.log("ERROR:", err);
          // dispatch(getCategoriesFailure(err));
        });
    };

    if (id) {
      getCategory();
    }
  }, [id]);

  return (
    <div className="container mx-auto px-4">
      <div className="lg:flex items-center">
        <div className="lg:w-[45rem]">
          <img src={cake} alt="" className="scale-x-[-1]" />
        </div>
        <div className="flex-1 justify-center mb-7">
          <h1 className="text-8xl font-bold pastry_heading mb-2">
            Slice of Paradise
          </h1>
          <p className="text-3xl purple_subheading mb-10">
            Your Journey to Dessert Nirvana
          </p>
          {/* <ChevronDoubleDownIcon className="h-5 w-5 m-auto text-gray-400" /> */}
          <img
            src={down}
            alt=""
            srcSet=""
            className="m-auto cursor-pointer"
            onClick={scrollToElement}
          />
        </div>
      </div>
      {Object.entries(categories).map(([key, value]) => (
        <div>
          <h2
            className="text-3xl text-start purple_subheading pastry_topics"
            id="cakes"
          >
            {key}
          </h2>
          <ImageSlider images={value} maxImage={5} imageType="rect" />

          {/* <Product
            products={cakeList}
            setOpen={setOpen}
            setModalItem={setModalItem}
          /> */}
        </div>
      ))}
    </div>
    // <Modal
    //   open={open}
    //   setOpen={setOpen}
    //   modalItem={modalItem}
    //   selectedColor={selectedColor}
    //   setSelectedColor={setSelectedColor}
    //   selectedSize={selectedSize}
    //   setSelectedSize={setSelectedSize}
    // />
  );
}
