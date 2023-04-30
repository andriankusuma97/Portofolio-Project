import { Link } from "react-router-dom";
import { BsGithub,BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion"

export default function Navbar(){
  return (
    <div className="flex justify-between py-10 px-10 mb-4 ">
      <div > 
        <ul className="flex items-center font-mono text-2xl " >
            <motion.li className="mx-3 "
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            >
              <Link to={"/"}> <img className="rounded-full" width={40} height={40} src="https://avatars.githubusercontent.com/u/122440573?v=4" alt="" /> </Link>
            </motion.li>
            <motion.li className="mx-3 focus:cursor-auto hover:bg-slate-300 p-1 rounded-md"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}>
              <Link to={"/about"}>About</Link>
            </motion.li>
            <motion.li className="mx-3 focus:cursor-auto hover:bg-slate-300 p-1 rounded-md"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}>
              <Link to={"/project"}>Projects</Link>
            </motion.li>
          </ul>
      </div>
      <div className="flex">
        <motion.a target={"_blank"} href="https://github.com/andriankusuma97"
         className="text-3xl "
         whileHover={{ y: -3 }}
         whileTap={{ scale: 0.9 }}
         > <BsGithub/> </motion.a>
        <motion.a target={"_blank"} href="https://www.linkedin.com/in/andrian-kusuma-9150461a2/" className="text-3xl ml-3 "
         whileHover={{ y: -3 }}
         whileTap={{ scale: 0.9 }}
        > <BsLinkedin/> </motion.a>
        
      </div>
    </div>
  )
}