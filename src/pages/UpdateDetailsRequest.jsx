import React from "react";
import { MdSystemUpdateAlt } from "react-icons/md";
import Widgets from "../components/Widgets";
import { useState } from "react";
import {GrCheckbox, GrCheckboxSelected} from "react-icons/gr"

const UpdateDetailsRequest = () => {
  const [clickedForum, setClickedForum] = useState(false)

  const archivedForum = [
    {
      forumTitle: "How to Make a Cake",
      name: "WhoDis",
      college: "CCS",
      reportCount: "3 reports",
      reportBy: "Hello, Kittty, John Doe, Maria",
      reportViolations: "Cheating",
    },
  ];
  return (
    <div className="updateDetails absolute h-screen left-[260px] bg-color text-white font-poppins">
    <div className="flex justify-between mt-4 mx-6">
    <h2 className="ml-2 text-[20px] font-medium">
      List of Request
    </h2>
      
    <div className={`${!clickedForum ? "hidden" : "block"}`}>
          <button className="bg-lime-500 p-2 rounded mx-2 text-[13px]" onClick={() => setClickedForum(false)}>
            Cancel
          </button>
          <button className="bg-red-500 p-2 rounded text-[13px]">
            <h4>UnArchive Forum</h4>
          </button>
          <button className="bg-blue-400 p-2 rounded mx-2 text-[13px]">
            View Forum
          </button>
        </div>

    </div>

    <div className="flex items-center">
      <h4 className="mr-1 ml-14 my-2 text-[15px] font-medium">
        Update Request
      </h4>
      <MdSystemUpdateAlt className="text-[20px] text-light-yellow" />
    </div>

    <div className="flex justify-between ml-4">
      <div>
        {archivedForum.map((archive, index) => (
          <div
            key={index}
            className="w-[200px] h-[130px] box-color p-2 relative my-1 mx-2 rounded update"
            onClick={() => setClickedForum((prev) => !prev)}
          >
          <div className="absolute right-1 text-white">{!clickedForum ? <GrCheckbox className="text-white"/> : <GrCheckboxSelected className="text-white"/>}</div>
            <h4 className="text-[16px] font-medium ml-2">
              {archive.name}
            </h4>
            <p className="font-normal text-[13px] text-gray-400 ml-2">
              {archive.college}
            </p>

            <p className="my-4 font-medium text-[14px] ml-2">Requested Update(s)</p>
            
          </div>
        ))}
      </div>

      <div>
        <Widgets
          title="Pending Request"
          number="1"
          icons=<MdSystemUpdateAlt className="text-[20px] text-light-yellow"  />
        />
      </div>
    </div>
     
    </div>
  );
};

export default UpdateDetailsRequest;
