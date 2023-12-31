import { BrowserRouter, Routes, Route } from "react-router-dom"
import DocUpload from "./DocUpload";
import DashBoard from "./DashBoard";
import FileDetail from "./FileDetail";


export default function Routing() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<DocUpload/>}/>
            <Route path="/dashboard" element={<DashBoard/>} />
            <Route path="/viewResponse" element={<FileDetail />} />
        </Routes>
      </BrowserRouter>
    );
  }
