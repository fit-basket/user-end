import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  UserPlusIcon,
  ArrowRightOnRectangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

// import SearchBar from "./SearchBar";
import logo from "../../assets/logo/logo.png";

import "./index.css";

export default function OutsideNavbar() {
  // misc
  const navigate = useNavigate();

  // state and variables
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // func

  // Login function
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  // Signup function
  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  return (
    <header className="bg-transaparent">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-8"
        aria-label="Global"
      >
        <Link to="/" className="flex lg:flex-1">
          <img className="h-8 w-auto logo" src={logo} alt="" />
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
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
          <div
            onClick={handleLogin}
            className="flex items-center gap-1 text-sm cursor-pointer font-semibold leading-6 text-gray-900"
          >
            <ArrowRightOnRectangleIcon className="w-5 h-5" />
            Login
          </div>
          <div
            onClick={handleSignup}
            className="flex items-center gap-1 text-sm cursor-pointer font-semibold leading-6 text-gray-900"
          >
            <UserPlusIcon className="w-5 h-5" />
            Signup
          </div>
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
            {/* <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src={logo} alt="" />
            </a> */}
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
              <div className="py-6">
                <div
                  onClick={handleLogin}
                  className="-mx-3 flex items-center gap-2 cursor-pointer rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  <ArrowRightOnRectangleIcon className="w-5 h-5" />
                  Login
                </div>
                <div
                  onClick={handleSignup}
                  className="-mx-3 flex items-center gap-2 block cursor-pointer rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  <UserPlusIcon className="w-5 h-5" />
                  Signup
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
