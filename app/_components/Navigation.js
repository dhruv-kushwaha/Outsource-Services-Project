import React from "react";
import NavItem from "./NavItem";

function Navigation() {
  return (
    <div className="flex flex-col gap-4 mt-10">
      <NavItem name="Industry Experts" />
      <NavItem name="Dedicated Team" />
      <NavItem name="Outcome Focused" />
      <NavItem name="High Quality Service" />
      <NavItem name="Cyber Security Expert" />
    </div>
  );
}

export default Navigation;
