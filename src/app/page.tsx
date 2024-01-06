import Image from "next/image";
import Head from "@/components/Head";
import Promotion from "@/components/Promotion";
import Products from "@/components/Products";
import Quality from "@/components/Quality";

export default function Home() {
  return (
    <main>
      <Head />
      <Promotion />
      <Products />
      <Quality />
    </main>
  );
}
