import React from "react";
import { Helmet } from "react-helmet";
import { Img } from "../../components";

export default function GridPage() {
  return (
    <>
      <Helmet>
        <title>Food X</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-center w-full gap-[50px] px-14 py-[100px] bg-white-A700">
        <div className="h-[48px] w-full opacity-0.75 bg-gray-500_9e max-w-[1173px]" />
        <div className="flex flex-row justify-center w-full max-w-[1173px]">
          <div className="h-[48px] w-full opacity-0.75 bg-gray-500_9e" />
        </div>
        <div className="flex flex-row justify-center w-full max-w-[1173px]">
          <div className="flex flex-row justify-center w-full opacity-0.75 bg-gray-500_9e">
            <Img src="images/img_w_1_2.svg" alt="w1two_one" className="h-[48px]" />
          </div>
        </div>
        <div className="flex flex-row justify-center w-full max-w-[1173px]">
          <div className="flex flex-row justify-center w-full opacity-0.75 bg-gray-500_9e">
            <Img src="images/img_w_1_3.svg" alt="w1three_one" className="h-[48px]" />
          </div>
        </div>
        <div className="flex flex-row justify-center w-full max-w-[1173px]">
          <div className="flex flex-row justify-center w-full opacity-0.75 bg-gray-500_9e">
            <Img src="images/img_w_1_4.svg" alt="w1four_one" className="h-[48px]" />
          </div>
        </div>
        <div className="flex flex-row justify-center w-full max-w-[1173px]">
          <div className="flex flex-row justify-center w-full opacity-0.75 bg-gray-500_9e">
            <Img src="images/img_w_1_5.svg" alt="w1five_one" className="h-[48px]" />
          </div>
        </div>
        <div className="flex flex-row justify-center w-full max-w-[1173px]">
          <div className="flex flex-row justify-center w-full opacity-0.75 bg-gray-500_9e">
            <Img src="images/img_w_1_6.svg" alt="w1six_one" className="h-[48px]" />
          </div>
        </div>
      </div>
    </>
  );
}
