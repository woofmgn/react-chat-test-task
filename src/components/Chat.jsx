import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';

import '../styles/Chat.css';
import MessageList from './MessageList';
import SendingBox from './SendingBox';

const Chat = ({ owner, onAddMessage, onGetMessages }) => {
  const [newMessage, setNewMessage] = useState('');

  const changeLastMessage = (data) => {
    setNewMessage(data);
  };

  useEffect(() => {
    const prevTitle = document.title;
    document.title = owner;

    return () => {
      document.title = prevTitle;
    };
  }, [owner]);

  return (
    <>
      <div className="wrapper">
        <Row>
          <Col span={22} offset={1}>
            <MessageList
              onGetMessages={onGetMessages}
              newMessage={newMessage}
              owner={owner}
            />
          </Col>
        </Row>
      </div>
      <Row>
        <Col span={22} offset={1}>
          <SendingBox
            owner={owner}
            onAddMessage={onAddMessage}
            onChangeLastMessage={changeLastMessage}
          />
        </Col>
      </Row>
    </>
  );
};

export default Chat;
