import Image from "next/image";
function Header() {
  return (
    <div className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
      <h1 className="w-3/12">
        <a href="">
          <Image src="/images/logo.png" alt="" width={200} height={400} />
        </a>
      </h1>
      {/* <!-- navigation -->*/}
      <nav className="nav font-semibold text-lg">
        <ul className="flex items-center justify-start">
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
            <a href="">Female</a>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <a href="">Male</a>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <a href="">Kids</a>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <a href="">All Products</a>
          </li>
        </ul>
      </nav>

      <div className="w-96 flex justify-around">
        <div>
          <Image
            src="images/search-svgrepo-com.svg"
            alt=""
            height={30}
            width={40}
          />
        </div>
        <div>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-none block  pl-5 p-2.5"
            type="search"
            placeholder="Search..."
          />
        </div>
        <a href="">
          <div className="items-end ">
            <Image
              className=" w-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 "
              src="/images/cart-shopping-svgrepo-com.svg"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </a>
      </div>
    </div>
  );
}
export default Header;
