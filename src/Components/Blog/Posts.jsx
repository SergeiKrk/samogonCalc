import React from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import { AiFillHeart, AiFillLike } from "react-icons/ai";

let Posts = (props) => {
  return (
    <Row xs={1} md={2} xl={3} className="g-4">
      {props.posts.map((p) => (
        <Col key={p.id} className="mb-4">
          <Card>
            <Card.Img variant="top" src={p.photoUrl} />
            <Card.Body>
              <Card.Title>{p.title}</Card.Title>
              {p.like ? (
                <Button
                  onClick={() => {
                    props.dislike(p.id);
                  }}
                  variant="outline-danger"
                  className="d-inline-flex align-items-center"
                >
                  <AiFillHeart />
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    props.likeup(p.id);
                  }}
                  variant="outline-success"
                  className="d-inline-flex align-items-center"
                >
                  <AiFillLike />
                </Button>
              )}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Posts;
