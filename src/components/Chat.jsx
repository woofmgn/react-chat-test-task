import { Button, Col, Form, Input, Row } from 'antd';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Message from '../components/Message';
import '../styles/Chat.css';

const Chat = ({ owner, handleMessage }) => {
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

    handleMessage(message);
  };

  useEffect(() => {
    const prevTitle = document.title;
    document.title = owner;

    // window.addEventListener("storage", () => {
    //   // When storage changes refetch
    //   refetch();
    // });
    return () => {
      document.title = prevTitle;
      // window.removeEventListener("storage");
    };
  }, [owner]);

  return (
    <>
      <div className="wrapper">
        <Row>
          <Col span={11} offset={1}>
            <ul>
              <Message />
            </ul>
          </Col>
        </Row>
      </div>
      <Row>
        <Col span={22} offset={1}>
          <Form onSubmitCapture={handleSubmit}>
            <Input.Group compact className="d-flex" on>
              <Input value={'' || inputChange} onChange={handleChangeInput} />
              <Button type="primary" htmlType="submit">
                Отправить
              </Button>
            </Input.Group>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Chat;
