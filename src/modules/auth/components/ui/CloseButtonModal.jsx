import React from 'react';
import { IoMdClose } from 'react-icons/io';

const CloseButtonModal = ({ className, onClick }) => {
  return (
    <div
      className={`${className} flex size-16 rounded-xl items-center justify-center`}
      onClick={onClick}
    >
      <span className="text-xl">
        <IoMdClose />
      </span>
    </div>
  );
};

export default React.memo(CloseButtonModal);
