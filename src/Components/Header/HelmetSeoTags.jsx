import React from "react";
import { Helmet } from "react-helmet";

const HelmetSeoTags = (props) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{props.titleSeo}</title>
      <meta name="description" content={props.descriptionSeo} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={props.titleSeo} />
      <meta property="og:description" content={props.descriptionSeo} />
      <meta property="og:url" content={props.urlSeo} />
      <meta
        property="og:image"
        // content={props.Img}
        content={`https://samogoncalc.ru${props.Img}`}
      />
      <meta property="og:site_name" content="SamogonCalc" />
      <meta property="og:locale" content="ru_RU" />
    </Helmet>
  );
};

export default HelmetSeoTags;
