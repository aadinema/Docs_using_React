import React from "react";

function Background() {
  return (
    <>
    <div className=" fixed z-[2] w-full h-screen">

    <div className="w-full py-10 flex justify-center text-xl font-semibold text-zinc-500 absolute top-[5%]">
            Documents
      </div>

      <h1 className="absolute text-[10vw] leading-none tracking-tighter top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%v] font-semibold text-zinc-700 ">
        Docs.
      </h1>

    </div>
       
    </>
  );
}

export default Background;
