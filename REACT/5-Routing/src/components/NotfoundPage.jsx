import React from "react";
import { Link } from "react-router-dom";

export default function NotfoundPage() {
  return (
    <div className="flex flex-col gap-2">
      Notfoundpage
      <Link to={"/"}>Home from link</Link>
    </div>
  );
}

{
  // we can also use this anchor tag but usually it before it rerenders it refers the page again
  /* <a href="/">Home from a</a> */
}
