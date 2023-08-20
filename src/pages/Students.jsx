import { BsSearch, BsFiletypeCsv } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { DataGrid } from "@mui/x-data-grid";
import profile from "../assets/profile.png";
import { useState } from "react";
import Modal from "../modal/Modal"
const Students = () => {
  const [openModal, setOpenModal] =useState(false)
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "photo", headerName: "Photo", width: 80, 
    renderCell: (params) => {
      return (
        <div className="w-full items-center">
          <img src={params.row.profile} alt=""  className="w-[50px] h-[50px] rounded-full"/>
        </div>
      )
    }
  },
    { field: "firstName", headerName: "First name", width: 110 },
    { field: "middleInitial", headerName: "MI", width: 60 },
    { field: "lastName", headerName: "Last name", width: 110 },
    {
      field: "course",
      headerName: "Course",
      width: 110,
    },
    {
      field: "year",
      headerName: "Year",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 110,
    },
    {
      field: "section",
      headerName: "Section",
      width: 110,
    },
    {
      field: "college",
      headerName: "College",
      width: 110,
    },
    {
      field: "email",
      headerName: "Email",
      width: 110,
    },
  ];

  const rows = [
    { id: 1, photo: profile ,lastName: "Snow", firstName: "Jon", middleInitial: "A", course: "BSIT", year: "2021", college: "CCS", section: "4-3", email: "fake@gmail.com"},
    { id: 2, photo: profile ,lastName: "dummy", firstName: "Doe", middleInitial: "B", course: "BSIS", year: "2022", college: "CCS", section: "4-1", email: "dummy@gmail.com"},
    { id: 3, photo: profile, lastName: "Lannister", firstName: "Cersei", middleInitial: "C", course: "BSA", year: "2020", college: "COA", section: "3-1", email: "hello@gmail.com" },
    { id: 4, photo: profile, lastName: "Lannister", firstName: "Jaime", middleInitial: "D", course: "BSBA", year: "2019", college: "COB", section: "2-3", email: "hi@gmail.com" },
    { id: 5, photo: profile, lastName: "Winter", firstName: "Win", middleInitial: "E", course: "BSBA", year: "2016", college: "COB", section: "4-3", email: "Win@gmail.com" },
    { id: 6, photo: profile, lastName: "Summer", firstName: "Sum", middleInitial: "F", course: "BSA", year: "2019", college: "COA", section: "1-4", email: "Sum@gmail.com" },
    { id: 7, photo: profile, lastName: "Fall", firstName: "Fal", middleInitial: "G", course: "BSIT", year: "2018", college: "CCS", section: "3-3", email: "Fall@gmail.com" },
    { id: 8, photo: profile, lastName: "Autumn", firstName: "Aut", middleInitial: "H", course: "BSIS", year: "2023", college: "CCS", section: "1-1", email: "aut@gmail.com" },
    { id: 9, photo: profile, lastName: "Summer", firstName: "Sum", middleInitial: "F", course: "BSA", year: "2019", college: "COA", section: "1-4", email: "Sum@gmail.com" },
    { id: 10, photo: profile, lastName: "Fall", firstName: "Fal", middleInitial: "G", course: "BSIT", year: "2018", college: "CCS", section: "3-3", email: "Fall@gmail.com" },
    { id: 11, photo: profile, lastName: "Autumn", firstName: "Aut", middleInitial: "H", course: "BSIS", year: "2023", college: "CCS", section: "1-1", email: "aut@gmail.com" },




  ];

  return (
    <div className="students absolute h-screen left-[260px] bg-color text-white font-poppins">
      <div className="h-[60px] flex justify-between items-center sticky top-0 bg-color z-30 mt-3">
        <h2 className="text-white text-2xl p-8 font-poppins font-medium">
          Students
        </h2>

        <form action="" className="flex items-center mr-6">
          <div
            className="flex items-center mx-2 border py-1 px-4 rounded-full"
            placeholder="search..."
          >
            <BsSearch className="mr-2" />
            <input
              type="text"
              className="py-1 border-none outline-none bg-transparent"
            />
          </div>

          <div>


          <button className="flex items-center mx-3 bg-light-yellow py-2 px-2 rounded bottom-9" onClick={(e) => {
            e.preventDefault()
            setOpenModal(true)}
          }>
    <AiOutlinePlus className="mr-2" />{" "}
    <h6 className="text-[13px]">Add Students</h6>
         
        </button>
          </div>
          <button className="flex items-center mx-3 bg-lime-600 p-2 rounded">
            <BsFiletypeCsv className="mr-2" />{" "}
            <h6 className="text-[13px]">Select CSV File</h6>
          </button>
        </form>
      </div>

      <div className="w-[95%] m-auto text-white h-[85%] mt-4 overflow-scroll ">
   
      <Modal open={openModal} onClose={() => setOpenModal(false)}/>
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
  );
};

export default Students;
