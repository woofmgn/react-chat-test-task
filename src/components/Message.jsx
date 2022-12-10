import { Card, Col, Row } from 'antd';
import React from 'react';

const Message = ({ text, author, owner }) => {
  return (
    <>
      {author === owner ? (
        <Row>
          <Col span={8} offset={14}>
            <li
              style={{
                listStyleType: 'none',
                marginBottom: 12,
              }}
            >
              <Card
                headStyle={{ backgroundColor: '#5b84b3', textAlign: 'right' }}
                bodyStyle={{ backgroundColor: '#88aad1' }}
                size="small"
                title={author + ' ( я )'}
              >
                <p style={{ textAlign: 'right' }}>{text}</p>
              </Card>
            </li>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col span={8}>
            <li
              style={{
                listStyleType: 'none',
                marginBottom: 12,
              }}
            >
              <Card
                headStyle={{ backgroundColor: '#d9d9d9' }}
                bodyStyle={{ backgroundColor: '#f0f0f0' }}
                size="small"
                title={author}
              >
                <p>{text}</p>
              </Card>
            </li>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Message;
