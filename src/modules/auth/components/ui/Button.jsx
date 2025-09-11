import React from 'react';

const Button = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`cursor-pointer w-full bg-black text-white py-2 px-4 rounded-lg transition-all ${className} hover:bg-black/80`}
  >
    {children}
  </button>
);

export default React.memo(Button);
