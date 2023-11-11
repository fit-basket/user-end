import React, { useContext } from "react";
import { SubscriptionContext } from "../../context/SubscriptionContext";

function PricingCard({ head, price, desc, isChecked, features, id }) {
  const { subscriptionData, handlePlanUpdate } =
    useContext(SubscriptionContext);
  return (
    <div
      className={`flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg  
      ${
        subscriptionData.includes(id)
          ? "border-2 border-button-dark bg-button-lighter"
          : "border border-gray-100"
      } 
      shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white`}
    >
      <h3 className="mb-4 text-2xl font-semibold">{head}</h3>
      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        {desc}
      </p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold">₹{price}</span>
        <span className="text-gray-500 dark:text-gray-400">
          /{isChecked ? "month" : "week"}
        </span>
      </div>

      <ul className="mb-8 space-y-4 text-left">
        {features.map((feature) => (
          <li className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <small>{feature}</small>
          </li>
        ))}
      </ul>
      <button
        onClick={() => handlePlanUpdate(id, price)}
        className={`text-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-button-dark 
        // ${
          //   subscriptionData.includes(id)
          //     ? "bg-danger-main hover:bg-danger-dark "
          // :
          "bg-red-500 hover:bg-button-light "
        }`}
      >
        {subscriptionData.includes(id) ? "Remove" : "Add"}
      </button>
    </div>
  );
}

export default PricingCard;
