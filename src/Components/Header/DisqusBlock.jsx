import React from "react";
import { Container } from "react-bootstrap";
import { DiscussionEmbed } from "disqus-react";

const DisqusBlock = () => {
  return (
    <Container>
      <br />
      <h3 className="page-section-heading text-uppercase text-secondary">
        Вопросы и комментарии
      </h3>
      <DiscussionEmbed
        shortname="SamagonCalc"
        config={{
          url: "http://localhost:3000",
          identifier: 0,
          title: "Комментарии:",
          language: "ru_ru",
        }}
      />
      <br />
    </Container>
  );
};

export default DisqusBlock;
