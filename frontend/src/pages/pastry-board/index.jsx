import React, { useState } from "react";

import Product from "../../components/products";
import { cakeList } from "../../constants/products";

import cake from "../../assets/images/blur_edges.jpg";
import down from "../../assets/images/down.gif";

import "./index.css";
import Modal from "../../components/modals";

export default function PastryBoard() {
  const [open, setOpen] = useState(false);
  const [modalItem, setModalItem] = useState({});

  const [selectedColor, setSelectedColor] = useState([0]);
  const [selectedSize, setSelectedSize] = useState([2]);

  function scrollToElement() {
    const element = document.getElementById("cakes");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="h-screen">
      <div className="container mx-auto px-4">
        <div className="lg:flex items-center">
          <div className="lg:w-[45rem]">
            <img src={cake} alt="" className="scale-x-[-1]" />
          </div>
          <div className="flex-1 justify-center mb-7">
            <h1 className="text-8xl font-bold pastry_heading mb-2">
              Slice of Paradise
            </h1>
            <p className="text-3xl pastry_subheading mb-10">
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
        <div>
          <h2
            className="text-3xl text-start pastry_subheading pastry_topics"
            id="cakes"
          >
            Cakes
          </h2>
          <Product
            products={cakeList}
            setOpen={setOpen}
            setModalItem={setModalItem}
          />
        </div>
        <div>
          <h2
            className="text-3xl text-start pastry_subheading pastry_topics"
            id="cakes"
          >
            Jar cakes
          </h2>
          <Product
            products={cakeList}
            setOpen={setOpen}
            setModalItem={setModalItem}
          />
        </div>
        <div>
          <h2
            className="text-3xl text-start pastry_subheading pastry_topics"
            id="cakes"
          >
            Cup Cakes
          </h2>
          <Product
            products={cakeList}
            setOpen={setOpen}
            setModalItem={setModalItem}
          />
        </div>
        <div>
          <h2
            className="text-3xl text-start pastry_subheading pastry_topics"
            id="cakes"
          >
            Brownies
          </h2>
          <Product
            products={cakeList}
            setOpen={setOpen}
            setModalItem={setModalItem}
          />
        </div>
        <div>
          <h2
            className="text-3xl text-start pastry_subheading pastry_topics"
            id="cakes"
          >
            CheeseCakes
          </h2>
          <Product
            products={cakeList}
            setOpen={setOpen}
            setModalItem={setModalItem}
          />
        </div>
      </div>
      <Modal
        open={open}
        setOpen={setOpen}
        modalItem={modalItem}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
    </div>
  );
}
