import React from "react";

const HeroCompo = () => {
  return (
    <div className="mt-[200px]">
      <h1 className="text-center text-[30px] mt-10 mx-auto w-[600px] my-3 font-bold ">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae ratione
        culpa nisi consequatur, aliquid dicta?
      </h1>
      <p className="text-center w-[300px] text-gray-400 mx-auto">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit nisi
        ratione facilis cum, earum tempore aspernatur molestias sapiente tenetur
      </p>
      <div className="my-5 text-center space-x-8">
        <button className="px-4 py-2 border border-blue-500 rounded-xl text-white bg-blue-500 ">
          Daftar Sertifikasi
        </button>
        <button className="border px-4 py-2 border-blue-500 text-blue-500 rounded-xl ">
          Lihat Sertifkasi
        </button>
      </div>
    </div>
  );
};

export default HeroCompo;
