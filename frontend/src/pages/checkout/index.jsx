import { Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { weeklyPricingData } from "../../constants/plans";
import { SubscriptionContext } from "../../context/SubscriptionContext";
import { Link } from "react-router-dom";
import empty from "../../assets/images/empty.png";

export default function Checkout({ isCheckout, setIsCheckout }) {
  const { subscriptionData, handlePlanUpdate, priceTotal } =
    useContext(SubscriptionContext);
  return (
    <Transition.Root show={isCheckout} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setIsCheckout}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div
                      className={`flex-1 grid overflow-y-auto px-4 py-6 sm:px-6 ${
                        !subscriptionData.length ? "items-center" : ""
                      }`}
                      style={{ gridTemplateRows: "auto 1fr" }}
                    >
                      <div className="">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Shopping cart
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setIsCheckout(false)}
                            >
                              <span className="absolute -inset-0.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 ">
                        <div className="flow-root">
                          {subscriptionData.length ? (
                            <ul className="-my-6 divide-y divide-gray-300">
                              {weeklyPricingData.map(
                                ({ head, price, id, img }) =>
                                  subscriptionData.includes(id) && (
                                    <li key={id} className="flex py-6">
                                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md ">
                                        <img
                                          src={img}
                                          alt={head}
                                          className="h-full w-full object-cover object-center"
                                        />
                                      </div>

                                      <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                          <div className="flex justify-between text-base font-medium text-gray-900">
                                            <h3>{head}</h3>
                                            <p className="ml-4">₹{price}</p>
                                          </div>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm">
                                          <p className="text-gray-500">
                                            Qty {1}
                                          </p>

                                          <div className="flex">
                                            <button
                                              type="button"
                                              className="font-medium text-red-500 hover:text-red-500"
                                              onClick={() => {
                                                handlePlanUpdate(id, price);
                                              }}
                                            >
                                              Remove
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  )
                              )}
                            </ul>
                          ) : (
                            <div className="flex flex-col items-center justify-center h-full">
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                                <img
                                  src={empty}
                                  alt="empty cart"
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
                              <p className="mt-4 text-gray-500 text-center">
                                Wow, such empty
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-300 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>₹{priceTotal}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <Link
                          to="/"
                          className="flex justify-center items-center w-full rounded px-12 py-3 text-sm font-bold  
                          text-white  dark:text-white  dark:focus:ring-button-dark bg-button-main hover:bg-button-light"
                        >
                          Checkout
                        </Link>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setIsCheckout(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
