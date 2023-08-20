import {BrowserRouter, Routes, Route} from "react-router-dom"
import Sidebar from "./components/Sidebar";
import College from "./pages/College";
import Course from "./pages/Course";
import Home from "./pages/Home";
import Students from "./pages/Students";
import ReportedForums from "./pages/ReportedForums";
import UpdateDetailsRequest from "./pages/UpdateDetailsRequest";
import Administrator from "./pages/Administrator";


function App() {
  return (
   <BrowserRouter>
      <div className="flex relative">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/students" element={<Students />} />
        <Route path="/course" element={<Course />}/>
        <Route path="/college" element={<College />} />
        <Route path="/reported-forums" element={<ReportedForums />} />
        <Route path="/update-details" element={<UpdateDetailsRequest />} />
        <Route path="/admin" element={<Administrator />}/>
      </Routes>
      </div>
   </BrowserRouter>
  );
}

export default App;
