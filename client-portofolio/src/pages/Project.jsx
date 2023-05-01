import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/action/actionCreator";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { useInView } from "react-intersection-observer";

function ProjectPage() {
  const project = useSelector((state) => {
    return state.projectReducer.project;
  });
  const[loading,setLoading]= useState(true)
  const dispatch = useDispatch();
 

  console.log(project);

  useEffect(() => {
    dispatch(fetchData());
    if(project){
      setLoading(false)
    }
   
  },);
  return (
    <div>
      <div className=" bg-slate-100  rounded-md p-10 mx-10">
        <motion.h1
         initial={{
          opacity: 0,
          x: -200,
        }}
        animate={{
          opacity: 1,
            x: 0,
            transition: {
              ease: [0.5, 0.71, 1, 1.5],
              duration: 1,
            },
        }}
         className="mb-10 text-4xl font-bold font-mono hover:underline ">
          My Projects:
        </motion.h1>
        <div  className=" grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
          {loading? <h1>loading.....</h1>  : project?.map((data, idx) => <Card
          data={data} key={data.id} />)
            }
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
