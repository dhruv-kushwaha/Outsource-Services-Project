"use client";

import Image from "next/image";
import React from "react";
import { useNavigation } from "./NavigationContext";

function MainImage() {
  const { id } = useNavigation();
  return (
    <Image
      src={images[id]}
      fill
      alt="Girl Working"
      // objectFit="cover"
      className="rounded-full object-cover"
    />
  );
}

const images = {
  1: "https://res.cloudinary.com/denywakgm/image/upload/v1719913233/pic_xt5pco.jpg",
  2: "https://res.cloudinary.com/denywakgm/image/upload/v1719921470/team_dpmpmf.jpg",
  3: "https://res.cloudinary.com/denywakgm/image/upload/v1719921471/FOCUSED_wkdt32.jpg",
  4: "https://res.cloudinary.com/denywakgm/image/upload/v1719921470/service_sgkayv.webp",
  5: "https://res.cloudinary.com/denywakgm/image/upload/v1719921470/cyber-security_rd4kda.jpg",
};

export default MainImage;
