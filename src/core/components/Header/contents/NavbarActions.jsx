import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../../store/auth/modalSlice.jsx';
import LoginModal from '../../../../modules/auth/popup/LoginModal.jsx';
import RegisterModal from '../../../../modules/auth/popup/RegisterModal.jsx';

const NavbarActions = () => {

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

  return(
    <div className="font-inter-tight flex items-center gap-3 max-h-[42px]">
      <div className="pr-6 gap-3 flex items-center">
        <button onClick={handleOpenLoginModal} className="text-sm text-primary hover:text-primary/80">Log in</button>
        {isOpen && modalType === 'register' && <RegisterModal authMethodChange={() => authMethodChange('login')} />}

        <button onClick={handleOpenRegisterModal} className="text-sm text-primary hover:text-primary/80">Sign Up</button>
        {isOpen && modalType === 'login' && <LoginModal authMethodChange={() => authMethodChange('register')} />}
      </div>

      <button className="bg-black text-white px-4 h-[42px] max-h-[42px] text-sm hover:bg-black/80 rounded-lg">Be Pro</button>
      <button className="border border-black px-4 h-[42px] max-h-[42px] hover:bg-black/80 hover:text-white text-sm rounded-lg">Submit Website</button>
    </div>
  )
}

export default React.memo(NavbarActions);