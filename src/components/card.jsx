import React, { useEffect, useRef } from "react";

function Card({title, pic, details }) {
    const textWord = useRef(null);
    const normal = useRef(null);
    const cardHover = useRef(null);

    useEffect(()=>{
      const textHover = textWord.current;
      const textNormal = normal.current;
      const hoverCard = cardHover.current

      const handleMouseIn = ()=>{
        textHover.classList.remove('hidden');
        textNormal.classList.add('hidden');
      }
      const handleMouseOut = ()=>{
        textHover.classList.add('hidden');
        textNormal.classList.remove('hidden');
      }

      hoverCard.addEventListener('mouseover', handleMouseIn);
      hoverCard.addEventListener('mouseout', handleMouseOut);
      
    }, [])

  return (
    <>
      <div className="w-52 h-64 bg-white drop-shadow-lg rounded-md overflow-hidden relative" ref={cardHover}>
        <div className="w-full h-full z-0" ref={normal}>
          <img src={pic} alt="" />
          <div className="w-full flex justify-center items-center">
            <h1 className="text-black text-3xl font-medium">{title}</h1>
          </div>
        </div>

        <div className="absolute w-full h-full top-0 bg-black z-10 opacity-75 pt-5 px-3 text-center hidden" ref={textWord} >
            <p className="text-white">{details}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
