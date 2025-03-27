import React from 'react';
import InputField from '../components/ui/InputField.jsx';
import Button from '../components/ui/Button.jsx';
import SocialButton from '../components/ui/SocialButton.jsx';
import BaseModal from './BaseModal.jsx';

const LoginModal = ({authMethodChange}) => {
  return (
    <BaseModal
      title="Login with your e-mail"
      ask="Not a member yet?"
      method="Register now"
      onMethodClick={authMethodChange}
    >
      <InputField label="EMAIL (*)" placeholder="E-mail" />
      <InputField label="PASSWORD (*)" placeholder="Password" type="password" />
      <span className="text-sm font-normal text-left mt-4">
        Forgot your password?{' '}
        <span className="font-medium cursor-pointer hover:underline">
          Click here
        </span>
      </span>
      <Button className="py-6 mt-9">
        <span className="text-lg">Log in now</span>
      </Button>
      <span className="flex text-sm mt-9 mb-5">Or login with</span>
      <div className="flex justify-between items-center space-x-4">
        <SocialButton label="Facebook" icon="/src/assets/react.svg" />
        <SocialButton label="Github" icon="/src/assets/react.svg" />
        <SocialButton label="Google" icon="/src/assets/react.svg" />
      </div>
    </BaseModal>
  );
};

export default React.memo(LoginModal);