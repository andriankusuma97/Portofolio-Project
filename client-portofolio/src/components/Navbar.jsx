import { Link } from "react-router-dom";
import { BsGithub,BsLinkedin } from "react-icons/bs";

export default function Navbar(){
  return (
    <div className="flex justify-between py-10 mb-10 mx-10">
      <div > 
        <ul className="flex items-center font-mono text-2xl " >
            <li className="mx-3 ">
              <Link to={"/"}> <img className="rounded-full" width={40} height={40} src="https://avatars.githubusercontent.com/u/122440573?v=4" alt="" /> </Link>
            </li>
            <li className="mx-3 focus:cursor-auto hover:bg-slate-200 p-1 rounded-md">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="mx-3 focus:cursor-auto hover:bg-slate-200 p-1 rounded-md">
              <Link to={"/portofolio"}>Projects</Link>
            </li>
          </ul>
      </div>
      <div className="flex">
        <a href="https://github.com/andriankusuma97" className="text-3xl hover:text-4xl"> <BsGithub/> </a>
        <a href="https://www.linkedin.com/in/andrian-kusuma-9150461a2/" className="text-3xl ml-3 hover:text-4xl"> <BsLinkedin/> </a>
        
      </div>
    </div>
  )
}