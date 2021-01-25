import React from 'react';
import { Form, Upload, Button } from 'antd';
import s from './RegistrationUploadLogo.module.less';

const RegistrationUploadLogo = () => {
  return (
    <div className={s.uploadLogo}>
      <Form.Item label="Company Logo">
        <Upload>
          <Button>Choose File</Button>
        </Upload>
        <p>No file choosen.</p>
      </Form.Item>
    </div>
  );
};

export default RegistrationUploadLogo;
