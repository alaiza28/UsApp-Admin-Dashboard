import React from "react";
import { MdReport } from "react-icons/md";
import { useState } from "react";
import { IoMdArchive } from "react-icons/io";
import ForumsUpdate from "../components/ForumsUpdate";
import Widgets from "../components/Widgets";
import {GrCheckbox, GrCheckboxSelected} from "react-icons/gr"

const ReportedForums = () => {
  const [toggleTab, setToggleTab] = useState(1);
  const [isClicked, setIsClicked] = useState(false);
  const [clickedForum, setClickedForum] = useState(false)
  const forums = [
    {
      forumTitle: "Cheat Sheet for Exam?",
      name: "John DoeNut",
      reportCount: "2 Reports",
      reportBy: "Dummy 1, Dummy @, Dummy 3",
    },
    {
      forumTitle: "Exam's Answer",
      name: "Mary DoeNut",
      reportCount: "4 Reports",
      reportBy: "Fake 1, Dummy 2, Fake 3",
    },
  ];

  const archivedForum = [
    {
      forumTitle: "How to Make a Cake",
      name: "WhoDis",
      reportCount: "3 reports",
      reportBy: "Hello, Kittty, John Doe, Maria",
      reportViolations: "Cheating",
    },
  ];

  const toggleState = (index) => {
    setToggleTab(index);
  };
  return (
    <div className="reportedForums absolute h-screen left-[260px] bg-color text-white font-poppins">
      <div className="h-[60px] flex text-center justify-center sticky top-0 bg-color z-40">
        <button
          className={`flex-1 py-6 px-4 ${
            toggleTab === 1 ? "tabs active-tabs" : "tabs"
          }`}
          onClick={() => toggleState(1)}
        >
          <h4>Report Request</h4>
        </button>

        <button
          className={`flex-1 py-6 px-4 ${
            toggleTab === 2 ? "tabs active-tabs" : "tabs"
          }`}
          onClick={() => toggleState(2)}
        >
          <h4>Archive</h4>
        </button>
      </div>

      <div className="">
        <div
          className={`${
            toggleTab === 1 ? "content active-content" : "content"
          } font-poppins flex justify-between`}
        >
          <div className="">
            <div className="flex justify-between">
              <h2 className="ml-2 text-[20px] font-medium">
                List of Reported Forums
              </h2>

              <div className={`${!isClicked ? "hidden" : "block"}`}>
                <button className="bg-lime-500 p-2 rounded mx-2 text-[13px]" onClick={()=> setIsClicked(false)}>
                  Cancel
                </button>
                <button className="bg-red-500 p-2 rounded text-[13px]">
                  <h4>Archive Forum</h4>
                </button>
                <button className="bg-blue-400 p-2 rounded mx-2 text-[13px]">
                  View Forum
                </button>
              </div>
            </div>
            <div>
              <div className="flex items-center ml-5 my-2">
                <h6 className="mr-1 text-[15px] font-medium">
                  Reported Forums
                </h6>
                <MdReport className="text-[#ef4444] text-[20px]" />
              </div>

              <div className="w-[500px] flex">
                {forums.map((forum, index) => (
                  <div
                    key={index}
                    className="w-[250px] h-[150px] box-color p-2 relative my-1 mx-2 rounded reports"
                    onClick={() => setIsClicked((prev) => !prev)}
                  >
                    <div className="absolute right-1">{!isClicked ? <GrCheckbox className="text-white"/> : <GrCheckboxSelected className="text-white"/>}</div>
                    <h4 className="text-[16px] font-medium ml-1">
                      {forum.forumTitle}
                    </h4>
                    <p className="font-normal text-[13px] text-gray-400 ml-1">
                      {forum.name}
                    </p>
                    <p className="ml-1 font-thin text-[12px]">
                      {forum.reportCount}
                    </p>
                    <p className="text-[13px] font-medium ml-1 absolute bottom-6">
                      Reported By{" "}
                    </p>
                    <p className="text-[12px] font-medium absolute bottom-2 ml-1">
                      {forum.reportBy}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="float-right mt-[-180px]">
          <Widgets
          title="Archived Forums"
          number="12"
          icons=<IoMdArchive className="text-[20px] text-red-500" 
          />
        />
          </div>
        </div>

        <div
          className={`${
            toggleTab === 2 ? "content active-content" : "content"
          }`}
        >
          <div className="flex justify-between">
          <h2 className="ml-2 text-[20px] font-medium">
            List of Archived Forums
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
            <h4 className="mr-1 ml-6 my-2 text-[15px] font-medium">
              Archived Forums
            </h4>
            <IoMdArchive className="text-[20px] text-green-500" />
          </div>

          <div className="flex justify-between">
            <div>
              {archivedForum.map((archive, index) => (
                <div
                  key={index}
                  className="w-[250px] h-[200px] box-color p-2 relative my-1 mx-2 rounded archived"
                  onClick={() => setClickedForum((prev) => !prev)}
                >
                <div className="absolute right-1 text-white">{!clickedForum ? <GrCheckbox className="text-white"/> : <GrCheckboxSelected className="text-white"/>}</div>
                  <h4 className="text-[16px] font-medium ml-2">
                    {archive.forumTitle}
                  </h4>
                  <p className="font-normal text-[13px] text-gray-400 ml-2">
                    {archive.name}
                  </p>
                  <p className="ml-2 font-thin text-[12px]">
                    {archive.reportCount}
                  </p>
                  <div className="absolute bottom-2">
                    <p className="text-[13px] font-medium ml-2 ">
                      Reported By{" "}
                    </p>
                    <p className="text-[12px] font-medium ml-2 mb-2">
                      {archive.reportBy}
                    </p>

                    <p className="text-[14px] font-medium ml-2">Claimed Violations:</p>
                    <p className="text-[13px] font-normal ml-2 text-gray-400">{archive.reportViolations}</p>

                  </div>
                </div>
              ))}
            </div>

            <div>
              <Widgets
                title="Archived Forums"
                number="12"
                icons=<IoMdArchive className="text-[20px] text-green-500" 
                />
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportedForums;
