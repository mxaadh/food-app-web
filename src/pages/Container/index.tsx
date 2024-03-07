import React from "react";
import { Helmet } from "react-helmet";
import { Text } from "../../components";

export default function ContainerPage() {
  return (
    <>
      <Helmet>
        <title>Food X</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-start justify-center w-full pl-[89px] pr-14 gap-2 py-[89px] bg-white-A700">
        <div className="flex flex-col items-start justify-start w-full gap-3 mx-auto max-w-5xl">
          <Text as="p">sm - 640px</Text>
          <div className="h-[20px] w-[63%] opacity-0.75 bg-gray-500_9e" />
          <Text as="p">md - 768px</Text>
          <div className="h-[20px] w-[75%] opacity-0.75 bg-gray-500_9e" />
          <Text as="p">lg - 1024px</Text>
          <div className="h-[20px] w-full opacity-0.75 bg-gray-500_9e" />
          <Text as="p">xl - 1280px</Text>
        </div>
        <div className="flex flex-col items-center justify-center w-full mx-auto max-w-7xl">
          <div className="h-[20px] w-full mt-2 mb-2.5 opacity-0.75 bg-gray-500_9e" />
        </div>
      </div>
    </>
  );
}
