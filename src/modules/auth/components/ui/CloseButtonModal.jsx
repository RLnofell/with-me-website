import React from 'react';
import { IoMdClose } from "react-icons/io";

const CloseButtonModal = ({className, onClick}) => {
  return(
    <div className={`${className} flex size-16 rounded-xl bg-white/80 fixed bottom-8 right-9 items-center justify-center hover:bg-white`} onClick={onClick}>
      <span className="text-xl"><IoMdClose /></span>
    </div>
  )
}

export default React.memo(CloseButtonModal);