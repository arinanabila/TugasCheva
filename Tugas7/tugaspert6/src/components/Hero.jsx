import React from "react";

const Hero = () => {
  return (
    <main className="flex flex-col md:flex-row md:h-[calc(100vh-160px)] bg-[#f7f4ed]">
      <div className="flex-1 flex items-center pl-6 pr-6 md:pl-[120px] md:pr-[72px]">
        <div>
          <h1 className="text-[60px] md:text-[84px] font-serif font-medium leading-[1.1] mb-6 text-[#242424]">
            Human <br />
            stories & ideas
          </h1>
          <p className="text-xl text-[#242424] mb-6">
            A place to read, write, and deepen your understanding
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full text-base font-semibold">
            Start reading
          </button>
        </div>
      </div>

      <div className="flex-1">
        <img 
          src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png"
          alt="Hero"
          className="w-full h-auto md:h-full object-cover md:object-contain md:object-right"
        />
      </div>
    </main>
  );
};

export default Hero;
