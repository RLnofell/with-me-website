import React from 'react';
import BaseModal from './BaseModal.jsx';
import InputField from '../components/ui/InputField.jsx';
import Button from '../components/ui/Button.jsx';
import Checkbox from '../components/ui/Checkbox.jsx';
import SocialButton from '../components/ui/SocialButton.jsx';

const RegisterModal = ({authMethodChange}) => {
  return (
    <BaseModal
      title="Register with your e-mail"
      ask="Are you a member?"
      method="Log in now"
      onMethodClick={authMethodChange}
      className="pt-96 py-9"
    >
      <InputField label="USERNAME (*)" placeholder="Username" />
      <InputField label="EMAIL (*)" placeholder="E-mail"/>
      <div className="flex justify-between space-x-3">
        <InputField label="PASSWORD (*)" placeholder="Password" />
        <InputField label="REPEAT PASSWORD (*)" placeholder="Repeat Password" />
      </div>
      <span className="text-sm font-normal text-left">
        HL With You may keep me informed with personalized emails about products and services. See our{' '}
        <span className="font-medium">Privacy Policy</span> for more details.
      </span>
      <div className="flex flex-col space-y-6 mt-5">
        <Checkbox label="Please contact me via e-mail" />
        <Checkbox label="I have read and accept the Terms and Conditions" />
      </div>
      <span className="font-light text-xs text-black/70 mt-9">
        This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
      </span>
      <Button className="py-6 mt-9">
        <span className="text-lg">Create Account</span>
      </Button>
      <span className="flex text-sm mt-9 mb-5">Or register with</span>
      <div className="flex justify-between items-center space-x-4">
        <SocialButton label="Facebook" icon="/src/assets/react.svg" />
        <SocialButton label="Github" icon="/src/assets/react.svg" />
        <SocialButton label="Google" icon="/src/assets/react.svg" />
      </div>
    </BaseModal>
  );
};

export default React.memo(RegisterModal);