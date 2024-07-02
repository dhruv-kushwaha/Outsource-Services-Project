"use client";

import { useNavigation } from "./NavigationContext";

export default function Description({ data }) {
  const { title } = useNavigation();

  const item = data.data.filter((item) => item.attributes.nav_title === title);

  const description = item.at(0).attributes.nav_desc;

  // console.log(description);

  return <p className="text-white">{description}</p>;
}
