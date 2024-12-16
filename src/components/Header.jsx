import React from 'react';
export default function Header() {
  return (
    <div
      className="flex flex-wrap justify-start items-center flex-row gap-x-6 p-[32px] bg-[#FFFFFF] border-solid border-[#D9D9D9] border-b w-[1200px] h-[99px]"
      style={{ width: '1500px' }}>
      <div className="flex justify-start items-center flex-row gap-6">
        <svg
          width="40"
          height="39"
          viewBox="0 0 40 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 2H14.1666C12.6195 2 11.1358 2.61458 10.0419 3.70854C8.94789 4.80251 8.33331 6.28624 8.33331 7.83333C8.33331 9.38043 8.94789 10.8642 10.0419 11.9581C11.1358 13.0521 12.6195 13.6667 14.1666 13.6667M20 2V13.6667M20 2H25.8333C26.5994 2 27.3579 2.15088 28.0656 2.44404C28.7734 2.73719 29.4164 3.16687 29.9581 3.70854C30.4998 4.25022 30.9295 4.89328 31.2226 5.60101C31.5158 6.30875 31.6666 7.06729 31.6666 7.83333C31.6666 8.59938 31.5158 9.35792 31.2226 10.0657C30.9295 10.7734 30.4998 11.4164 29.9581 11.9581C29.4164 12.4998 28.7734 12.9295 28.0656 13.2226C27.3579 13.5158 26.5994 13.6667 25.8333 13.6667M20 13.6667H14.1666M20 13.6667H25.8333M20 13.6667V25.3333M14.1666 13.6667C12.6195 13.6667 11.1358 14.2812 10.0419 15.3752C8.94789 16.4692 8.33331 17.9529 8.33331 19.5C8.33331 21.0471 8.94789 22.5308 10.0419 23.6248C11.1358 24.7188 12.6195 25.3333 14.1666 25.3333M25.8333 13.6667C25.0673 13.6667 24.3087 13.8175 23.601 14.1107C22.8933 14.4039 22.2502 14.8335 21.7085 15.3752C21.1668 15.9169 20.7372 16.5599 20.444 17.2677C20.1509 17.9754 20 18.734 20 19.5C20 20.266 20.1509 21.0246 20.444 21.7323C20.7372 22.4401 21.1668 23.0831 21.7085 23.6248C22.2502 24.1665 22.8933 24.5961 23.601 24.8893C24.3087 25.1824 25.0673 25.3333 25.8333 25.3333C26.5994 25.3333 27.3579 25.1824 28.0656 24.8893C28.7734 24.5961 29.4164 24.1665 29.9581 23.6248C30.4998 23.0831 30.9295 22.4401 31.2226 21.7323C31.5158 21.0246 31.6666 20.266 31.6666 19.5C31.6666 18.734 31.5158 17.9754 31.2226 17.2677C30.9295 16.5599 30.4998 15.9169 29.9581 15.3752C29.4164 14.8335 28.7734 14.4039 28.0656 14.1107C27.3579 13.8175 26.5994 13.6667 25.8333 13.6667ZM14.1666 25.3333C12.6195 25.3333 11.1358 25.9479 10.0419 27.0419C8.94789 28.1358 8.33331 29.6196 8.33331 31.1667C8.33331 32.7138 8.94789 34.1975 10.0419 35.2915C11.1358 36.3854 12.6195 37 14.1666 37C15.7137 37 17.1975 36.3854 18.2914 35.2915C19.3854 34.1975 20 32.7138 20 31.1667V25.3333M14.1666 25.3333H20"
            stroke="#1E1E1E"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="flex flex-wrap flex-1 justify-end items-start flex-row gap-2">
        <div className="flex justify-center items-center flex-row gap-2 p-2 bg-[#F5F5F5] rounded-lg">
          <span className="text-[#1E1E1E] font-['Inter']">Products</span>
        </div>
        <div className="flex justify-center items-center flex-row gap-2 p-2 rounded-lg">
          <span className="text-[#1E1E1E] font-['Inter']">Solutions</span>
        </div>
        <div className="flex justify-center items-center flex-row gap-2 p-2 rounded-lg">
          <span className="text-[#1E1E1E] font-['Inter']">Community</span>
        </div>
        <div className="flex justify-center items-center flex-row gap-2 p-2 rounded-lg">
          <span className="text-[#1E1E1E] font-['Inter']">Resources</span>
        </div>
        <div
          className="flex justify-center items-center flex-row gap-2 p-2 rounded-lg w-[68px] h-[32px]"
          style={{ width: '68px' }}>
          <span className="text-[#1E1E1E] font-['Inter']">Pricing</span>
        </div>
        <div className="flex justify-center items-center flex-row gap-2 p-2 rounded-lg">
          <span className="text-[#1E1E1E] font-['Inter']">Contact</span>
        </div>
      </div>
      <div
        className="flex justify-start items-center flex-row gap-3 w-[178px]"
        style={{ width: '178px' }}>
        <div className="flex flex-1 justify-center items-center flex-row gap-2 p-2 bg-[#E3E3E3] border-solid border-[#767676] border rounded-lg">
          <span className="text-[#1E1E1E] font-['Inter']">Sign in</span>
        </div>
        <div className="flex flex-1 justify-center items-center flex-row gap-2 p-2 bg-[#2C2C2C] border-solid border-[#2C2C2C] border rounded-lg">
          <span className="text-[#F5F5F5] font-['Inter']">Register</span>
        </div>
      </div>
    </div>
  );
}