import React from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
export default function Head() {
  return (
    <div className="flex">
      <div className="w-1/2 m-auto ml-32 ">
        <div className="w-28 h-8 bg-blue-100 text-blue-600 font-bold text-center mt-10 pt-1">
          Sale 70%
        </div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-6xl w-96 mt-10 mb-10">
          An Industrial Take on Streetwear
        </h1>
        <p className="w-80 mb-10">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <div className="mb-8">
          <Button>Start Shopping</Button>
        </div>
        <div className="flex w-3/4 justify-between">
          <div>
            <Image
              src="/images/Featured1.png"
              width={100}
              height={100}
              alt="not"
            />
          </div>
          <div>
            <Image
              src="/images/Featured2.png"
              width={100}
              height={100}
              alt="not"
            />
          </div>
          <div>
            <Image
              src="/images/Featured3.png"
              width={100}
              height={100}
              alt="not"
            />
          </div>
          <div>
            <Image
              src="/images/Featured4.png"
              width={100}
              height={100}
              alt="not"
            />
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="w-3/4 bg-[#ffece3] h-3/4 rounded-full mt-10 mb-10 pb-52 pt-52"></div>
      </div>
    </div>
  );
}
