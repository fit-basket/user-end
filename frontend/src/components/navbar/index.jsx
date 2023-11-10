import { useContext, useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";

import logo from "../../assets/logo/logo.png";
// import breakfast from "../../assets/images/breakfast.png";
// import lunch from "../../assets/images/lunch.png";
// import dinner from "../../assets/images/dinner.png";
// import snack from "../../assets/images/snack.png";

import { Link } from "react-router-dom";
import { SubscriptionContext } from "../../context/SubscriptionContext";
import SearchBar from "./SearchBar";

import "./index.css";
// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function Navbar({ setIsCheckout }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { subscriptionData } = useContext(SubscriptionContext);

  return (
    <header className="bg-transaparent">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-8"
        aria-label="Global"
      >
        <Link to="/" className="flex lg:flex-1">
          {/* <a href="#" className="-m-1.5 p-1.5"> */}
          <img className="h-8 w-auto logo" src={logo} alt="" />
          {/* </a> */}
        </Link>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden flex-1 lg:flex lg:gap-x-12">
          {/* <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Our Menus
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-white ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-start gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <img src={item.icon} alt={item.name} />
                      </div>
                      <div className="flex-auto">
                        <p
                          href={item.href}
                          className="block text-start font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </p>
                        <p className="mt-1 text-start text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link
            to="/plans"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Our Plans
          </Link>
          <Link
            to="/pastry-board"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            The Pastry Board
          </Link>
          <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
            Marketplace
          </a> */}
          <SearchBar />
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div
            className="relative cursor-pointer mr-5"
            onClick={() => setIsCheckout(true)}
          >
            <ShoppingCartIcon
              className="h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-danger-main border-2 border-white rounded-full -top-3 -right-4 dark:border-gray-900">
              {subscriptionData.length}
            </div>
          </div>{" "}
          <Link
            to="/login"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src={logo} alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6">
              <div className="space-y-2 py-6">
                {/* <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Our Menus
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  to="/plans"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Our Plans
                </Link>
                <Link
                  to="/pastry-board"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  The Pastry Board
                </Link>
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a> */}
                <SearchBar />
              </div>
              <div className="py-6">
                <div
                  className="relative cursor-pointer"
                  onClick={() => setIsCheckout(true)}
                >
                  <ShoppingCartIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                  <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-danger-main border-2 border-white rounded-full -top-2 left-4 dark:border-gray-900">
                    {subscriptionData.length}
                  </div>
                </div>{" "}
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
