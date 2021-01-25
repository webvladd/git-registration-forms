import React from 'react';
import { Steps } from 'antd';
import 'antd/dist/antd.css';
import s from './RegistrationSteps.module.less';

const { Step } = Steps;
const RegistrationSteps = () => {
  return (
    <div className={s.steps}>
      <Steps type="navigation" current={1} className="site-navigation-steps">
        <Step status="finish" title="Personal Details" />
        <Step status="finish" title="Agency Details" />
        <Step status="wait" title="contact Person Details" />
        <Step status="wait" title="Work Order Scope" />
      </Steps>
    </div>
  );
};

export default RegistrationSteps;
