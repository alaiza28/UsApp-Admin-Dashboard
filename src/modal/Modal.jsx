import {AiFillCloseCircle} from "react-icons/ai"

const Modal = ({open, onClose}) => {
    if(!open) return null
  return (
    <div className="absolute text-white z-50 w-[70%] h-[60%] m-auto box-color rounded-md modal">
        <div className="relative">

            <div className="cursor-pointer">
                <AiFillCloseCircle className=" text-2xl text-red-600 absolute top-2 right-2" onClick={onClose}/>
            </div>

            <form action="" className="flex items-center flex-wrap h-[70%] font-poppins">
             
               <div className="flex-1 mt-24 h-[60%] ml-10 mr-2">
               <label htmlFor="" className="text-[14px] font-medium mr-2">First Name:</label>
               <input type="text" className="mb-3 py-[6px] w-[100%] border-none outline-none rounded-md"/> <br />
               
               <label htmlFor="" className="text-[14px] font-medium mr-2">Middle Initial:</label>
               <input type="text" className="mb-3 py-[6px] w-[100%] border-none outline-none rounded-md" /> <br />
               
               <label htmlFor="" className="text-[14px] font-medium mr-2">Last Name:</label>
               <input type="text" className="mb-3 py-[6px] w-[100%] border-none outline-none rounded-md"/> <br />
               </div>

                <div className="flex-1 h-[60%] mr-10 mt-14 ml-2">
                <label htmlFor="" className="text-[14px] font-medium mr-2">Email:</label>
                <input type="email" className="mb-3 py-[6px] w-[100%] border-none outline-none rounded-md"/><br />

                <label htmlFor="" className="text-[14px] font-medium mr-2">Student No:</label>
                <input type="text" className="mb-3 py-[6px] w-[100%] border-none outline-none rounded-md"/>
                
                <label htmlFor="" className="text-[14px] font-medium mr-2 outline-none border-none">Select Course</label>
                <select name="" id="" className="w-[30%] py-[3px]" >
                    <option value="" className="text-black">CCS</option>
                    <option value="" className="text-black">COB</option>
                    <option value="" className="text-black">COA</option>
                    <option value="" className="text-black">COE</option>

                </select>
                </div>

                <div className="w-[100%] m-auto text-center mt-5">
                <button className="bg-light-yellow py-2 px-2 rounded text-[14px]" onClick={(e) => {
                    e.preventDefault()
                    onClose()
                }}>Add Student</button>
                </div>

            </form>

           
        </div>
       
    </div>
  )
}

export default Modal