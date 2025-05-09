import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

  return (
      <nav className="absolute top-0 left-0 w-full flex gap-10 py-6 items-center px-20 bg-transparent z-10 text-white">
        <h1 className="text-amber-400 font-bold text-2xl">NONSKUY</h1>
        <ul className="flex gap-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movie</Link>
          </li>
        </ul>
      </nav>
  );
}
