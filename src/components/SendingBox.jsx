import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const SendingBox = ({ onAddMessage, owner, onChangeLastMessage }) => {
  const [inputChange, setInputChange] = useState('');

  const handleChangeInput = (evt) => {
    setInputChange(() => evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const uId = uuidv4();
    const message = {
      name: owner,
      id: uId,
      text: inputChange,
    };

    onAddMessage(message);
    onChangeLastMessage(message);

    window.dispatchEvent(new Event('storage'));
  };

  return (
    <Form onSubmitCapture={handleSubmit}>
      <Input.Group compact className="d-flex" on>
        <Input value={'' || inputChange} onChange={handleChangeInput} />
        <Button type="primary" htmlType="submit">
          Отправить
        </Button>
      </Input.Group>
    </Form>
  );
};

export default SendingBox;
