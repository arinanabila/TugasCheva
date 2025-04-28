import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center pr-6 md:pr-[72px] pl-6 md:pl-[120px] py-4 border-b border-black">
      <div className="text-3xl font-bold font-serif">Medium</div>
      <nav className="hidden md:flex items-center space-x-6 text-sm">
        <a href="#" className="hover:underline">Our story</a>
        <a href="#" className="hover:underline">Membership</a>
        <a href="#" className="hover:underline">Write</a>
        <a href="#" className="hover:underline">Sign in</a>
        <a href="#" className="bg-black text-white px-4 py-2 rounded-full font-semibold">Get started</a>
      </nav>
    </header>
  );
};

export default Header;
