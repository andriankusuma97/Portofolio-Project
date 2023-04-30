import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/action/actionCreator";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Card from "../components/Card";

function ProjectPage() {
  return (
    <div>
      <div className=" bg-slate-100  rounded-md p-10 mx-10">
        <h1 className="mb-10 text-4xl font-bold font-mono hover:underline ">
          My Projects:
        </h1>
        <div className=" grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
