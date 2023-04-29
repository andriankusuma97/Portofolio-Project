import { Link } from "react-router-dom";


export default function Navbar(){
  return (
    <div>
      <h1>Navbar</h1>
      <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Utama</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/portofolio"}>Portofolio Projects</Link>
          </li>
        </ul>
    </div>
  )
}