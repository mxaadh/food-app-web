import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Input, Img, Heading } from "../../components";

export default function NavigationPage() {
  return (
    <>
      <Helmet>
        <title>Food X</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center w-full px-14 py-[97px] bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full mt-0.5 gap-[50px] max-w-[850px]">
          <div className="flex flex-row justify-between items-center w-full p-4 bg-teal-A700">
            <div className="flex flex-row justify-start items-center w-[47%] ml-2 gap-6">
              <div className="flex flex-row justify-start items-center w-[44%] gap-2">
                <Img src="images/img_frame.svg" alt="image" className="h-[32px] w-[32px]" />
                <Heading as="h1">Tailwind CSS</Heading>
              </div>
              <div className="flex flex-row justify-between w-[51%]">
                <Text size="md" as="p" className="mt-0.5 !text-teal-A100">
                  Docs
                </Text>
                <Text size="md" as="p" className="!text-teal-A100">
                  Examples
                </Text>
                <Text size="md" as="p" className="!text-teal-A100">
                  Blog
                </Text>
              </div>
            </div>
            <div className="flex flex-row justify-center mr-5">
              <Button color="white_A700" size="sm" variant="outline" className="w-full font-medium">
                Download
              </Button>
            </div>
          </div>
          <div className="flex flex-row justify-between items-start w-full">
            <div className="flex flex-col items-start justify-start w-[49%]">
              <div className="flex flex-row justify-start">
                <Input
                  name="navigation_one"
                  placeholder="Tailwind CSS"
                  prefix={<Img src="images/img_frame.svg" alt="Frame" />}
                  suffix={
                    <div className="flex justify-center items-center w-[44px] h-[36px] border-teal-A400 border rounded">
                      <Img src="images/img_vector.svg" alt="Vector" />
                    </div>
                  }
                  className="w-full gap-2 font-bold"
                />
              </div>
              <div className="flex flex-row justify-start items-center w-full mt-[89px] gap-3">
                <div className="flex flex-row justify-center w-[32%]">
                  <Button className="min-w-[113px]">Active Item</Button>
                </div>
                <div className="flex flex-row justify-center w-[32%] p-[9px]">
                  <Text size="md" as="p" className="!text-blue-A200 text-center">
                    Nav Item
                  </Text>
                </div>
                <div className="flex flex-row justify-center w-[32%] p-[9px]">
                  <Text size="md" as="p" className="!text-gray-500 text-center">
                    Disabled Item
                  </Text>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center w-full mt-[25px]">
                <div className="flex flex-row justify-start w-[25%]">
                  <Button className="w-full">Active Pill</Button>
                </div>
                <div className="flex flex-row justify-center w-[13%] ml-[79px] p-[9px]">
                  <Text size="md" as="p" className="!text-blue-A200 text-center">
                    Pill
                  </Text>
                </div>
                <div className="flex flex-row justify-center w-[29%] ml-[61px] p-[9px]">
                  <Text size="md" as="p" className="!text-gray-500 text-center">
                    Disabled Pill
                  </Text>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center w-full mt-[25px] gap-3">
                <div className="flex flex-row justify-start w-[25%]">
                  <Button className="w-full">Active Pill</Button>
                </div>
                <div className="flex flex-row justify-center w-[13%] p-[9px]">
                  <Text size="md" as="p" className="!text-blue-A200 text-center">
                    Pill
                  </Text>
                </div>
                <div className="flex flex-row justify-center w-[29%] p-[9px]">
                  <Text size="md" as="p" className="!text-gray-500 text-center">
                    Disabled Pill
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[45%]">
              <Input
                name="vector"
                placeholder="Tailwind CSS"
                prefix={<Img src="images/img_frame.svg" alt="Frame" />}
                suffix={
                  <div className="flex justify-center items-center w-[44px] h-[36px] border-teal-A400 border rounded">
                    <Img src="images/img_vector.svg" alt="Vector" />
                  </div>
                }
                className="w-full gap-2 font-bold"
              />
              <div className="flex flex-col items-start justify-start w-full gap-4 p-3 bg-teal-A700">
                <div className="flex flex-col items-start justify-center ml-3 gap-5">
                  <Text size="md" as="p" className="mt-0.5 !text-teal-A100">
                    Docs
                  </Text>
                  <Text size="md" as="p" className="!text-teal-A100">
                    Examples
                  </Text>
                  <Text size="md" as="p" className="!text-teal-A100">
                    Blog
                  </Text>
                </div>
                <Button
                  color="white_A700"
                  size="sm"
                  variant="outline"
                  className="mb-1.5 ml-3 font-medium min-w-[107px]"
                >
                  Download
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
