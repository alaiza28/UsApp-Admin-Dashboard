import React from 'react'
import { FaList, FaUsers } from "react-icons/fa";
import { useState } from "react";
import img1 from "../assets/coa.png"
import img2 from "../assets/cob.png"
import img3 from "../assets/ccs.png"

const ForumsUpdate = () => {

    const collegeDep = [
        {
          img: img1,
          college: "College of Accountancy",
          students: "9 students"
        },
        {
          img: img2,
          college: "College of Business",
          students: "9 students"
        },
        {
          img: img3,
          college: "College of Computer Studies",
          students: "9 students"
        },
    
      ];
    
  return (
    <div className="w-[320px] circle px-7 py-3 rounded-md mr-6 text-white font-poppins">
                <div className="flex items-center ml-2">
                   <h4 className="mr-2">UsApp Users</h4>
                  <FaUsers className="text-[20px] text-light-blue"/>
               </div>

               <div className="w-full m-auto mt-4">
                  <div className="w-[150px] h-[150px] bg-[#EAB308] rounded-[50%] m-auto relative">
                    <div className="w-[120px] h-[120px] bg-[#424242] absolute left-4 top-4 rounded-[50%] m-auto">
                      <h4 className="flex flex-col justify-center text-center mt-6 text-3xl text-light-blue">10 <span className="text-white text-[14px]">students</span></h4>
                    </div>
                  </div>
               </div>

               <div className="mt-6">
                {
                  collegeDep.map((colleges, index) => (
                    <div key={index} className="flex items-center bg-color my-2 p-3 rounded-md cursor-pointer college duration-300">
                      <img src={colleges.img} alt="college" className="w-[45px] h-[45px] mr-4"/>

                      <div>
                        <h4 className="text-[13px]">{colleges.college}</h4>
                        <p className="text-[10px] font-thin">{colleges.students}</p>
                      </div>
                    </div>
                  ))
                }
               </div>
              </div>
  )
}

export default ForumsUpdate