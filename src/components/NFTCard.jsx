import React from "react";
import Equilibrium from "../../public/images/image-equilibrium.jpg";
import IconEthereum from "../../public/images/icon-ethereum.svg";
import IconClock from "../../public/images/icon-clock.svg";
import Avatar from "../../public/images/image-avatar.png";
import IconView from "../../public/images/icon-view.svg";
import Image from "next/image";

const NFTCard = () => {
  return (
    <div className="flex flex-col gap-4 justify-center bg-card p-4 rounded-2xl shadow-lg">
      <div className="group relative flex items-center justify-center w-72 h-72  cursor-pointer ">
        <Image className="rounded-md" src={Equilibrium} alt="equilibrium" />
        <Image
          src={IconView}
          className="hidden group-hover:flex absolute z-40"
        />
        <div className="absolute top-0 z-10 w-full h-full rounded-md group-hover:bg-cyan group-hover:opacity-60 delay-75"></div>
      </div>

      <h1 className="text-white font-semibold text-2xl cursor-pointer hover:text-cyan">
        Equilibrium #3429
      </h1>

      <p className="w-72 text-soft-blue text-[18px]">
        Our Equilibrium collection promotes balance and claim.
      </p>

      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <Image className="w-4 h-4" src={IconEthereum} />
          <span className="text-cyan text-md font-bold">0.041ETH</span>
        </div>
        <div className="flex gap-1 items-center">
          <Image className="w-4 h-4" src={IconClock} />
          <span className="text-soft-blue text-sm">3 days left</span>
        </div>
      </div>

      <div className="border border-sm mx-1 border-line"></div>

      <div className="flex items-center gap-6">
        <Image className="w-8 h-8 rounded-full" src={Avatar} />
        <div className="flex gap-1">
          <span className="text-soft-blue">Creation of</span>
          <a href="#" className="text-white cursor-pointer hover:text-cyan">
            Jules Wyvern
          </a>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
