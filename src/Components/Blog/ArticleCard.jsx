import React from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const ArticleCard = (props) => {
  return (
    <Col className="mb-4">
      <Card>
        <Card.Img
          variant="top"
          src="/static/media/samogoncalc-bender.b9612f16.png"
        />
        <Card.Body>
          <Card.Title>
            Название статьи про то какие могут быть название статей в этом месте
          </Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ArticleCard;
