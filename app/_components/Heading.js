"use client";

import React from "react";
import { useNavigation } from "./NavigationContext";

function Heading() {
  const { title } = useNavigation();
  // const title = "Industy Experts";

  return <h2 className="text-white font-bold text-lg">{title}</h2>;
}

export default Heading;
