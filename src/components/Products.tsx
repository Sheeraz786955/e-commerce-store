import Image from "next/image";
export default function Products() {
  return (
    <div>
      <div className="text-center font-bold mt-28 mb-14">
        <span className="text-blue-600 font-semibold">PRODUCTS</span>
        <h2 className="text-4xl mt-5">Check What We Have</h2>
      </div>
      <div className="flex justify-center">
        <div className="hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <Image
            src="/images/pro1.png"
            width={400}
            height={100}
            alt="not found"
          />
          <p className=" pt-3 font-semibold pb-2 text-xl">
            Brushed Raglan Sweatshirt
          </p>
          <span className="font-semibold text-xl">$195</span>
        </div>
        <div className="hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <Image
            src="/images/pro2.png"
            width={400}
            height={100}
            alt="not found"
          />
          <p className=" pt-3 font-semibold pb-2 text-xl">
            Cameryn Sash Tie Dress
          </p>
          <span className="font-semibold text-xl">$545</span>
        </div>
        <div className="hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <Image
            src="/images/pro3.png"
            width={400}
            height={100}
            alt="not found"
          />
          <p className=" pt-3 font-semibold pb-2 text-xl">Flex Sweatshirt</p>
          <span className="font-semibold text-xl">$175</span>
        </div>
      </div>
    </div>
  );
}
