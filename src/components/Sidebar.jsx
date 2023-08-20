import {RiDashboardFill} from "react-icons/ri"
import {FaUsers, FaSchool} from "react-icons/fa"
import {MdSchool, MdReport, MdLogout, MdOutlineSecurityUpdate} from "react-icons/md"
import {GrDocumentUpdate, GrUpdate} from "react-icons/gr"
import {BsSunFill} from "react-icons/bs";
import {BiSearch} from "react-icons/bi"
import Students from "../pages/Students";
import { Link } from "react-router-dom";
import Home from "../pages/Home";
import { useState } from "react";
import College from "../pages/College";
import Course from "../pages/Course";
import ReportedForums from "../pages/ReportedForums";
import UpdateDetailsRequest from "../pages/UpdateDetailsRequest";



const Sidebar = () => {
  const [btnState, setBtnState] = useState(false);

  const sidebarItem = [
    {
      sidenav: <FaUsers />,
      title: "Students",
      to: "/students",
      element: <Students />
    },
    {
      sidenav: <FaSchool />,
      title: "College",
      to: "/college",
      element: <College />
    },
    {
      sidenav: <MdSchool />,
      title: "Course",
      to: "/course",
      element: <Course />
    },
    {
      sidenav: <MdReport />,
      title: "Reported Forums",
      to: "/reported-forums",
      element: <ReportedForums />
    },
    {
      sidenav: <MdOutlineSecurityUpdate />,
      title: "Update Details Request",
      to: "/update-details",
      element: <UpdateDetailsRequest />
    },
  ]

  const handleEvent = () => {
    setBtnState(btnState => !btnState)
  }

  let toggleClassCheck = btnState ? 'active' : null;
  return (
   <div className="w-[260px] fixed h-screen sidebar-color duration-300">
    <div className="p-8">
      <h4 className="font-teko text-5xl text-light-blue text-center cursor-pointer">USAPP</h4>
    </div>

    <div className="px-5">
     
      <div className="flex justify-center items-center mb-3 ml-2">
      <BiSearch className="text-white text-2xl mr-2"/>
      <input type="text" className="text-base bg-transparent w-full text-white focus:outline-none" placeholder="Search.."/>
      </div>

      <Link to="/" element={<Home />} className={`flex justify-center items-center p-3 sidenav rounded cursor-pointer ${toggleClassCheck}`}>
      <RiDashboardFill className="text-[#73FBFD] text-2xl mr-4"/>
      <h4 className="text-white text-[16px] font-poppins">Admin Dashboard</h4>
     </Link>

    </div>

    <hr className="w-[80%] m-auto my-6"/>

    <ul className="px-5 cursor-pointer nav">  
      {
        sidebarItem.map((nav, index)=> (
          <Link to={nav.to} element={nav.element} key={index} className={`text-white p-3 flex items-center font-poppins sidenav rounded ${toggleClassCheck}`}>
          <div className="text-2xl mr-4">
            {nav.sidenav}
          </div>
          <h4>{nav.title}</h4>
          </Link>
        ))
      }

      <div className="absolute bottom-2">
        <li className="text-white flex items-center font-poppins sidenav p-3 rounded">
          <BsSunFill className="text-2xl mr-4 text-light-yellow"/>
          <h4>Light Mode</h4>
        </li>
        <li className="text-white flex items-center font-poppins sidenav p-3 rounded">
          <MdLogout className="text-2xl mr-4"/>
          <h4>Sign Out</h4>
        </li>
      </div>
    </ul>
   </div>
  )
}

export default Sidebar