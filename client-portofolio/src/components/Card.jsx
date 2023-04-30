import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/action/actionCreator";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <div className=" col-span-6 ">
      <div className="bg-white relative flex flex-col w-full rounded-3xl rounded-br-2xl border border-solid border-dark bg-light p-4 shadow-xl ">
        <div className="flex w-full bg-white ">
          <motion.img
            whileHover={{ scale: 0.9 }}
            className="rounded-md"
            src="https://images2.prokal.co/webkp/file/berita/2023/04/30/thumb/c1c3a94093888e1474d99947a47667e8.jpg"
            alt=""
          />
        </div>

        <div className="mt-4 flex w-full flex-col items-start justify-between ">
          <span class="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
            Website Template
          </span>
          <a
            target="_blank"
            class="underline-offset-2 hover:underline"
            href="#"
          >
            <h2 class="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
              NFT collection Website
            </h2>
          </a>
        </div>
        <div className="flex w-full items-center  justify-between">
          <a
            target="_blank"
            className="rounded text-lg font-medium underline md:text-base "
            aria-label="NFT collection Website"
            href="#"
          >
            Visit
          </a>

          <motion.a
            href="https://github.com/andriankusuma97"
            className="text-3xl "
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            {" "}
            <BsGithub />{" "}
          </motion.a>
        </div>
      </div>
    </div>
  );
}
