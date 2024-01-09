import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <div className=" text-center mt-40 mb-40">
      <h1 className="text-4xl font-bold pb-10">Subscribe Our Newsletter</h1>
      <p className="pb-10">
        {" "}
        Get the latest information and promo offers directly
      </p>
      <div className="flex w-full max-w-sm items-center space-x-2 m-auto">
        <Input type="email" placeholder="Email" />
        <Button type="submit">Subscribe</Button>
      </div>
    </div>
  );
}
