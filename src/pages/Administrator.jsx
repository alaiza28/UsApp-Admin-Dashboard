import React from 'react'
import profile from "../assets/profile-pic.jpg"
import {AiOutlineCamera} from "react-icons/ai"

const Administrator = () => {
  return (
    <div className="admin h-screen left-[260px] bg-color text-white font-poppins relative">
        <h2 className='text-[20px] m-4 font-poppins'>Admin's Profile</h2>
        <div className='flex items-center w-[80%] m-auto box-color p-6 admin-box'>
            <div className='relative mr-4'>
                <img src={profile} alt="profile" className='w-[200px] h-[200px] box-color rounded-full'/>
                <AiOutlineCamera className='absolute bottom-1 right-6 text-[35px] box-color rounded-full'/>
            </div>

            <div>
                <label htmlFor="" className='text-[16px] font-medium mr-4'>Name:</label>
                <input type="text" disabled className='input-border py-[3px] w-[260px] text-[#757373]' value="Kim Jisoo"/><br />

                <label htmlFor="" className='text-[16px] font-medium mr-4'>Email:</label>
                <input type="email" disabled className='input-border py-[3px] w-[260px] text-[#757373]' value="kimjisoo@gmail.com"/><br />

                <label htmlFor="" className='text-[16px] font-medium mr-4'>Usertype:</label>
                <input type="text" disabled className='input-border py-[3px] w-[233px] text-[#757373]' value="SuperAdmin"/><br />
            </div>
        </div>

        <button className='bg-light-blue py-[5px] text-[14px] text-black px-2 rounded mt-6 ml-32'>Change Password</button>
    </div>
  )
}

export default Administrator