import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { DataGrid } from "@mui/x-data-grid";
const College = () => {
  const columns = [
    { field: "course", headerName: "Course", width: 200 },
    { field: "college", headerName: "College", width: 200 },
    { field: "noYears", headerName: "No. of Years", width: 200 },
    { field: "noSection", headerName: "No. of Section", width: 200 },

  ];

  const rows = [
    {id: 1, course: "BSA", college: "COA", noYears: 4, noSection: 4},
    {id: 2, course: "BSBA", college: "COB", noYears: 4, noSection: 5},
    {id: 3, course: "BSCE", college: "COE", noYears: 5, noSection: 9},
    {id: 4, course: "BSCS", college: "CCS", noYears: 5, noSection: 4},
    {id: 5, course: "BSIS", college: "CCS", noYears: 4, noSection: 4},
    {id: 6, course: "BSIT", college: "CCS", noYears: 4, noSection: 4},
    {id: 7, course: "BOA", college: "COB", noYears: 4, noSection: 4},
    {id: 8, course: "BSA", college: "COA", noYears: 4, noSection: 4},
    {id: 9, course: "DEV", college: "COB", noYears: 3, noSection: 3},

  ];
  return (
    <div className="colleges absolute h-screen left-[260px] bg-color text-white font-poppins">
      <div className="h-[60px] flex justify-between items-center sticky top-0 bg-color z-40 mx-6">
        <h2 className="text-white text-[20px] p-8 font-poppins font-medium">
          List of College
        </h2>
        <button className="flex items-center mx-3 bg-light-yellow py-2 px-2 text-[14px] rounded">
          <AiOutlinePlus className="text-white mx-1" />
          Add College
        </button>
      </div>

      <div className="w-[90%] m-auto text-white h-[85%]">
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
  );
};

export default College;
