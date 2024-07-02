"use client";

import { useNavigation } from "./NavigationContext";

function NavItem({ name, id }) {
  const { setTitle, title, setId } = useNavigation();

  return (
    <div
      className={`relative translate-x-56 rounded-l-full  flex items-center w-80 justify-between px-6 py-3 hover:bg-pink-700 cursor-pointer hover:text-white ${
        title === name ? "bg-pink-700 text-white" : "bg-gray-200"
      }`}
      onClick={() => {
        setTitle(name);
        setId(id);
      }}
    >
      <span className="font-semibold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-6"
        >
          <path
            fill-rule="evenodd"
            d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
            clip-rule="evenodd"
          />
        </svg>
      </span>

      <span>
        <p className="font-semibold">{name}</p>
      </span>
    </div>
  );
}

export default NavItem;
