import React, { useEffect, useRef, useState } from 'react';
import '../styles/MessageList.css';
import Message from './Message';

const MessageList = ({ onGetMessages, newMessage, owner }) => {
  const [messageList, setMessageList] = useState([]);
  const lastMessage = useRef(null);

  const scrollToBottom = () => {
    lastMessage.current.scrollIntoView({ behavior: 'smooth' });
  };

  const checkNewMessage = () => {
    setMessageList(onGetMessages);
    scrollToBottom();
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
      <ul className="message-list">
        {messageList &&
          messageList.map((item) => {
            return (
              <Message
                key={item.id}
                text={item.text}
                author={item.name}
                owner={owner}
              />
            );
          })}
        <div ref={lastMessage} />
      </ul>
    </>
  );
};

export default MessageList;
