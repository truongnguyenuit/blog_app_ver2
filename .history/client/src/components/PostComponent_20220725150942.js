import { Button, Modal } from 'antd';
import React, { useState } from 'react';


const PostComponent = ({ title, description, img, user, time }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="w-[430px] mx-6 my-2 flex flex-col bg-white drop-shadow-md rounded-[8px] overflow-hidden">
      <div className='flex mt-[12px] ml- '>
        <div className="bg-white rounded-[100px]">
          <img
            className="w-[50px] h-[50px] object-cover rounded-[100px]"
            src={user.img}
            alt=""
          />
        </div>
        <div className='flex flex-col justify-center ml-[10px] gap-1'>
          <p className='font-bold m-[0px]'>{user.realname}</p>
          <p className=''>{time}</p>
        </div>
        <div className='w-[173px] flex justify-end gap-2'>
          
            <i class="fa-solid fa-pen-to-square text-xl text-red-600" ></i>
            <i class="fa-solid fa-xmark text-2xl text-red-600 cursor-pointer" onClick={showModal}></i>
          
        </div>
      </div>
      <div className='mx-[12px]'>
        <h1 className="text-[17px] font-bold cursor-pointer">{title}</h1>
        <p className="leading-6 font-normal">{description.substring(0, 110)},...</p>
      </div>
      <img className="w-full h-[280px] object-cover" src={img} alt="" />
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default PostComponent