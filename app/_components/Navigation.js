import React from "react";
import NavItem from "./NavItem";

async function Navigation({ data }) {
  return (
    <div className="flex flex-col gap-4 mt-10">
      {data.data.map((item) => (
        <NavItem name={item.attributes.nav_title} key={item.id} id={item.id} />
      ))}
      {/* <NavItem name="Industry Experts" />
      <NavItem name="Dedicated Team" />
      <NavItem name="Outcome Focused" />
      <NavItem name="High Quality Service" />
      <NavItem name="Cyber Security Expert" /> */}
    </div>
  );
}

export default Navigation;
