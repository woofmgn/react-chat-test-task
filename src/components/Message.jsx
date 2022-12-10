import { Card } from 'antd';
import React from 'react';

const Message = ({ text, author }) => {
  return (
    <li style={{ listStyleType: 'none' }}>
      <Card
        headStyle={{ backgroundColor: '#d9d9d9' }}
        bodyStyle={{ backgroundColor: '#f0f0f0' }}
        size="small"
        title={author}
        style={{ width: 200 }}
      >
        <p>{text}</p>
      </Card>
    </li>
  );
};

export default Message;
