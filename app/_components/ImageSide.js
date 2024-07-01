import Image from "next/image";
import React from "react";
import pic from "@/public/pic.jpg";
import circle from "@/public/circle.png";
import dark_circle from "@/public/dark-circle.png";
import Heading from "./Heading";

function ImageSide() {
  return (
    <div className="translate-x-[20rem] ">
      <div className="relative">
        <div className="rounded-full bg-pink-700 z-10 absolute right-0 h-[26rem] opacity-85 w-[26rem] ">
          <div className="absolute -top-10 left-64 z-50">
            <Image src={circle} height={150} width={150} alt="circle" />
          </div>
          <div className="absolute top-[22rem] left-80 z-50">
            <Image src={dark_circle} height={35} width={35} alt="circle" />
          </div>
          <div className="mx-16 my-28 flex flex-col gap-4">
            <Heading />
            <p className="text-white">
              Lorem ultrices neque ornare aenean euismod elementum nisi quis
              eleifend quam adipisc ing
            </p>
          </div>
        </div>
        <div className="rounded-full  z-1 absolute -left-14 h-[26rem]  w-[26rem]">
          <div className="absolute -bottom-4 left-64 z-50">
            <Image
              src={circle}
              height={150}
              width={150}
              alt="circle"
              className="opacity-80"
            />
          </div>
          <Image
            src={pic}
            fill
            alt="Girl Working"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default ImageSide;
