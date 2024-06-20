import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{scale:1.2}}
        dragElastic={0.2}
        dragTransition={{bounceStiffness: 600 , bounceDamping: 30}}
        className=" relative w-72 h-72 bg-slate-800 rounded-[40px] text-white px-10 py-5 overflow-hidden flex-shrink-0"
      >
        <FaRegFileAlt />
        <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
        <div className="footer absolute bottom-0 w-full h-20 left-0  py-3 mb-5 ">
          <div className="flex justify-between items-center px-8 ">
            <h5>{data.fileSize}</h5>

            <span className="h-7 w-7 rounded-full bg-zinc-600 flex justify-center items-center">
              {data.close ? (
                <IoCloseSharp />
              ) : (
                <LuDownload size=".7em" color="#fff" />
              )}
            </span>
          </div>
          {data.tag.isOpen && (
            <div
              className={`tag w-full py-4 ${
                data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
              } flex items-center justify-center font-semibold text-xl`}
            >
              {data.tag.tagTitle}
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Card;
