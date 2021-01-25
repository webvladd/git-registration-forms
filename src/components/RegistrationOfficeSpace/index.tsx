import React from 'react';
import { Form, Radio } from 'antd';

import s from './RegistrationOfficeSpace.module.less';

const RegistrationOfficeSpace = () => {
  return (
    <div className={s.officeSpace}>
      <Form.Item name="radio-group" label="Office Space">
        <Radio.Group>
          <Radio value="Owned">Owned</Radio>
          <Radio value="Rental">Rental</Radio>
        </Radio.Group>
      </Form.Item>
    </div>
  );
};

export default RegistrationOfficeSpace;
