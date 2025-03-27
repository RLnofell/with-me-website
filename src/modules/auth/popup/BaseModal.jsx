import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../core/store/auth/modalSlice.jsx';
import ModalStyle from '../components/ui/ModalStyle.jsx';
import CloseButtonModal from '../components/ui/CloseButtonModal.jsx';

const BaseModal = ({ children, title, ask, method, onMethodClick, className}) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);
  const modalRef = useRef(null);

  const handleClickOutside = useCallback((event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      dispatch(closeModal());
    }
  }, [dispatch]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      if (isOpen) {
        document.removeEventListener("mousedown", handleClickOutside);
      }
    };
  }, [isOpen, handleClickOutside]);

  const handleCloseModal = () => {
    dispatch(closeModal());
  }

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 bg-black/70 flex justify-center items-center overflow-y-auto scroll-smooth ${className}`}>
      <ModalStyle ref={modalRef} ask={ask} method={method} onMethodClick={onMethodClick}>
        <span className="flex text-xl font-medium mb-9">{title}</span>
        {children}
        <CloseButtonModal onClick={handleCloseModal}/>
      </ModalStyle>
    </div>
  );
};

export default React.memo(BaseModal);