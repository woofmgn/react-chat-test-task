import React, { useCallback, useEffect, useRef, useState } from 'react';
import '../styles/MessageList.css';
import Message from './Message';

const MessageList = ({ onGetMessages, newMessage, owner }) => {
  const [messageList, setMessageList] = useState([]);
  const lastMessage = useRef();

  const scrollToBottom = () => {
    lastMessage.current.scrollIntoView({ behavior: 'smooth' });
  };

  const checkNewMessage = useCallback(() => {
    setMessageList(() => onGetMessages());
    scrollToBottom();
  }, [onGetMessages]);

  useEffect(() => {
    checkNewMessage();

    window.addEventListener('storage', checkNewMessage);

    return () => {
      window.removeEventListener('storage', checkNewMessage);
    };
  }, [checkNewMessage, newMessage, onGetMessages]);

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
