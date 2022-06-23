import axios from "axios";
import React from "react";
import { Col, Row, Card, Pagination } from "react-bootstrap";

let Posts = (props) => {
  let getPosts = () => {
    if (props.pageNumber && props.posts.length === 0) {
      axios
        .get(
          `https://therumdiary.ru/wp-json/wp/v2/posts?per_page=${props.perPage}&page=${props.pageNumber}`
        )
        .then((response) => {
          props.setPosts(response.data);
        });
    }
  };

  let onPageChanged = (number) => {
    props.setPageNumber(number);
    axios
      .get(
        `https://therumdiary.ru/wp-json/wp/v2/posts?per_page=${props.perPage}&page=${number}`
      )
      .then((response) => {
        props.setPosts(response.data);
      });
  };

  let active = props.pageNumber;
  let items = [];
  let itemsPush = (number) => {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => {
          onPageChanged(number);
        }}
      >
        {number}
      </Pagination.Item>
    );
  };

  if (props.pageNumber === 1) {
    for (
      let number = props.pageNumber;
      number <= props.pageNumber + 4;
      number++
    ) {
      itemsPush(number);
    }
  } else if (props.pageNumber === props.totalPageCount) {
    for (
      let number = props.pageNumber - 4;
      number <= props.pageNumber;
      number++
    ) {
      itemsPush(number);
    }
  } else if (props.pageNumber === props.totalPageCount - 1) {
    for (
      let number = props.pageNumber - 3;
      number <= props.pageNumber + 1;
      number++
    ) {
      itemsPush(number);
    }
  } else if (props.pageNumber === props.totalPageCount - 2) {
    for (
      let number = props.pageNumber - 2;
      number <= props.pageNumber + 2;
      number++
    ) {
      itemsPush(number);
    }
  } else {
    for (
      let number = props.pageNumber - 1;
      number <= props.pageNumber + 3;
      number++
    ) {
      itemsPush(number);
    }
  }

  return (
    getPosts(),
    (
      <>
        <Row xs={1} md={2} xl={3} className="g-4">
          {props.posts.map((p) => (
            <Col key={p.id} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://static.insales-cdn.com/images/products/1/1609/213943881/lg100.jpg"
                />
                <Card.Body>
                  <Card.Title>
                    <div
                      dangerouslySetInnerHTML={{ __html: p.title.rendered }}
                    ></div>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Pagination size="sm">{items}</Pagination>
      </>
    )
  );
};

export default Posts;
