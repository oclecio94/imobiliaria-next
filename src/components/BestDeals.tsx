import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const BestDeals = () => {
  return (
    <div className="">
      <div className="w-11/12 md:w-1/2 xl:w-1/3 m-auto text-center py-10">
        <h1 className="text-4xl font-bold">Best Deals Not To Be Missed</h1>
        <p className="text-xs p-4 text-gray-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque hic,
          nisi reiciendis itaque optio repellat commodi nihil rem explicabo, qui
          non debitis officiis consectetur sapiente repellendus.
        </p>
      </div>
      <div className="deals w-full  grid lg:grid-flow-col grid-row-2  gap-8">
        <div className="deal relative col-span-2 row-span-2">
          <img
            src="/house7.jpg"
            alt=""
            className="rounded-xl w-full h-full object-cover"
          />
          <div className="w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2">
            <h1 className="text-3xl font-bold">PLACE</h1>
            <p className="flex items-center space-x-2 text-sm">
              <IoLocationOutline />
              Kissimmee.Florida US
            </p>
          </div>
        </div>
        <div className="deal relative col-span-1 row-span-2">
          <img
            src="/house2.jpg"
            alt=""
            className="rounded-xl w-full h-full object-cover"
          />
          <div className="w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2">
            <h1 className="text-3xl font-bold">PLACE</h1>
            <p className="flex items-center space-x-2 text-sm">
              <IoLocationOutline />
              Kissimmee.Florida US
            </p>
          </div>
        </div>
        <div className="deal relative  col-span-1 row-span-1">
          <img
            src="/house3.jpg"
            alt=""
            className="rounded-xl w-full h-full object-cover"
          />
          <div className="w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2">
            <h1 className="text-3xl font-bold">PLACE</h1>
            <p className="flex items-center space-x-2 text-sm">
              <IoLocationOutline />
              Kissimmee.Florida US
            </p>
          </div>
        </div>
        <div className="deal relative col-span-1 row-span-1">
          <img
            src="/house4.jpg"
            alt=""
            className="rounded-xl w-full h-full object-cover"
          />
          <div className="w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2">
            <h1 className="text-3xl font-bold">PLACE</h1>
            <p className="flex items-center space-x-2 text-sm">
              <IoLocationOutline />
              Kissimmee.Florida US
            </p>
          </div>
        </div>
        <div className="deal relative col-span-1 row-span-1">
          <img
            src="/house5.jpg"
            alt=""
            className="rounded-xl w-full h-full object-cover"
          />
          <div className="w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2">
            <h1 className="text-3xl font-bold">PLACE</h1>
            <p className="flex items-center space-x-2 text-sm">
              <IoLocationOutline />
              Kissimmee.Florida US
            </p>
          </div>
        </div>
        <div className="deal relative col-span-1 row-span-1">
          <img src="/house6.jpg" alt="" className="rounded-xl" />
          <div className="w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2">
            <h1 className="text-3xl font-bold">PLACE</h1>
            <p className="flex items-center space-x-2 text-sm">
              <IoLocationOutline />
              Kissimmee.Florida US
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
