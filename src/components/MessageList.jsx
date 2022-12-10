import React, { useEffect, useRef, useState } from 'react';
import '../styles/MessageList.css';
import Message from './Message';

const MessageList = ({ onGetMessages, newMessage }) => {
  const [messageList, setMessageList] = useState([]);
  const lastMessage = useRef(null);

  const checkNewMessage = () => {
    setMessageList(onGetMessages);
  };

  const scrollToBottom = () => {
    lastMessage.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    setMessageList(onGetMessages);
    window.addEventListener('storage', checkNewMessage);
    scrollToBottom();
    console.log('скролл');

    return () => {
      window.removeEventListener('storage', checkNewMessage);
    };
  }, [newMessage]);

  return (
    <>
      <ul className="message-list" ref={lastMessage}>
        {messageList &&
          messageList.map((item) => {
            return (
              <Message key={item.id} text={item.text} author={item.name} />
            );
          })}
        <div />
      </ul>
    </>
  );
};

export default MessageList;
