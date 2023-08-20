import { AiFillLike } from "react-icons/ai";
import { GoCommentDiscussion } from "react-icons/go";
import { FaList, FaUsers } from "react-icons/fa";
import { useState } from "react";
import img1 from "../assets/coa.png"
import img2 from "../assets/cob.png"
import img3 from "../assets/ccs.png"
import ForumsUpdate from "../components/ForumsUpdate";
import { Link } from "react-router-dom";


const Home = () => {
  const [open, setOpen] = useState(true);

  
  const listForums = [
    {
      title: "How to find the X",
      course: "CCS",
      name: "John Doe",
      likes: "2",
    },
    {
      title: "How to find the X",
      course: "CCS",
      name: "John Doe",
      likes: "2",
    },
    {
      title: "How to find the X",
      course: "CCS",
      name: "John Doe",
      likes: "2",
    },
    {
      title: "How to find the X",
      course: "CCS",
      name: "John Doe",
      likes: "2",
    },
    {
      title: "How to find the X",
      course: "CCS",
      name: "John Doe",
      likes: "2",
    },
    {
      title: "How to find the X",
      course: "CCS",
      name: "John Doe",
      likes: "2",
    },
    {
      title: "How to find the X",
      course: "CCS",
      name: "John Doe",
      likes: "2",
    },
  ]
  return (
    <div className="absolute left-[260px] bg-color home">
      <div className="h-[60px] flex justify-between items-center sticky top-0 bg-color z-40">
        <h2 className="text-white text-2xl p-8 font-poppins font-medium">
          Dashboard
        </h2>
        <Link to="/admin" className="btn duration-300 text-white bg:light-yellow px-5 mx-6 rounded-lg bg-[#EAB308] py-3 font-poppins font-semibold text-[13px]">
          Administrator
        </Link>
      </div>



      <div className="flex justify-between">

        <div>
        <div className="flex m-4 mr-5">
          <div className={`text-white font-poppins`}>
            <h5 className="flex items-center ml-2 text-[14px] mb-2">
              Most Liked Forums{" "}
              <AiFillLike className="ml-2 text-[18px] text-light-blue" />
            </h5>

            <div
              className={`${
                !open ? "h-[150px]" : "h-[50px]"
              } "w-[230px]" rounded-lg box-color p-3 cursor-pointer duration-500 list-box hover:shadow-1xl relative boxes`}
              
            >
              <p className={`text-[15px]`}>How to be a better person?</p>
              <p className={`text-[13px] ${open && "hidden"}`}>CCS</p>
              <p
                className={`text-[13px] my-3 ${open && "hidden"} duration-300`}
              >
                Jenyl Maningcay
              </p>

              <div
                className={`absolute flex justify-between bottom-2 w-[90%] ${
                  open && "hidden"
                }`}
              >
                <p className="text-[12px] font-thin">9 Messages</p>

                <p className="flex items-center text-[14px] font-thin">
                  {" "}
                  <AiFillLike className="text-light-blue mr-2" /> 2
                </p>
              </div>
            </div>
          </div>

          <div className="text-white font-poppins ml-4">
            <h5 className="flex items-center ml-2 text-[14px] mb-2">
              Most Discussed Forums{" "}
              <GoCommentDiscussion className="ml-2 text-[18px] text-light-blue" />
            </h5>

            <div className={`${!open ? "h-[150px]" : "h-[50px]"} duration-500 w-[230px] box-color rounded-lg list-box p-3 forum cursor-pointer boxes relative`} onClick={() => setOpen((prev) => !prev)}>
            <p className={`text-[15px]`}>How to be a better person?</p>
            <p className={`text-[13px] ${open && "hidden"}`}>CCS</p>
            <p
              className={`text-[13px] my-3 duration-300 ${open && "hidden"}`}
            >
              Jenyl Maningcay
            </p>

          <div className={`absolute flex justify-between bottom-2 w-[90%] ${open && "hidden"}`}>
          <p className="text-[12px] font-thin">9 Messages</p>
                <p className="flex items-center text-[14px] font-thin">
                  {" "}
                  <AiFillLike className="text-light-blue mr-2" /> 2
                </p>
          </div>

            </div>
          </div>
        </div>

        <div className="text-white font-poppins mx-6 mt-20">
            <div className="flex items-center mb-3">
                <h4 className="text-[14px] mr-2">List of All Forums</h4>
                <FaList className="text-light-blue text-[14px]"/>
            </div>    

            <div className="grid grid-cols-3 overflow-auto">
            {
              listForums.map((list, index)=> (
                <div key={index} className="w-[230px] h-[150px] box-color p-3 rounded-md mr-5 mb-3 relative list-box duration-200 cursor-pointer boxes">
               
                  <h3 className="text-[15px]">{list.title}</h3>
                  <h4 className="text-[13px]">{list.course}</h4>
                  <p className="text-[12px] my-4">{list.name}</p>

                  <div className="flex justify-between absolute w-[90%] bottom-2">
                    <h3 className="font-thin text-[12px]">2 Messages</h3>
                    <div className="font-thin text-[12px] flex items-center">
                      <AiFillLike className="text-light-blue mr-1"/>

                      {list.likes}
                    </div>
                  </div>
                </div>
              ))
            }
            </div>
        </div>

        </div>


        <div>
            <ForumsUpdate />
        </div>
      </div>
    </div>
  );
};

export default Home;
