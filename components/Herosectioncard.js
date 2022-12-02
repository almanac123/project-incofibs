import React from "react";
import { MdLocationOn, MdKeyboardVoice,MdMeetingRoom } from "react-icons/md";

const Herosectioncard = () => {
  return (
    <div className="grid w-full lg:grid-cols-3 lg:ml-32  lg:mr-32 xl:ml-64 xl:mr-64  text-white ">
      <div class="flex justify-center p-0 md:p-2 bg-primary-60 items-center lg:pt-1  pt-2 border-b-2 lg:rounded-tl-hello lg:border-r-2 border-red-700">
        <div class="flex flex-col md:flex-row  items-center   lg:items-center">
          <MdLocationOn className="text-white text-4xl lg:text-9xl 2xl:text-8xl mt-2 ml-5 border-gray-100 border-2 h-1/2 rounded-br-br10 rounded-tl-br10 lg:rounded-br-bye lg:rounded-tl-bye" />

          <div class="p-4 flex flex-col justify-start">
            <h5 class="text-center text-2xl flex justify-start">Dhaka 8D</h5>
            <p class=" text-md">
              This is a wider card with supporting text below as 
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-center p-0 md:p-2 bg-primary-60 items-center lg:pt-1  pt-2 border-b-2 lg:border-r-2 border-red-700">
        <div class="flex flex-col md:flex-row md:max-w-xl items-center   lg:items-center ml-3">
          <MdKeyboardVoice className="text-white text-4xl lg:text-9xl  2xl:text-9xl mt-2 ml-5 border-gray-100 border-2 h-1/2  rounded-br-br10 rounded-tl-br10 lg:rounded-br-bye lg:rounded-tl-bye " />

          <div class="p-4 flex flex-col justify-start">
            <h5 class="text-center text-2xl flex justify-start">75 Speakers</h5>
            <p class=" text-md">
              This is a wider card with supporting text below as 
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-center p-0 md:p-2 bg-primary-60 items-center lg:pt-1 xl:pt-4 pt-2 lg:rounded-tr-hello">
        <div class="flex flex-col md:flex-row md:max-w-xl items-center   lg:items-center">
          <MdMeetingRoom className="text-white text-4xl lg:text-9xl  2xl:text-8xl mt-2 ml-5 border-gray-100 border-2 h-1/2  rounded-br-br10 rounded-tl-br10 lg:rounded-br-bye lg:rounded-tl-bye" />

          <div class="p-4 flex flex-col justify-start">
            <h5 class="text-center text-2xl flex justify-start">2500 seats</h5>
            <p class=" text-md">
              This is a wider card with supporting text below as 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosectioncard;
