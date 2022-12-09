import { Button, Card, Col, Input, Row } from 'antd';
import { useEffect } from 'react';
import '../styles/Chat.css';

const Chat = ({ owner }) => {
  useEffect(() => {
    // getSessionStorate();
    // if (owner && owner.length !== 0) {
    //   document.title = owner;
    // } else {
    //   return;
    // }
    // document.title = owner;
    // window.addEventListener('storage', (evt) => {
    //   getSessionStorate();
    //   document.title = owner;
    // });
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
          <Col span={11} offset={1}>
            <Card size="small" title="Small size card" style={{ width: 200 }}>
              <p>Привет</p>
            </Card>
          </Col>
        </Row>
      </div>
      <Row>
        <Col span={22} offset={1}>
          <Input.Group compact className="d-flex">
            <Input defaultValue="" />
            <Button type="primary">Submit</Button>
          </Input.Group>
        </Col>
      </Row>
    </>
  );
};

export default Chat;
