import React from "react";
import { Helmet } from "react-helmet";
import { Text } from "../../components";

export default function TypographyPage() {
  return (
    <>
      <Helmet>
        <title>Food X</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-start justify-center w-full pl-[100px] pr-14 py-[100px] bg-white-A700">
        <div className="flex flex-col items-start justify-start mt-0.5 gap-[15px]">
          <Text as="p">.text-xs font-size: .75rem</Text>
          <Text as="p" className="!text-black-900 !font-normal">
            The quick brown fox jumps over the lazy dog.
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start mt-[22px] gap-4">
          <Text as="p">.text-sm font-size: .875rem</Text>
          <Text size="s" as="p" className="!text-black-900 !font-normal">
            The quick brown fox jumps over the lazy dog.
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start mt-[22px] gap-4">
          <Text as="p">.text-base font-size: 1rem</Text>
          <Text size="md" as="p" className="!text-black-900">
            The quick brown fox jumps over the lazy dog.
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start mt-[23px] gap-[15px]">
          <Text as="p">.text-lg font-size: 1.125rem</Text>
          <Text size="lg" as="p" className="!text-black-900">
            The quick brown fox jumps over the lazy dog.
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start mt-[22px] gap-[17px]">
          <Text as="p">.text-xl font-size: 1.25rem</Text>
          <Text size="xl" as="p" className="!text-black-900 !font-normal">
            The quick brown fox jumps over the lazy dog.
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start mt-[23px] gap-[19px]">
          <Text as="p">.text-2xl font-size: 1.5rem</Text>
          <Text size="2xl" as="p" className="!text-black-900">
            The quick brown fox jumps over the lazy dog.
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start mt-[22px] gap-[21px]">
          <Text as="p">.text-3xl font-size: 1.875rem</Text>
          <Text size="3xl" as="p" className="!text-black-900">
            The quick brown fox jumps over the lazy dog.
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start mt-[23px] gap-[21px]">
          <Text as="p">.text-4xl font-size: 2.25rem</Text>
          <Text size="4xl" as="p" className="!text-black-900">
            The quick brown fox jumps over the lazy dog.
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start w-full mt-6 gap-[25px] mx-auto max-w-[977px]">
          <Text as="p">.text-5xl font-size: 3rem</Text>
          <Text size="5xl" as="p" className="!text-black-900">
            The quick brown fox jumps over the lazy dog.
          </Text>
        </div>
        <div className="flex flex-col items-center justify-end w-full mx-auto max-w-[1302px]">
          <div className="flex flex-col items-start justify-start w-full mt-[23px] mb-1 gap-[29px]">
            <Text as="p">.text-6xl font-size: 4rem</Text>
            <Text size="6xl" as="p" className="!text-black-900">
              The quick brown fox jumps over the lazy dog.
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
