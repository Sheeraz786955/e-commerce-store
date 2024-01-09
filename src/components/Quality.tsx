import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Quality() {
  return (
    <div>
      <div className="flex mt-32 pb-10">
        <div className="w-[55%]"> </div>
        <div className="w-[35%]">
          <h1 className="text-5xl font-bold">
            Unique and Authentic Vintage Designer Jewellery
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap pb-10">
        <div className="w-1/2">
          <div className="flex mt-8">
            <div className="w-56 m-auto">
              <h1 className="text-xl font-bold">
                M others Using Good Quality Materials
              </h1>
              <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
            <div className="w-56">
              <h1 className="text-xl font-bold">100% Handmade Products</h1>
              <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="flex justify-end mt-16">
            <div className="w-56 m-auto">
              <h1 className="text-xl font-bold">Modern Fashion Design</h1>
              <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
            <div className="w-56">
              <h1 className="text-xl font-bold">Discount for Bulk Orders</h1>
              <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex">
            <div className="w-1/2">
              <div className="w-72">
                <Image
                  className="w-full h-auto"
                  src="/images/feature.webp"
                  alt="not found"
                  width={220}
                  height={100}
                />
              </div>
            </div>
            <div className="w-64">
              <p className="pb-12">
                This piece is ethically crafted in our small family-owned
                workshop in Peru with unmatched attention to detail and care.
                The Natural color is the actual natural color of the fiber,
                undyed and 100% traceable.
              </p>
              <Button>See All Products</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
