import { DataGrid } from '@mui/x-data-grid';
import {AiOutlinePlus} from "react-icons/ai"


const Course = () => {

  const columns = [
    
    { field: "college", headerName: "College", width: 200 },
    { field: "campus", headerName: "Campus", width: 200 },
    { field: "course", headerName: "Course", width: 200 },
  ];

  const rows = [
    {
      id: 1,
      college: "CCS",
      campus: "BINANGONAN",
      course: "BSIT, BSIS, DEV, BSCS",
    },
    { id: 2, college: "COA", campus: "BINANGONAN", course: "BSA, DEV" },
    { id: 3, college: "COB", campus: "BINANGONAN", course: "BSBA, BSOA, DEV" },
    { id: 4, college: "COE", campus: "MORONG", course: "BSCE" },
  ];
  


  return (
    <div className="course absolute h-screen left-[260px] bg-color text-white font-poppins">
      <div className='h-[60px] flex justify-between items-center sticky top-0 bg-color z-40 mx-6'>
        <h2 className='text-white text-[20px] p-8 font-poppins font-medium'>List of Course</h2>
        <button className='flex items-center mx-3 bg-light-yellow py-2 px-2 text-[14px] rounded'><AiOutlinePlus className='text-white mx-1'/>Add Course</button>
      </div>

     
    <div className='w-[90%] m-auto text-white h-[50%]'>
    <DataGrid
    
    sx={{
      boxShadow: 2,
      border: 2,
      color: "white",
      cursor: "pointer",
      borderColor: "gray",
      fontFamily: "Poppins",
      fontWeight: 200,
      fontSize: 14,
      textAlign: "center",
      "& .MuiDataGrid-cell:hover": {
        color: "white",
      },
      "& .MuiDataGrid-columnHeaders": {
        backgroundColor: "#3f3f46",
        color: "white",
        fontSize: 15,
        fontWeight: 600,
      },
      
      outline: "none",
      
    }}
    rows={rows}
    columns={columns}
    pageSize={4}
    rowsPerPageOptions={[5]}
    checkboxSelection
    
  />
    </div>
     
     
    </div>
  )
}

export default Course