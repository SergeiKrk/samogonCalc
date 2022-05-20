import axios from "axios";
import React from "react";
import { Col, Row, Card } from "react-bootstrap";

let Posts = (props) => {
  axios.get("https://therumdiary.ru/wp-json/wp/v2/posts").then((response) => {
    props.setPosts(response.data);
  });

  // props.setPosts([
  //   {
  //     id: 1,
  //     title:
  //       "Название статьи про то какие могут быть название статей в этом месте #1",
  //     photoUrl:
  //       "https://static.insales-cdn.com/images/products/1/1609/213943881/lg100.jpg",
  //     like: false,
  //   },
  //   {
  //     id: 2,
  //     title:
  //       "Название статьи про то какие могут быть название статей в этом месте #2",
  //     photoUrl:
  //       "https://static.insales-cdn.com/images/products/1/1609/213943881/lg100.jpg",
  //     like: false,
  //   },
  //   {
  //     id: 3,
  //     title:
  //       "Название статьи про то какие могут быть название статей в этом месте #3",
  //     photoUrl:
  //       "https://static.insales-cdn.com/images/products/1/1609/213943881/lg100.jpg",
  //     like: true,
  //   },
  //   {
  //     id: 4,
  //     title:
  //       "Название статьи про то какие могут быть название статей в этом месте #4",
  //     photoUrl:
  //       "https://static.insales-cdn.com/images/products/1/1609/213943881/lg100.jpg",
  //     like: false,
  //   },
  //   {
  //     id: 5,
  //     title:
  //       "Название статьи про то какие могут быть название статей в этом месте #5",
  //     photoUrl:
  //       "https://static.insales-cdn.com/images/products/1/1609/213943881/lg100.jpg",
  //     like: true,
  //   },
  //   {
  //     id: 6,
  //     title:
  //       "12 Название статьи про то какие могут быть название статей в этом месте #6",
  //     photoUrl:
  //       "https://static.insales-cdn.com/images/products/1/1609/213943881/lg100.jpg",
  //     like: false,
  //   },
  // ]);

  return (
    <Row xs={1} md={2} xl={3} className="g-4">
      {props.posts.map((p) => (
        <Col key={p.id} className="mb-4">
          <Card>
            <Card.Img variant="top" src={p.photoUrl} />
            <Card.Body>
              <Card.Title>{p.title.rendered}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Posts;
