import React from 'react'

const PostComponent = ({ id, image, title, time, description }) => {
  return (
    <div className="w-[385px] mx-6 my-2 flex flex-col items-center">
      <img className="w-full h-[280px] object-cover" src={image} alt="" />
      
        <h1 className="text-[24px] font-bold cursor-pointer">{title}</h1>
      </Link>
      <p className="text-[13px] text-gray-400">{time.split("T")[0]}</p>
      <p className="leading-6 font-normal">{description.substring(0,110)},...</p>
    </div>
  );
};

export default PostComponent