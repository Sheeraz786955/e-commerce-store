import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between mr-20">
            <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                <Image
                  src="/logo.webp"
                  className="h-8 me-3"
                  width={180}
                  height={30}
                  alt="FlowBite Logo"
                />
              </a>
              <p className="w-80 mt-10">
                Small, artisan label that offers a thoughtfully curated
                collection of high quality everyday essentials made.
              </p>
              <div className="w-32 flex mt-10 mb-10 ">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className=" mr-4 hover:cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className=" mr-4 hover:cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faFacebook}
                  className=" hover:cursor-pointer"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div className=" ">
                <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">
                  Company
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="/" className="hover:underline">
                      About
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/" className="hover:underline">
                      Terms of Use
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/" className="hover:underline">
                      How it Works
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/" className="hover:underline">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">
                  Support
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline ">
                      Support Carrer
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/" className="hover:underline">
                      24h Service
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/" className="hover:underline">
                      Quick Chat
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">
                  Contact
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Whatsapp
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Support 24h
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="/" className="hover:underline">
                Dine Market
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
