import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArticleCard from "./ArticleCard";

const CardBlog = (props) => {
  return (
    <Container>
      <Row xs={1} md={2} xl={3} className="g-4">
        <ArticleCard />
      </Row>
    </Container>
  );
};

export default CardBlog;
