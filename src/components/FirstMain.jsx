import React from 'react';
export default function FirstMain(props) {
  return (
    <div
      className="flex self-stretch justify-start items-center flex-col py-[160px] px-[64px]"
      style={{
        background: 'url(https://files.oaiusercontent.com/file-D8MUNtrUpXapwDVjHyF6SG?se=2024-12-16T17%3A13%3A42Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D140cc753-2029-4bb2-82a5-400a3d48d282.webp&sig=KBzOQyHAkRd1cWro/waij12JEM6XpUYyGighB2ra77s%3D)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        objectFit: 'cover',
      }}
      src="https://avatars.mds.yandex.net/i?id=38f576b9eb395c2e57d7ec8782314dbf17cf0519-12421984-images-thumbs&n=13">
      <div className="flex justify-start items-center flex-col gap-2">
        <p className="self-stretch text-[#ffff] text-7xl font-['Inter'] text-center font-bold">
          Languages&nbsp;&nbsp;
        </p>
        {/* <p className="self-stretch text-[#fff] text-sm font-['Inter'] text-center">
          with us
        </p> */}
      </div>
    </div>
  );
}
