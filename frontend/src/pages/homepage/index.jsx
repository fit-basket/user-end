import React from "react";
import plant from "../../assets/images/plant.jpeg";
import flower from "../../assets/images/flower.jpeg";
import salad from "../../assets/images/salad.jpeg";
import brownie from "../../assets/images/brownie.jpeg";
import donut from "../../assets/images/donut.jpeg";
import { Link } from "react-router-dom";
import FeaturedShops from "../../components/shops";
import ImageSlider from "../../components/shops";

function Home() {
  const shops = [plant, flower, salad, brownie, donut, plant, plant, plant];

  return (
    <div>
      {/* Background section */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
            <div className="mx-auto max-w-xl text-center">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Homegrown Goodness,
                <strong className="font-extrabold text-button-main sm:block">
                  Beyond Your Door.
                </strong>
              </h1>

              <p className="mt-4 sm:text-xl/relaxed">
                Explore a world of Homegrown, Handmade, Heartfelt delights, from
                savory bites to sweet creations, all crafted with love and
                passion for food and artistry.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/"
                  className="block w-full rounded px-12 py-3 text-sm font-bold sm:w-auto 
                text-white  dark:text-white  dark:focus:ring-button-dark bg-button-main hover:bg-button-light"
                >
                  Explore Purplepreneurs
                </Link>

                <Link
                  className="block w-full rounded px-12 py-3 text-sm font-bold text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-button-main sm:w-auto"
                  to="/"
                >
                  Join as a Purplepreneur
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content container */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl mt-4 text-start purple_subheading" id="cakes">
          Featured Purplepreneurs
        </h2>
        {/* Add your content here */}
        <ImageSlider images={shops} />
      </div>
    </div>
  );
}

export default Home;
