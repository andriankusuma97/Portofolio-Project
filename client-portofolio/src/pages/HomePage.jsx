import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/action/actionCreator";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { useInView } from "react-intersection-observer";
import { RiVuejsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiPostgresql,SiMongodb,SiRailway,SiFirebase } from "react-icons/si";


function HomePage() {
  const project = useSelector((state) => {
    return state.projectReducer.project;
  });
  const[loading,setLoading]= useState(true)

  const dispatch = useDispatch();
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const animation1 = useAnimation();
  const animation2 = useAnimation();

  console.log(project);

  useEffect(() => {
    dispatch(fetchData());
    if(project){
      setLoading(false)
    }
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: {
          ease: [0.5, 0.71, 1, 1.5],
          duration: 1,
        },
      });
      animation1.start({
        opacity: 1,
        x: 0,
        transition: {
          ease: [0.5, 0.71, 1, 1.5],
          duration: 1,
        },
      });
      animation2.start({
        opacity: 1,
        y: 0,
        transition: {
          ease: [0.5, 0.71, 1, 1.5],
          duration: 2,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: 200,
        opacity: 0,
      });
      animation1.start({
        x: -200,
        opacity: 0,
      });
      animation2.start({
        opacity: 0,
        y: -200,
      });
    }
  }, [inView]);
  return (
    <div className=" px-10">
      <div
        ref={ref}
        className="flex items-center mt-12  p-10  bg-slate-100  rounded-lg "
      >
        <motion.div
          initial={{
            opacity: 0,
            x: -200,
          }}
          animate={animation1}
          className="flex-1 w-full items-center  text-center"
        >
          <motion.h1 className="text-5xl font-bold font-serif ">
            Andrian Kusuma
          </motion.h1>
          <motion.h1 className="font-medium mb-8 text-xs hover:underline ">
            {" "}
            Developer | Software | Fullstack Javascript
          </motion.h1>
          <motion.h1 className="font-mono">
            As a skilled full-stack developer, I likes to learn new interesting
            and challenging cases at work, and work focused on finding the best
            alternative solutions.
          </motion.h1>
          <h1 className="mt-5 font-medium mb-0 ">
            {" "}
            Developer | "I never dreamed about success. I worked for it".{" "}
          </h1>
          <div className="flex mt-0 ">
            <div
              className=" mr-1 flex flex-row items-center mx-auto w-40 mt-10 rounded-lg text-white border-2 border-solid bg-slate-950 text-lg  font-semibold p-2
                capitalize  hover:border-slate-950 hover:bg-transparent hover:text-slate-950 
                "
            >
              <a
                className="flex-1"
                target={"_blank"}
                href="https://docdro.id/cN2q5K4"
              >
                resume
              </a>
              <div className="  text-white hover:text-slate-950 ">
                <BiLinkExternal />
              </div>
            </div>
            <div className=" ml-1 flex flex-row items-center mx-auto w-40 mt-10 underline font-semibold hover:text-xl text-lg">
              <a
                className="flex-1"
                target={"_blank"}
                href="mailto:andriankusuma097@gmail.com"
              >
                Contact Me
              </a>
              <div className="  text-white hover:text-slate-950 ">
                <BiLinkExternal />
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{
            opacity: 0,
            x: 200,
          }}
          animate={animation}
          className="flex-1 "
        >
          <img
            className="mx-auto "
            src="https://png.pngtree.com/png-clipart/20230102/original/pngtree-3d-boy-head-portrait-png-image_8855190.png"
            alt=""
            height={300}
            width={300}
          />
          <motion.div
            initial={{
              opacity: 0,
              y: -200,
            }}
            animate={animation2}
             className="flex flex-cols sm:flex-row text-4xl text-center items-center justify-center mb-8 mx-auto mt-10">
              <RiVuejsFill className="text-green-700 mx-3"/>
              <FaReact className="text-sky-700 mx-3"/>
              <SiPostgresql className="text-blue-800  mx-3"/>
              <SiMongodb className="text-green-800 bg-black rounded-full  mx-3"/>
              <SiRailway className="text-black  mx-3"/>
              <SiFirebase className="text-orange-600  mx-3"/>
            </motion.div>

        </motion.div>
      </div>

      <div className=" bg-slate-100  rounded-md p-10 mt-20">
        <h1 className="mb-10 text-4xl font-bold font-mono hover:underline ">
          My Projects:
        </h1>
        <div className=" grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
          {
         loading? <h1>loading.....</h1>   : project ?.map((data, idx) => <Card data={data} key={data.id} />)
            .slice(0, 2)}
        </div>

        <div className=" mt-10 font-bold hover:underline hover:text-lg">
          <Link to={"/project"}>See More...</Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
