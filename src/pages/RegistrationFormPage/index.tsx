import React from 'react';
import RegistrationForm from '../../components/RegistrationForm';

import s from './RegistrationFormPage.module.less';

const RegistrationFormPage: React.FC = (props) => {
  return (
    <div className={s.registrationFormPage}>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationFormPage;
