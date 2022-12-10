import { UserOutlined } from '@ant-design/icons';
import { Button, Card, Col, Form, Input, Row } from 'antd';
import React, { useState } from 'react';

const LoginPage = ({ handleLogin }) => {
  const [userValue, setUserValue] = useState();

  const handleCghangeUser = (evt) => {
    setUserValue(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin(userValue);
    setUserValue('');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxHeight: '75vh',
        height: '100%',
      }}
    >
      <Row className="d-flex justify-content-center">
        <Col className="d-flex align-items-center">
          <Card style={{ width: 300 }}>
            <h4 style={{ paddingBottom: 20, textAlign: 'center' }}>
              Вход в чат
            </h4>
            <Form
              name="normal_login"
              className="login-form d-flex flex-column"
              initialValues={{
                remember: true,
              }}
              onSubmitCapture={handleSubmit}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Username!',
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Введите никнейм"
                  onChange={handleCghangeUser}
                  value={userValue || ''}
                />
              </Form.Item>
              <Form.Item
                className="d-flex justify-content-center"
                style={{ margin: 'auto' }}
              >
                <Button type="primary" htmlType="submit" style={{ width: 140 }}>
                  Войти
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
