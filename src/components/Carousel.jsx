import React from 'react';
export default function Carousel() {
  return (
    <div className="flex self-stretch justify-start items-start flex-row gap-[48px] p-[64px] bg-[#FFFFFF] opacity-80 h-[478px]">
      <div
        className="flex flex-1 self-stretch justify-center items-center flex-col"
        style={{
          background: 'url(https://placehold.co/1072x350)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          objectFit: 'cover'
        }}
        src="https://placehold.co/1072x350"></div>
    </div>
  );
}