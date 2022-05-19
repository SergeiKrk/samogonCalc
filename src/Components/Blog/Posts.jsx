import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

let Posts = (props) => {
  return (
    <Row xs={1} md={2} xl={3} className="g-4">
      {props.posts.map((p) => (
        <Col key={p.id} className="mb-4">
          <Card>
            <Card.Img
              variant="top"
              src="/static/media/samogoncalc-bender.b9612f16.png"
            />
            <Card.Body>
              <Card.Title>{p.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Posts;
