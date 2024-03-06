import React from "react";
import { Helmet } from "react-helmet";
import { CheckBox, Text } from "../../components";

export default function ColorsPage() {
  return (
    <>
      <Helmet>
        <title>Food X</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-end justify-center w-full gap-[60px] py-[100px] overflow-auto bg-white-A700">
        <div className="flex flex-col items-end justify-start w-[99%]">
          <div className="flex flex-row justify-between w-full pr-[1384px]">
            <div className="flex flex-row justify-center py-1">
              <Text size="xl" as="p" className="mb-4 !text-blue_gray-900 text-right">
                Black & White
              </Text>
            </div>
            <div className="flex flex-row justify-between w-[57%]">
              <div className="flex flex-row justify-start items-start w-[45%] gap-4">
                <div className="h-[50px] w-[50px] bg-black-900 shadow-xs rounded" />
                <Text as="p" className="w-[45%] mt-1.5 !text-blue_gray-800">
                  Black
                  <br />
                  #000000
                </Text>
              </div>
              <CheckBox
                name="whiteffffff"
                label="White
#FFFFFF"
                className="gap-4 text-right font-medium leading-[150%]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-end w-[99%]">
          <div className="flex flex-col w-full mt-[60px] mb-[3px] gap-[60px] max-w-[1743px]">
            <div className="flex flex-row justify-between w-full pr-[952px]">
              <div className="flex flex-row justify-start py-1.5">
                <Text size="xl" as="p" className="mb-3 !text-blue_gray-900 text-right">
                  Gray (Cool)
                </Text>
              </div>
              <div className="flex flex-row justify-start gap-[30px]">
                <CheckBox
                  color="gray_50_02"
                  name="50f9fafb"
                  label="50
#F9FAFB"
                  className="gap-4 text-right font-medium leading-[150%]"
                />
                <CheckBox
                  color="gray_100"
                  name="100f3f4fsix"
                  label="100
#F3F4F6"
                  className="gap-4 text-right font-medium leading-[150%]"
                />
                <CheckBox
                  color="gray_200"
                  name="200e5e7eb"
                  label="200
#E5E7EB"
                  className="gap-4 text-right font-medium leading-[150%]"
                />
                <CheckBox
                  color="blue_gray_100"
                  name="300d1d5db"
                  label="300
#D1D5DB"
                  className="gap-4 text-right font-medium leading-[150%]"
                />
                <CheckBox
                  color="blue_gray_300"
                  name="4009ca3af"
                  label="400
#9CA3AF"
                  className="gap-4 text-right font-medium leading-[150%]"
                />
                <CheckBox
                  color="gray_600"
                  name="5006b7280"
                  label="500
#6B7280"
                  className="gap-4 text-right font-medium leading-[150%]"
                />
                <CheckBox
                  color="blue_gray_700"
                  name="6004b5563"
                  label="600
#4B5563"
                  className="gap-4 text-right font-medium leading-[150%]"
                />
                <CheckBox
                  color="blue_gray_800"
                  name="sevenhundredmil"
                  label="700
#374151"
                  className="gap-4 text-right font-medium leading-[150%]"
                />
                <CheckBox
                  color="blue_gray_900"
                  name="8001f2937"
                  label="800
#1F2937"
                  className="gap-4 text-right font-medium leading-[150%]"
                />
                <CheckBox
                  color="gray_900"
                  name="onehundredseven"
                  label="900
#111827"
                  className="gap-4 text-right font-medium leading-[150%]"
                />
              </div>
            </div>
            <div className="flex flex-row justify-start w-full ml-[59px]">
              <div className="flex flex-row justify-start w-[7%] p-1">
                <Text size="xl" as="p" className="mb-4 ml-px !text-blue_gray-800 text-right">
                  Red
                </Text>
              </div>
              <CheckBox
                color="red_50_01"
                name="50fef2ftwo"
                label="50
#FEF2F2"
                className="ml-px gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="deep_orange_50"
                name="100fee2etwo"
                label="100
#FEE2E2"
                className="ml-[30px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="red_100"
                name="200fecaca"
                label="200
#FECACA"
                className="ml-[29px] gap-[17px] text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="red_200"
                name="300fca5afive"
                label="300
#FCA5A5"
                className="ml-[22px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="red_300"
                name="400f87171"
                label="400
#F87171"
                className="ml-[29px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="red_500"
                name="500ef4444"
                label="500
#EF4444"
                className="ml-[30px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="red_700"
                name="600dc2626"
                label="600
#DC2626"
                className="ml-[29px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="red_900_01"
                name="700b91c1c"
                label="700
#B91C1C"
                className="ml-[30px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="red_900"
                name="800991b1b"
                label="800
#991B1B"
                className="ml-[29px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="pink_900_01"
                name="9007f1d1d"
                label="900
#7F1D1D"
                className="ml-[30px] gap-4 text-right font-medium leading-[150%]"
              />
            </div>
            <div className="flex flex-row justify-start w-full ml-[42px]">
              <div className="flex flex-row justify-start w-[7%] py-1">
                <Text size="xl" as="p" className="mb-4 !text-blue_gray-900 text-right">
                  Yellow
                </Text>
              </div>
              <CheckBox
                color="yellow_50"
                name="50fffbeb"
                label="50
#FFFBEB"
                className="ml-4 gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="yellow_100"
                name="100fef3cseven"
                label="100
#FEF3C7"
                className="ml-[30px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="yellow_A100"
                name="200fde68a"
                label="200
#FDE68A"
                className="ml-[29px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="amber_A200"
                name="300fcd34d"
                label="300
#FCD34D"
                className="ml-[30px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="amber_500"
                name="400fbbftwentyfo"
                label="400
#FBBF24"
                className="ml-[29px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="amber_600"
                name="500f59e0b"
                label="500
#F59E0B"
                className="ml-[30px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="orange_700"
                name="600d97706"
                label="600
#D97706"
                className="ml-[29px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="lime_900_02"
                name="700b45309"
                label="700
#B45309"
                className="ml-[30px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="lime_900_01"
                name="80092400e"
                label="800
#92400E"
                className="ml-[29px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="lime_900"
                name="90078350f"
                label="900
#78350F"
                className="ml-[30px] gap-4 text-right font-medium leading-[150%]"
              />
            </div>
            <div className="flex flex-row justify-start w-full ml-[45px]">
              <div className="flex flex-row justify-start w-[7%] py-1">
                <Text size="xl" as="p" className="mb-4 !text-blue_gray-900 text-right">
                  Green
                </Text>
              </div>
              <CheckBox
                color="gray_100_01"
                name="50ecfdffive"
                label="50
#ECFDF5"
                className="ml-3 gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="green_50"
                name="100d1faefive"
                label="100
#D1FAE5"
                className="ml-[30px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="green_A100"
                name="200a7f3dzero"
                label="200
#A7F3D0"
                className="ml-[29px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="green_A200"
                name="3006ee7bseven"
                label="300
#6EE7B7"
                className="ml-[30px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="green_400"
                name="40034d399"
                label="400
#34D399"
                className="ml-[29px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="green_A700"
                name="50010b981"
                label="500
#10B981"
                className="ml-[30px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="green_700"
                name="sixhundredmilli"
                label="600
#059669"
                className="ml-[29px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="green_800"
                name="sevenhundredmil"
                label="700
#047857"
                className="ml-[30px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="green_900_01"
                name="800065ffortysix"
                label="800
#065F46"
                className="ml-[29px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="green_900"
                name="900064e3b"
                label="900
#064E3B"
                className="ml-[30px] gap-4 text-right font-medium leading-[150%]"
              />
            </div>
            <div className="flex flex-row justify-start w-full ml-14">
              <div className="flex flex-row justify-start w-[7%]">
                <Text size="xl" as="p" className="mt-0.5 mb-[18px] !text-blue_gray-900 text-right">
                  Blue
                </Text>
              </div>
              <CheckBox
                color="gray_100_02"
                name="50eff6ff"
                label="50
#EFF6FF"
                className="ml-px gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="blue_50"
                name="100dbeafe"
                label="100
#DBEAFE"
                className="ml-[30px] gap-[17px] text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="blue_100_01"
                name="200bfdbfe"
                label="200
#BFDBFE"
                className="ml-[23px] gap-[17px] text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="blue_200_01"
                name="30093c5fd"
                label="300
#93C5FD"
                className="ml-[22px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="blue_300"
                name="40060a5fa"
                label="400
#60A5FA"
                className="ml-[29px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="blue_A200"
                name="5003b82fsix"
                label="500
#3B82F6"
                className="ml-[30px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="blue_A700"
                name="6002563eb"
                label="600
#2563EB"
                className="ml-[29px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="blue_800"
                name="7001d4edeight"
                label="700
#1D4ED8"
                className="ml-[30px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="blue_900"
                name="8001e40af"
                label="800
#1E40AF"
                className="ml-[29px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="indigo_800_01"
                name="9001e3a8a"
                label="900
#1E3A8A"
                className="ml-[30px] gap-4 text-right font-medium leading-[150%]"
              />
            </div>
            <div className="flex flex-row justify-start w-full ml-[41px]">
              <div className="flex flex-row justify-start w-[7%] py-1.5">
                <Text size="xl" as="p" className="mb-3 !text-blue_gray-900 text-right">
                  Indigo
                </Text>
              </div>
              <CheckBox
                color="blue_50_02"
                name="50eef2ff"
                label="50
#EEF2FF"
                className="ml-3.5 gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="blue_50_01"
                name="100e0e7ff"
                label="100
#E0E7FF"
                className="ml-[30px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="blue_100"
                name="200c7d2fe"
                label="200
#C7D2FE"
                className="ml-[29px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="blue_200"
                name="300a5b4fc"
                label="300
#A5B4FC"
                className="ml-[30px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="indigo_A100"
                name="400818cfeight"
                label="400
#818CF8"
                className="ml-[29px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="indigo_A200"
                name="5006366fone"
                label="500
#6366F1"
                className="ml-[30px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="indigo_A400"
                name="6004f46efive"
                label="600
#4F46E5"
                className="ml-[29px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="indigo_500"
                name="7004338ca"
                label="700
#4338CA"
                className="ml-[30px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="deep_purple_800"
                name="8003730athree"
                label="800
#3730A3"
                className="ml-[29px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="indigo_800"
                name="900312eeightyon"
                label="900
#312E81"
                className="ml-[30px] gap-4 text-right font-medium leading-[150%]"
              />
            </div>
            <div className="flex flex-row justify-start w-full ml-[37px]">
              <div className="flex flex-row justify-start w-[7%] py-1.5">
                <Text size="xl" as="p" className="mb-3 !text-blue_gray-900 text-right">
                  Purple
                </Text>
              </div>
              <CheckBox
                color="gray_50_01"
                name="50f5f3ff"
                label="50
#F5F3FF"
                className="ml-[17px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="purple_50"
                name="100ede9fe"
                label="100
#EDE9FE"
                className="ml-[30px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="deep_purple_50"
                name="200ddd6fe"
                label="200
#DDD6FE"
                className="ml-[29px] gap-[17px] text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="purple_100"
                name="300c4b5fd"
                label="300
#C4B5FD"
                className="ml-[22px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="deep_purple_A100"
                name="400a78bfa"
                label="400
#A78BFA"
                className="ml-[29px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="deep_purple_A200_01"
                name="5008b5cfsix"
                label="500
#8B5CF6"
                className="ml-[30px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="deep_purple_A200"
                name="6007c3aed"
                label="600
#7C3AED"
                className="ml-[29px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="purple_600"
                name="7006d28dnine"
                label="700
#6D28D9"
                className="ml-[30px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="purple_800"
                name="8005b21bsix"
                label="800
#5B21B6"
                className="ml-[29px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="purple_900"
                name="9004c1dninetyfi"
                label="900
#4C1D95"
                className="ml-[30px] gap-4 text-right font-medium leading-[150%]"
              />
            </div>
            <div className="flex flex-row justify-start w-full ml-[53px]">
              <div className="flex flex-row justify-start w-[7%] p-[3px]">
                <Text size="xl" as="p" className="mt-px mb-[17px] !text-blue_gray-900 text-right">
                  Pink
                </Text>
              </div>
              <CheckBox
                color="gray_50"
                name="50fdf2feight"
                label="50
#FDF2F8"
                className="ml-px gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="red_50"
                name="100fce7fthree"
                label="100
#FCE7F3"
                className="ml-[30px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="pink_50"
                name="200fbcfeeight"
                label="200
#FBCFE8"
                className="ml-[29px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="pink_100"
                name="300f9a8dfour"
                label="300
#F9A8D4"
                className="ml-[30px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="pink_A100"
                name="400f472bsix"
                label="400
#F472B6"
                className="ml-[29px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="pink_300"
                name="500ec4899"
                label="500
#EC4899"
                className="ml-[30px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="pink_500"
                name="600db2777"
                label="600
#DB2777"
                className="ml-[29px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="pink_700"
                name="700be185d"
                label="700
#BE185D"
                className="ml-[30px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="pink_800"
                name="8009d174d"
                label="800
#9D174D"
                className="ml-[29px] gap-4 text-right font-medium leading-[150%]"
              />
              <CheckBox
                color="pink_900"
                name="onehundredseven"
                label="900
#831843"
                className="ml-[30px] gap-4 text-right font-medium leading-[150%]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
