import React, { useRef } from 'react';
import Card from './card';


function Foreground() {
  const ref = useRef(null); // Define a ref using useRef hook

  const data = [
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus",
      fileSize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "download now", tagColor: "green" }
    },
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus",
      fileSize: ".9mb",
      close: false,
      tag: { isOpen: false, tagTitle: "download now", tagColor: "green" }
    },
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus",
      fileSize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "download now", tagColor: "blue" }
    }
  ];

  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5'>
      {data.map((item, index) => (
        <Card key={index} data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
