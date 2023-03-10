import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CoreCourse() {
  return (
    <div className="w-full bg-gray-200 justify-center">
      <div className="w-full ">
        <div className="group relative">
          <div className=" w-full text-black-800 py-[80px] text-center">
            <h1 className="text-[14px] text-4xl">
              Core Courses <span className="text-[14px] text-3xl ">(Common in All Specializations)</span>
            </h1>
            <p className="text-[18px] text-1xl text-center mt-[20px]">
              Every participant of the program will start by completing the
              following three core courses:
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center pb-[80px] gap-2">
      <div className="w-[400px] ">
        <div className="group relative h-[450px]">
          <Image
            src="/oop.png"
            width={500}
            height={700}
            alt="Islamabad"
            className="object-cover h-[450px]"
          />
          <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-gray-100 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
            <h1 className="text-2xl text-gray-900 ">Quarter-I (Core)</h1>
            <p className="text-[16px] text-1xl mb-[20px] px-[30px] text-gray-900">
              TCS-101: Object-Oriented Programming using TypeScript
            </p>
            <Link
              className="mt-5 px-4 py-2 rounded-[5px] text-white bg-gray-900 hover:bg-gray-600 duration-300"
              href="https://portal.piaic.org/signup"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[400px] ">
        <div className="group relative h-[450px]">
          <Image
            src="/nextjs13.png"
            width={500}
            height={700}
            alt="Islamabad"
            className="object-cover h-[450px]"
          />
          <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-gray-100 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
            <h1 className="text-2xl text-gray-900 font-bold">Quarter-II (Core)</h1>
            <p className="text-[16px] text-1xl mb-[20px] px-[30px] text-gray-900">
              W2-201: Developing Planet-Scale Web 2.0 Serverless Apps and APIs
              using Next.js 13 and Cloud Development for Terraform
            </p>
            <Link
              className="mt-5 px-4 py-2 rounded-[5px] text-white bg-gray-900 hover:bg-gray-600 duration-300"
              href="https://portal.piaic.org/signup"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[400px] ">
        <div className="group relative h-[450px]">
          <Image
            src="/fullstacknew.png"
            width={500}
            height={700}
            alt="Islamabad"
            className="object-cover h-[450px]"
          />
          <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-gray-100 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
            <h1 className="text-2xl text-gray-900 font-bold">
              Quarter-III (Core)
            </h1>
            <p className="text-[16px] text-2xl mb-[20px] px-[30px] text-gray-900">
              $-101: Dollar Making Bootcamp - Full-Stack Template and API
              Producat Development
            </p>
            <Link
              className="mt-5 px-4 py-2 rounded-[5px] text-white bg-gray-900 hover:bg-white-600 duration-300"
              href="https://portal.piaic.org/signup"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
