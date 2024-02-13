import Image from "next/image";
import { Button } from "./ui/button";
export default function Promotion() {
  return (
    <div>
      <div className="text-center font-bold mt-28 mb-8">
        <span className="text-blue-600 font-semibold">PROMOTION</span>
        <h2 className="text-4xl mt-5">Our Promotions Events</h2>
      </div>
      <div className="flex justify-start  flex-wrap">
        <div className="w-1/2 flex flex-col">
          <div className="flex m-auto bg-[#d6d6d8] pt-4">
            <div className="mt-5 pl-10">
              <h1 className="font-extrabold text-4xl">GET UP TO</h1>
              <h1 className="font-extrabold text-4xl"> 60%</h1>
              <p className="text-xl mt-3 pb-5">
                For the summer <br /> season
              </p>
            </div>
            <div className="pr-10">
              <Image
                src="/event1.webp"
                width={250}
                height={300}
                alt="not found:"
              />
            </div>
          </div>
          <div className="text-center m-auto bg-black text-white px-[101px] py-10 mt-5">
            <h1 className="font-extrabold text-4xl mb-5">GET 30% Off</h1>
            <p>USE PROMO CODE</p>
            <div className="w-80 bg-slate-500 text-white text-center whitespace-pre mt-1 rounded-sm py-2 font-semibold hover:cursor-pointer">
              D I N E W E E K E N D S A L E
            </div>
          </div>
        </div>
        <div className="bg-[#efe1c7] pl-5 mr-5">
          <div className="pt-5 ">
            <div className=""> Flex Sweatshirt</div>
            <div className="flex mb-3">
              <div className="line-through">$100.00</div>
              <div className="font-bold pl-2"> $75.00</div>
            </div>
            <div>
              <Image
                src="/event2.webp"
                width={280}
                height={300}
                alt="Not Fount"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#d6d6d8] pl-5">
          <div className="pt-5 ">
            <div className="text-xl">Flex Push Button Bomber</div>
            <div className="flex mb-3">
              <div className="line-through"> $225.00</div>
              <div className="font-bold pl-2"> $190.00</div>
            </div>
            <div>
              <Image
                src="/event3.webp"
                width={270}
                height={300}
                alt="Not Fount"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
