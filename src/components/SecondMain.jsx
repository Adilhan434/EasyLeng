import React from 'react';
export default function SecondMain() {
  return (
    <div className="flex self-stretch justify-start items-start flex-col gap-[48px] p-[64px] bg-[#FFFFFF]">
      <div className="flex justify-start items-start flex-col gap-2">
        <p className="self-stretch text-[#1E1E1E] text-2xl font-['Inter'] font-semibold">
          EasyLeng
        </p>
        <p className="self-stretch text-[#757575] text-xl font-['Inter']">
          abilities
        </p>
      </div>
      <div className="flex self-stretch justify-start items-start flex-col gap-6">
        <div className="min-w-[240px] flex flex-wrap self-stretch justify-start items-start flex-row gap-6 p-[24px] bg-[#FFFFFF] border-solid border-[#D9D9D9] border rounded-lg">
          <div
            className="min-w-[160px] flex justify-center items-center flex-col w-[160px] h-[160px]"
            style={{
              background: 'url(https://placehold.co/160x160)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              objectFit: 'cover',
              width: '160px'
            }}
            src="https://placehold.co/160x160"></div>
          <div className="min-w-[160px] flex flex-1 justify-start items-start flex-col gap-4">
            <div className="flex self-stretch justify-start items-start flex-col gap-2">
              <p className="self-stretch text-[#1E1E1E] text-2xl font-['Inter'] font-semibold">
                New languages
              </p>
              <p className="self-stretch text-[#757575] font-['Inter']">
                Body text for whatever you’d like to say. Add main takeaway
                points, quotes, anecdotes, or even a very very short story.{' '}
              </p>
            </div>
            <div className="flex self-stretch justify-start items-center flex-row gap-4">
              <div className="flex justify-center items-center flex-row gap-2 p-3 bg-[#E3E3E3] border-solid border-[#767676] border rounded-lg">
                <span className="text-[#1E1E1E] font-['Inter']">Text us</span>
              </div>
            </div>
          </div>
        </div>
        <div className="min-w-[240px] flex flex-wrap self-stretch justify-start items-start flex-row gap-6 p-[24px] bg-[#FFFFFF] border-solid border-[#D9D9D9] border rounded-lg">
          <div
            className="min-w-[160px] flex justify-center items-center flex-col w-[160px] h-[160px]"
            style={{
              background: 'url(https://placehold.co/160x160)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              objectFit: 'cover',
              width: '160px'
            }}
            src="https://placehold.co/160x160"></div>
          <div className="min-w-[160px] flex flex-1 justify-start items-start flex-col gap-4">
            <div className="flex self-stretch justify-start items-start flex-col gap-2">
              <p className="self-stretch text-[#1E1E1E] text-2xl font-['Inter'] font-semibold">
                Study online
              </p>
              <p className="self-stretch text-[#757575] font-['Inter']">
                Learning languages can be avaliable from everywhere and at
                anytime. Our best teacher can make it even esier thier pure
                knowledge. Press the button try trial lesson!
              </p>
            </div>
            <div className="flex self-stretch justify-start items-center flex-row gap-4">
              <div className="flex justify-center items-center flex-row gap-2 p-3 bg-[#E3E3E3] border-solid border-[#767676] border rounded-lg">
                <span className="text-[#1E1E1E] font-['Inter']">
                  Study online
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="min-w-[240px] flex flex-wrap self-stretch justify-start items-start flex-row gap-6 p-[24px] bg-[#FFFFFF] border-solid border-[#D9D9D9] border rounded-lg">
          <div
            className="min-w-[160px] flex justify-center items-center flex-col w-[160px] h-[160px]"
            style={{
              background: 'url(https://placehold.co/160x160)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              objectFit: 'cover',
              width: '160px'
            }}
            src="https://placehold.co/160x160"></div>
          <div className="min-w-[160px] flex flex-1 justify-start items-start flex-col gap-4">
            <div className="flex self-stretch justify-start items-start flex-col gap-2">
              <p className="self-stretch text-[#1E1E1E] text-2xl font-['Inter'] font-semibold">
                Get ready for exams
              </p>
              <p className="self-stretch text-[#757575] font-['Inter']">
                Body text for whatever you’d like to say. Add main takeaway
                points, quotes, anecdotes, or even a very very short story.{' '}
              </p>
            </div>
            <div className="flex self-stretch justify-start items-center flex-row gap-4">
              <div className="flex justify-center items-center flex-row gap-2 p-3 bg-[#E3E3E3] border-solid border-[#767676] border rounded-lg">
                <span className="text-[#1E1E1E] font-['Inter']">
                  Try a trial lesson
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}