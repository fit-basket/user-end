import React, { useContext, useState } from "react";
import PricingCard from "./PricingCard";
import { SubscriptionContext } from "../../context/SubscriptionContext";

function Plans() {
  const [isChecked, setIsChecked] = useState(false);
  const { setSubscriptionData } = useContext(SubscriptionContext);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setSubscriptionData([]);
  };
  const pricingData = [
    {
      id: "1",
      head: "Breakfast",
      price: isChecked ? "2000" : "700",
      desc: "Morning bliss served on a plate – our breakfast specials",
      features: [
        "Flexible scheduling",
        "Fully customizable",
        "1 complimentary Smoothie each week",
      ],
    },
    {
      id: "2",
      head: "Lunch",
      price: isChecked ? "4000" : "1200",
      desc: "Indulge in a delicious midday escape with our lunch options",
      features: [
        "Flexible scheduling",
        "Fully customizable",
        "1 complimentary Power Snack each week",
      ],
    },
    {
      id: "3",
      head: "Dinner",
      price: isChecked ? "3000" : "900",
      desc: "Dinner perfection served fresh, just for you",
      features: [
        "Flexible scheduling",
        "Fully customizable",
        "1 complimentary Health Jar each week",
      ],
    },
  ];
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Craft Your Flavorful Journey
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            No commitments, except to yourself. You can pause, cancel or change
            your plan at any time.
          </p>
        </div>
        <label className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center mb-5">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="sr-only"
          />
          <span className="label flex items-center text-sm font-medium text-black">
            Weekly
          </span>
          <span
            className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
              isChecked ? "bg-button-main" : "bg-[#CCCCCE]"
            }`}
          >
            <span
              className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
                isChecked ? "translate-x-[28px]" : ""
              }`}
            ></span>
          </span>
          <span className="label flex items-center text-sm font-medium text-black">
            Monthly
          </span>
        </label>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {pricingData.map(({ head, price, desc, features, id }) => (
            <PricingCard
              key={id}
              head={head}
              price={price}
              desc={desc}
              isChecked={isChecked}
              features={features}
              id={id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Plans;
