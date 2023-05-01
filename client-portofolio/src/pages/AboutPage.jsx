import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { useInView } from "react-intersection-observer";

import { ImLocation2 } from "react-icons/im";
import { FiMail } from "react-icons/fi";


function AboutPage() {
  return (
    <div className="wrapper print:text-xs mx-10 ">
      <div className="flex felx-row justify-between mb-10">
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
              duration: 2,
            },
        }}
         className=" font-bold underline">About Me</motion.h1>
        <motion.h1
             initial={{
              opacity: 0,
              x: 200,
            }}
            animate={{
              opacity: 1,
                x: 0,
                transition: {
                  ease: [0.5, 0.71, 1, 1.5],
                  duration: 2,
                },
            }}
        className=" font-bold underline">Show Details</motion.h1>
      </div>
      <div className="grid grid-cols-3 gap-4 text-slate-700">
        <motion.div 
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
        className="col-span-3 md:col-span-1 print:col-span-1">
          <div className="flex flex-col items-center justify-center gap-4">
            <section className="text-center">
              <img
                className="w-40 rounded-full border-2 mb-2 border-slate-950 shadow-xl mx-auto "
                src="https://media.licdn.com/dms/image/C5603AQHS9vRs2kmPcA/profile-displayphoto-shrink_800_800/0/1647602987126?e=1688601600&v=beta&t=LcC3RQNOEfcHnXaLDbgD9xXN4RPE-_aOzXnfNinVhc4"
                alt=""
              />
              <h1 className="text-xl font-bold font-serif">
                Andrian Kusuma Solihin
              </h1>
              <h1 className="font-mono mb-2">Single</h1>
              <div className="flex flex-row items-center justify-center">
                <span>
                  <ImLocation2 />
                </span>
                <h1> JL. Prapatan dalam No.10 ,Balikpapan </h1>
              </div>
            </section>

            <section className="text-center">
              <div className="mb-4 pb-2 text-xl font-bold border-b-2 border-slate-600 print:text-base">
                ABOUT ME
              </div>
              <div className="mb-4">
                {" "}
                As a skilled full-stack developer, I likes to learn new
                interesting and challenging cases at work, and work focused on
                finding the best alternative solutions.{" "}
              </div>
            </section>

            <section className="text-center w-full">
              <div className="mb-4 pb-2 text-xl font-bold border-b-2 border-slate-600 print:text-base">
                Contact Me
              </div>
              <div className="flex flex-row items-center justify-center gap-2">
                <span>
                  <FiMail />
                </span>
                <h1> andriankusuma097@gmail.com </h1>
              </div>
            </section>
          </div>
        </motion.div>

        <motion.div
        initial={{
          opacity: 0,
          x: 200,
        }}
        animate={{
          opacity: 1,
            x: 0,
            transition: {
              ease: [0.5, 0.71, 1, 1.5],
              duration: 1,
            },
        }}
        className="col-span-3 md:col-span-2 print:col-span-2">
          <section className="mb-4">
            <div className="mb-4 pb-2 text-xl print:text-base font-bold border-b-2 border-slate-700 uppercase">
              Work Experience
            </div>
            <div className="flex flex-col w-full gap-4 mb-4 px-2">
              <div className="flex flex-row w-full justify-between">
                <span className="text-lg print:text-sm font-bold">
                  <div>PT. Patra Badak Arun Solusi</div>{" "}
                  <div className="text-base print:text-sm">
                    Electrical Technician
                  </div>
                </span>{" "}
                <span className="text-lg print:text-sm font-bold">
                  Nov/2021 - Okt/2022
                </span>
              </div>{" "}
              <div>
                <ul className="list-disc pl-4">
                  <li>
                    Data sheet for calibration for MCC in Substasion Ru V with
                    tools Magger Ingvar , SVERKER900.
                  </li>
                  <li>
                    {" "}
                    Analyzing wiring diagram for wiring details and
                    Troubelshouting MCC and Motor 3phase.
                  </li>
                  <li>
                    {" "}
                    Check record work procedure, to check each and every steps
                    equipment in the Pertamina RU V Balikpapan (Maintenance Area
                    1,2,3,4).
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="mb-4">
            <div className="mb-4 pb-2 text-xl print:text-base font-bold border-b-2 border-slate-700 uppercase">
              Education
            </div>
            <div className="flex flex-col w-full gap-4 mb-4 px-2">
              <div className="flex flex-row w-full justify-between">
                <span className="text-lg print:text-sm font-bold">
                  <div>
                    Surabaya State University{" "}
                    <span className="font-sm text-sm text-slate-400">
                      {" "}
                      – Surabaya, Jawa Timur
                    </span>{" "}
                  </div>{" "}
                  <div className="text-base print:text-sm">
                    S1- Electrical Engineer –{" "}
                    <span className="font-sm text-sm text-slate-400">
                      {" "}
                      GPA : 3,57 of 4,00{" "}
                    </span>
                  </div>
                </span>{" "}
                <span className="text-lg print:text-sm font-bold">
                  2015 - 2019
                </span>
              </div>{" "}
              <div>
                <ul className="list-disc pl-4">
                  <li>
                    Thesis Title: Designed Up Control System Pid To Control
                    Speed Prototype Elevator Labview Based..
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="mb-4">
            <div className="mb-4 pb-2 text-xl print:text-base font-bold border-b-2 border-slate-700 uppercase">
              Skills
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 px-5">
              <div className="flex flex-col w-full gap-1 mb-4" >
                <div className="flex flex-row w-full justify-between">
                  <span className="text-lg print:text-sm font-bold italic">
                    FrontEnd
                  </span>
                </div>{" "}
                <div>
                  <ul className="list-disc pl-4">
                    <li>Vue </li> 
                    <li>React  </li> 
                  </ul>
                </div>
              </div>
              <div className="flex flex-col w-full gap-1 mb-4" >
                <div className="flex flex-row w-full justify-between">
                  <span className="text-lg print:text-sm font-bold italic">
                    BackEnd
                  </span>
                </div>{" "}
                <div>
                  <ul className="list-disc pl-4">
                    <li>Express + sequelize </li> 
                    <li>PostgresSQL  </li> 
                    <li>MongoDB  </li> 
                    <li>GraphQL+ApolloServer   </li> 
                  </ul>
                </div>
              </div>
              <div className="flex flex-col w-full gap-1 mb-4" >
                <div className="flex flex-row w-full justify-between">
                  <span className="text-lg print:text-sm font-bold italic">
                    Cloud Computing
                  </span>
                </div>{" "}
                <div>
                  <ul className="list-disc pl-4">
                    <li>Railway </li> 
                    <li>Firebase </li> 
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutPage;
