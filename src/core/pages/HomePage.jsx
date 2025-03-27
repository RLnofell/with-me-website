import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { openModal } from '../store/auth/modalSlice.jsx';
import LoginModal from '../../modules/auth/popup/LoginModal.jsx';
import RegisterModal from '../../modules/auth/popup/RegisterModal.jsx';

const HomePage = () => {
  const dispatch = useDispatch();
  const { isOpen, modalType } = useSelector((state) => state.modal);

  const handleOpenLoginModal = () => {
    dispatch(openModal('login'));
  };

  const handleOpenRegisterModal = () => {
    dispatch(openModal('register'));
  };

  const authMethodChange = (type) => {
    dispatch(openModal(type));
  };

  return (
    <div>
      <h1 className="">Trang chủ</h1>
      <button onClick={handleOpenLoginModal}>Mở Modal Đăng Nhập</button>
      <button onClick={handleOpenRegisterModal}>Mở Modal Đăng Ký</button>

      {isOpen && modalType === 'login' && <LoginModal authMethodChange={() => authMethodChange('register')} />}
      {isOpen && modalType === 'register' && <RegisterModal authMethodChange={() => authMethodChange('login')} />}
    </div>
  );
};

export default React.memo(HomePage);