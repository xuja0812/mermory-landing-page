"use client";

import Image from "next/legacy/image";

const AI = () => {
  return (
    <div className="w-full">
      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="mt-[150px] w-full bg-white flex flex-col items-center justify-center">
          {/* Top text */}
          <div className="mb-16 mx-4 text-center">
            <div className="text-[#001F2E] text-2xl font-semibold max-w-[620px] mb-4">Your personal AI tutor</div>
            <div className="text-[#083347]">Our AI helps you solve your homework questions in seconds.</div>
          </div>
          {/* Main container */}
          <div
            className="flex flex-col relative w-full overflow-hidden z-10"
            style={{
              background: "#FFF3F9",
              borderRadius: 24,
              borderColor: "#EBD5E1",
              borderWidth: 11,
              borderStyle: "solid",
              height: 556,
              minHeight: 556,
              maxWidth: 389,
              width: "calc(100% - 32px)",
            }}
          >
            {/* Lightning bolts background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img
                src="/icons/landing-page/ai-lightning.svg"
                alt="lightning"
                width={25}
                height={40}
                className="absolute left-[225px] top-[30px]"
              />
              <img
                src="/icons/landing-page/ai-lightning.svg"
                alt="lightning"
                width={41}
                height={64}
                className="absolute left-[280px] top-[40px]"
              />
              <img
                src="/icons/landing-page/ai-lightning.svg"
                alt="lightning"
                width={29}
                height={39}
                className="absolute left-[320px] top-[150px]"
              />
            </div>
            {/* Text + button */}
            <div
              className="flex flex-col justify-center z-10 ml-6 mt-6"
              style={{
                gap: 32,
                flex: "0 0 auto",
                minWidth: "400px",
              }}
            >
              {/* Title */}
              <div className="text-[#512E40] text-2xl font-semibold">Answer AI</div>
              {/* Subtitle */}
              <div className="text-[#083347] text-sm max-w-[248px]">
                Whether you crop a question or type into the chat box, AI is ready to help— instantly.
              </div>
              {/* Button */}
              <div
                className="flex flex-row justify-center items-center cursor-pointer"
                style={{
                  background: "#482838",
                  color: "white",
                  height: 45,
                  width: 131,
                  borderRadius: 24,
                  gap: 8,
                }}
              >
                {/* Button text */}
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                >
                  Try it out
                </div>
                {/* Arrow */}
                <img src="/icons/landing-page/ai-arrow.svg" alt="arrow" width={20} height={23} />
              </div>
            </div>
            {/* White space */}
            <div
              style={{
                height: "100%",
                background: "white",
                borderRadius: "40px 40px 10px 10px",
                width: "100%",
                marginTop: 40,
              }}
            ></div>
          </div>
          {/* Main container 2 */}
          <div
            className="flex flex-col items-center mb-72"
            style={{
              gap: 34,
              width: "calc(100% - 32px)",
              maxWidth: 1230,
              height: 600,
              minHeight: 600,
              marginTop: 34,
            }}
          >
            {/* Crop to Chat container */}
            <div
              className="relative overflow-hidden"
              style={{
                background: "#F7F1FF",
                borderColor: "#E0D6EE",
                borderStyle: "solid",
                borderWidth: 11,
                borderRadius: 24,
                height: "100%",
                minHeight: 392,
                width: "100%",
                maxWidth: 389,
              }}
            >
              {/* Crop to chat text */}
              <div className="flex flex-col gap-6 max-w-[518px] mt-6 ml-6">
                {/* Title */}
                <div style={{ fontSize: 24, fontWeight: 600, color: "#5E5548" }}>Crop to Chat</div>
                {/* Subtitle */}
                <div style={{ fontSize: 16, color: "#083347" }}>
                  Crop any part of your PDF or image to get instant answers.
                </div>
              </div>
              {/* Crop to chat design */}
              <div>
                <img
                  src="/icons/landing-page/crop-to-chat/design.svg"
                  alt="crop to chat"
                  width={400}
                  height={200}
                  style={{
                    position: "absolute",
                    bottom: 0,
                  }}
                />
              </div>
            </div>
            {/* AI Chat Box container */}
            <div
              className="relative overflow-hidden"
              style={{
                background: "#FFF8E1",
                borderColor: "#E4D8C4",
                borderStyle: "solid",
                borderWidth: 11,
                borderRadius: 24,
                height: "100%",
                minHeight: 392,
                width: "100%",
                maxWidth: 389,
              }}
            >
              {/* AI Chat Box text */}
              <div
                className="flex flex-col"
                style={{
                  gap: 24,
                  maxWidth: 518,
                  marginTop: 32,
                  marginLeft: 32,
                }}
              >
                {/* Title */}
                <div style={{ fontSize: 24, fontWeight: 600, color: "#5E5548" }}>AI Chat Box</div>
                {/* Subtitle */}
                <div style={{ fontSize: 16, color: "#083347" }}>Type your questions — get instant answers from AI</div>
              </div>
              {/* AI Chat Box design */}
              <div className="flex items-center">
                <img
                  src="/icons/landing-page/ai-chat-box/design.svg"
                  alt="AI chat box"
                  width={400}
                  height={200}
                  style={{
                    position: "absolute",
                    bottom: -50,
                    left: -15,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="mt-[150px] w-full bg-white flex flex-col items-center justify-center">
          {/* Top text */}
          <div className="mb-16 text-center">
            <div className="text-[#001F2E] text-3xl xl:text-4xl font-semibold max-w-[620px] mb-4">
              Your personal AI tutor
            </div>
            <div className="text-[#083347] text-xl xl:text-2xl">
              Our AI helps you solve your homework questions in seconds.
            </div>
          </div>
          {/* Main container */}
          <div className="flex flex-row relative w-full min-w-0 bg-[#FFF3F9] rounded-[24px] border-[11px] border-solid border-[#EBD5E1] h-[505px] min-h-[505px] max-w-[1230px] mx-auto overflow-hidden">
            {/* Lightning bolts */}
            <img
              src="/icons/landing-page/ai-lightning.svg"
              alt="lightning"
              width={84}
              height={131}
              style={{
                position: "absolute",
                left: 404,
                top: 30,
              }}
            />
            <img
              src="/icons/landing-page/ai-lightning.svg"
              alt="lightning"
              width={40}
              height={63.22}
              style={{
                position: "absolute",
                left: 324,
                top: 51,
              }}
            />
            <img
              src="/icons/landing-page/ai-lightning.svg"
              alt="lightning"
              width={46}
              height={64.35}
              style={{
                position: "absolute",
                left: 505,
                top: 392,
              }}
            />

            {/* Text + button */}
            <div
              className="flex flex-col justify-center z-10"
              style={{
                marginLeft: 32,
                gap: 32,
                flex: "0 0 auto",
                minWidth: "400px",
              }}
            >
              {/* Title */}
              <div className="text-[#512E40] text-3xl xl:text-4xl font-semibold">Answer AI</div>
              {/* Subtitle */}
              <div className="text-[#083347] text-lg xl:text-xl max-w-[350px] lg:max-w-[424px]">
                Whether you crop a question or type into the chat box, AI is ready to help— instantly.
              </div>
              {/* Button */}
              <div className="flex flex-row justify-center items-center cursor-pointer bg-[#482838] text-white h-16 w-44 rounded-3xl gap-2">
                {/* Button text */}
                <div className="text-xl xl:text-2xl font-semibold">Try it out</div>
                {/* Arrow */}
                <img src="/icons/landing-page/ai-arrow.svg" alt="arrow" width={20} height={23} />
              </div>
            </div>
            {/* White space */}
            <div
              className="absolute right-0 top-0 h-full bg-white rounded-[67px_16px_16px_67px] min-w-[200px] flex-shrink-0"
              style={{ width: "min(50%, calc(100% - 100px))" }}
            ></div>
          </div>
          {/* Main container 2 */}
          <div
            className="flex flex-row mb-72"
            style={{
              gap: 34,
              width: "calc(100% - 32px)",
              maxWidth: 1230,
              height: 550,
              minHeight: 550,
              marginTop: 34,
            }}
          >
            {/* Crop to Chat container */}
            <div
              className="relative overflow-hidden"
              style={{
                background: "#F7F1FF",
                borderColor: "#E0D6EE",
                borderStyle: "solid",
                borderWidth: 11,
                borderRadius: 24,
                height: "100%",
                width: "100%",
              }}
            >
              {/* Crop to chat text */}
              <div className="flex flex-col gap-6 max-w-[518px] mt-6 mx-6">
                {/* Title */}
                <div className="text-[#5E5548] text-3xl xl:text-4xl font-semibold">Crop to Chat</div>
                {/* Subtitle */}
                <div className="text-[#083347] text-lg xl:text-xl ">
                  Crop any part of your PDF or image to get instant answers.
                </div>
              </div>
              {/* Crop to chat design */}
              <div>
                <img
                  src="/icons/landing-page/crop-to-chat/design.svg"
                  alt="crop to chat"
                  width={590}
                  height={300}
                  className="absolute bottom-0"
                />
              </div>
            </div>
            {/* AI Chat Box container */}
            <div
              className="relative overflow-hidden"
              style={{
                background: "#FFF8E1",
                borderColor: "#E4D8C4",
                borderStyle: "solid",
                borderWidth: 11,
                borderRadius: 24,
                height: "100%",
                width: "100%",
              }}
            >
              {/* AI Chat Box text */}
              <div className="flex flex-col gap-6 max-w-[518px] mt-6 mx-6">
                {/* Title */}
                <div className="text-[#5E5548] text-3xl xl:text-4xl font-semibold">AI Chat Box</div>
                {/* Subtitle */}
                <div className="text-[#083347] text-lg xl:text-xl">
                  Type your questions — get instant answers from AI
                </div>
              </div>
              {/* AI Chat Box design */}
              <div>
                <img
                  src="/icons/landing-page/ai-chat-box/design.svg"
                  alt="AI chat box"
                  width={590}
                  height={300}
                  className="absolute bottom-[-50px] left-[-15px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI;
