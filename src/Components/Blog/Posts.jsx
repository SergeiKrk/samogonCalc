import axios from "axios";
import React from "react";
import { Col, Row, Card } from "react-bootstrap";

let Posts = (props) => {
  let getPosts = () => {
    axios
      .get(`https://therumdiary.ru/wp-json/wp/v2/posts?per_page=2&page=1`)
      .then((response) => {
        props.setPosts(response.data);
      });
  };

  return (
    getPosts,
    (
      <Row xs={1} md={2} xl={3} className="g-4">
        {props.posts.map((p) => (
          <Col key={p.id} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src="https://static.insales-cdn.com/images/products/1/1609/213943881/lg100.jpg"
              />
              <Card.Body>
                <Card.Title>{p.title.rendered}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    )
  );
};

export default Posts;
