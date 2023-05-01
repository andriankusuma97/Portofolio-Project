import Navbar from "./Navbar";
import Footer from "./Footer";

import { Outlet } from "react-router-dom";

export default function Layout(){
  return (
    <div className="bg-slate-200">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}