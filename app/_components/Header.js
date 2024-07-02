import React from "react";

function Header({ data }) {
  const desc =
    data.data.at(0)?.attributes?.description ??
    `Lorem ipsum neque ornare aenean euismod elementum nisi quis eleifend
        quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna
        neque viverra`;

  return (
    <div className="flex justify-center items-center gap-4 flex-col">
      <h3 className="font-semibold text-pink-700 uppercase">Why Choose us</h3>
      <h1 className="text-violet-950 font-bold text-3xl">
        We Different From Others
      </h1>
      <p className="max-w-2xl leading-5 text-center">{desc}</p>
    </div>
  );
}

export default Header;
