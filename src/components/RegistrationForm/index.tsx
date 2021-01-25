import React from 'react';
import { Form, Input, Button, Cascader, DatePicker } from 'antd';
import 'antd/dist/antd.css';
import { ArrowRightOutlined, CaretDownOutlined } from '@ant-design/icons';
import s from './RegistrationForm.module.less';
import RegistrationSteps from '../RegistrationSteps';
import RegistrationOfficeSpace from '../RegistrationOfficeSpace';
import RegistrationUploadLogo from '../RegistrationUploadLogo';

const RegistrationForm = () => {
  return (
    <>
      <Form layout="vertical" size="large" className={s.form}>
        <h1 className={s.form__heading}>Agent Registration</h1>
        <RegistrationSteps />
        <h2 className={s.form__subtitle}>Profile Information</h2>
        <div className={s.form__inputsBlock}>
          <div className={s.form__inputsColumn}>
            <Form.Item
              label="Agency Name"
              name="Agency Name"
              rules={[{ required: true, message: 'Please input your Agency Name!' }]}>
              <Input />
            </Form.Item>
            <Form.Item
              label="Address"
              name="Address"
              rules={[{ required: true, message: 'Please input your Address!' }]}>
              <Input />
            </Form.Item>
            <Form.Item
              label="Toll-Free Number"
              name="Toll-Free Number"
              rules={[{ required: true, message: 'Please input your Toll-Free Number!' }]}>
              <Input />
            </Form.Item>
            <Form.Item
              label="Company Name"
              name="Company Name"
              rules={[{ required: true, message: 'Please input your Company Name!' }]}>
              <DatePicker />
            </Form.Item>
          </div>

          <div className={s.form__inputsColumn}>
            <Form.Item
              label="Agency Type"
              name="Agency Type"
              rules={[{ required: true, message: 'Please input your Agency Type!' }]}>
              <Cascader
                suffixIcon={<CaretDownOutlined />}
                options={[
                  {
                    value: 'Agent',
                    label: 'Agent',
                  },
                ]}
              />
            </Form.Item>
            <div className={s.form__cityState}>
              <Form.Item label="City" name="City" rules={[{ required: true, message: 'Please input your City!' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="State" name="State" rules={[{ required: true, message: 'Please input your State!' }]}>
                <Input />
              </Form.Item>
            </div>

            <Form.Item
              label="Email ID"
              name="Email ID"
              rules={[{ required: true, message: 'Please input your Email ID!' }]}>
              <Input />
            </Form.Item>
            <RegistrationOfficeSpace />
          </div>

          <div className={s.form__inputsColumn}>
            <Form.Item
              label="Password"
              name="Password"
              rules={[{ required: true, message: 'Please input your Password!' }]}>
              <Cascader
                suffixIcon={<CaretDownOutlined />}
                options={[
                  {
                    value: 'zhejiang',
                    label: 'Zhejiang',
                    children: [
                      {
                        value: 'hangzhou',
                        label: 'Hangzhou',
                      },
                    ],
                  },
                ]}
              />
            </Form.Item>
            <Form.Item
              label="Telephone Number"
              name="Telephone Number"
              rules={[{ required: true, message: 'Please input your Telephone Number!' }]}>
              <Input />
            </Form.Item>
            <Form.Item
              label="Website"
              name="Website"
              rules={[{ required: true, message: 'Please input your Website!' }]}>
              <Input />
            </Form.Item>

            <RegistrationUploadLogo />
          </div>
        </div>
        <div className={s.form__requiredFields}>
          <p>
            In order to process your registration, we ask you to provider the following information. Please note that
            all fields marked with an asterisk (*) are required.
          </p>
        </div>

        <div className={s.form__btnBlock}>
          <Form.Item className={s.form__btnBlock_cancel}>
            <Button>CANCEL</Button>
          </Form.Item>
          <Form.Item className={s.form__btnBlock_continue}>
            <Button>
              CONTINUE
              <ArrowRightOutlined />
              {/* <ArrowRightOutlined /> */}
            </Button>
          </Form.Item>
        </div>
      </Form>
    </>
  );
};

export default RegistrationForm;
