import React from "react";
import { Helmet } from "react-helmet";
import { Text, Input } from "../../components";

export default function SpacingPage() {
  return (
    <>
      <Helmet>
        <title>Food X</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-between items-center w-full p-[97px] bg-white-A700">
        <div className="flex flex-col items-start justify-start w-[17%] mb-0.5 ml-0.5 gap-[3px]">
          <Text size="s" as="p">
            1 - 0.25rem
          </Text>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="h-[20px] w-[4px] opacity-0.75 bg-gray-500_9e" />
            <Text size="s" as="p" className="mt-[18px]">
              2 - 0.5rem
            </Text>
            <div className="h-[20px] w-[4%] mt-[3px] opacity-0.75 bg-gray-500_9e" />
            <Text size="s" as="p" className="mt-[18px]">
              3 - 0.75rem
            </Text>
            <div className="h-[20px] w-[5%] mt-[3px] opacity-0.75 bg-gray-500_9e" />
            <Text size="s" as="p" className="mt-[18px]">
              4 - 1rem
            </Text>
            <div className="h-[20px] w-[7%] mt-[3px] opacity-0.75 bg-gray-500_9e" />
            <Text size="s" as="p" className="mt-[18px]">
              5 - 1.25rem
            </Text>
            <div className="h-[20px] w-[20px] mt-[3px] opacity-0.75 bg-gray-500_9e" />
            <Text size="s" as="p" className="mt-[18px]">
              6 - 1.5rem
            </Text>
            <div className="h-[20px] w-[10%] mt-[3px] opacity-0.75 bg-gray-500_9e" />
            <Text size="s" as="p" className="mt-[18px]">
              8 - 2rem
            </Text>
            <div className="h-[20px] w-[13%] mt-[3px] opacity-0.75 bg-gray-500_9e" />
            <Text size="s" as="p" className="mt-[18px]">
              10 - 2.5rem
            </Text>
            <div className="h-[20px] w-[16%] mt-[3px] opacity-0.75 bg-gray-500_9e" />
            <Text size="s" as="p" className="mt-[18px]">
              12 - 3rem
            </Text>
            <div className="h-[20px] w-[19%] mt-[3px] opacity-0.75 bg-gray-500_9e" />
            <Text size="s" as="p" className="mt-[18px]">
              16 - 4rem
            </Text>
            <div className="h-[20px] w-[25%] mt-[3px] opacity-0.75 bg-gray-500_9e" />
            <Text size="s" as="p" className="mt-[18px]">
              20 - 5rem
            </Text>
            <div className="h-[20px] w-[32%] mt-[3px] opacity-0.75 bg-gray-500_9e" />
            <Text size="s" as="p" className="mt-[18px]">
              24 - 6rem
            </Text>
            <div className="h-[20px] w-[38%] mt-[3px] opacity-0.75 bg-gray-500_9e" />
            <Text size="s" as="p" className="mt-[18px]">
              32 - 8rem
            </Text>
            <div className="h-[20px] w-[50%] mt-[3px] opacity-0.75 bg-gray-500_9e" />
            <Text size="s" as="p" className="mt-[18px]">
              40 - 10rem
            </Text>
            <Input color="gray_500_9e" size="xs" name="spacer40x_one" className="w-[63%] mt-[3px] opacity-0.75" />
            <Text size="s" as="p" className="mt-[18px]">
              48 - 12rem
            </Text>
            <div className="h-[20px] w-[75%] mt-[3px] opacity-0.75 bg-gray-500_9e" />
            <Text size="s" as="p" className="mt-[18px]">
              56 - 14rem
            </Text>
            <div className="h-[20px] w-[88%] mt-[3px] opacity-0.75 bg-gray-500_9e" />
            <Text size="s" as="p" className="mt-[18px]">
              64 - 16rem
            </Text>
            <Input color="gray_500_9e" size="xs" name="spacer64x_one" className="w-full mt-[3px] opacity-0.75" />
          </div>
        </div>
        <div className="flex flex-row justify-start items-center w-[63%] mr-[158px] gap-[9px]">
          <Text as="p">1 - 0.25rem</Text>
          <div className="flex flex-row justify-start items-end w-[99%]">
            <div className="h-[4px] w-[3%] mb-0.5 opacity-0.75 bg-gray-500_9e" />
            <Text as="p" className="mb-px ml-5">
              2 - 0.5rem
            </Text>
            <div className="h-[8px] w-[3%] mb-0.5 ml-[9px] opacity-0.75 bg-gray-500_9e" />
            <Text as="p" className="mb-px ml-5">
              3 - 0.75rem
            </Text>
            <div className="h-[12px] w-[3%] mb-0.5 ml-[9px] opacity-0.75 bg-gray-500_9e" />
            <Text as="p" className="ml-5">
              4 - 1rem
            </Text>
            <div className="h-[16px] w-[3%] mb-0.5 ml-[9px] opacity-0.75 bg-gray-500_9e" />
            <Text as="p" className="mb-px ml-5">
              5 - 1.25rem
            </Text>
            <div className="h-[20px] w-[20px] mb-0.5 ml-[9px] opacity-0.75 bg-gray-500_9e" />
            <Text as="p" className="mb-px ml-5">
              6 - 1.5rem
            </Text>
            <div className="h-[24px] w-[3%] mb-0.5 ml-[9px] opacity-0.75 bg-gray-500_9e" />
            <Text as="p" className="mb-px ml-5">
              8 - 2rem
            </Text>
            <div className="h-[32px] w-[3%] mb-0.5 ml-[9px] opacity-0.75 bg-gray-500_9e" />
            <Text as="p" className="mb-px ml-5">
              10 - 2.5rem
            </Text>
            <div className="h-[40px] w-[3%] mb-0.5 ml-[9px] opacity-0.75 bg-gray-500_9e" />
            <Text as="p" className="mb-px ml-5">
              12 - 3rem
            </Text>
            <div className="h-[48px] w-[3%] mb-0.5 ml-[9px] opacity-0.75 bg-gray-500_9e" />
            <Text as="p" className="mb-px ml-5">
              16 - 4rem
            </Text>
            <div className="h-[64px] w-[3%] mb-0.5 ml-[9px] opacity-0.75 bg-gray-500_9e" />
            <Text as="p" className="mb-px ml-5">
              20 - 5rem
            </Text>
            <div className="h-[80px] w-[3%] mb-0.5 ml-[9px] opacity-0.75 bg-gray-500_9e" />
            <Text as="p" className="mb-px ml-5">
              24 - 6rem
            </Text>
            <div className="h-[96px] w-[3%] mb-0.5 ml-[9px] opacity-0.75 bg-gray-500_9e" />
            <Text as="p" className="mb-px ml-5">
              32 - 8rem
            </Text>
            <div className="h-[128px] w-[3%] mb-0.5 ml-[9px] opacity-0.75 bg-gray-500_9e" />
            <Text as="p" className="ml-5">
              40 - 10rem
            </Text>
            <div className="h-[160px] w-[3%] mb-0.5 ml-[9px] opacity-0.75 bg-gray-500_9e" />
            <Text as="p" className="ml-5">
              48 - 12rem
            </Text>
            <div className="h-[192px] w-[3%] mb-0.5 ml-[9px] opacity-0.75 bg-gray-500_9e" />
            <Text as="p" className="mb-px ml-5">
              56 - 14rem
            </Text>
            <div className="h-[224px] w-[3%] mb-0.5 ml-[9px] opacity-0.75 bg-gray-500_9e" />
            <Text as="p" className="mb-px ml-5">
              64 - 16rem
            </Text>
            <div className="h-[256px] w-[3%] mb-0.5 ml-[9px] opacity-0.75 bg-gray-500_9e" />
          </div>
        </div>
      </div>
    </>
  );
}
