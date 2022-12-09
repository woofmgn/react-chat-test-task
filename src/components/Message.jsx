import { Card } from 'antd';
import React from 'react';

const Message = () => {
  return (
    <li style={{ listStyleType: 'none' }}>
      <Card
        headStyle={{ backgroundColor: '#d9d9d9' }}
        bodyStyle={{ backgroundColor: '#f0f0f0' }}
        size="small"
        title="Small size card"
        style={{ width: 200 }}
      >
        <p>Привет</p>
      </Card>
    </li>
  );
};

export default Message;
