import React from "react";
import { Link } from "react-router-dom";

export default function NotfoundPage() {
  return (
    <div className="flex flex-col gap-2">
      Page Not Found !!
      <Link to={"/"}>HomePage</Link>
    </div>
  );
}
