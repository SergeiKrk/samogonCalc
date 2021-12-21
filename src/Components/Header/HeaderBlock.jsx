import React, { Suspense } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import HelmetSeoTags from "./HelmetSeoTags";
const ShareButtonBlock = React.lazy(() => import("./ShareButtonBlock"));

const HeaderBlock = (props) => {
  return (
    <div>
      <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
          <img
            src={props.HeaderBlock.Img}
            className="masthead-avatar mb-5"
            alt={props.HeaderBlock.Title}
          />
          <h1 className="masthead-heading text-uppercase mb-0">
            {props.HeaderBlock.Title}
          </h1>
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <Suspense fallback={<div>Загрузка...</div>}>
                <ShareButtonBlock />
              </Suspense>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <p className="masthead-subheading font-weight-light mb-0">
            {props.HeaderBlock.Description}
          </p>
        </div>
        <HelmetSeoTags
          titleSeo={props.HeaderBlock.titleSeo}
          descriptionSeo={props.HeaderBlock.descriptionSeo}
          urlSeo={props.HeaderBlock.urlSeo}
          Img={props.HeaderBlock.Img}
        />
      </header>
      <div className="container mt-3">
        <Breadcrumb className="text-center">
          <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
          <Breadcrumb.Item href="/">Калькуляторы самогонщика</Breadcrumb.Item>
          <Breadcrumb.Item href={props.HeaderBlock.Href}>
            {props.HeaderBlock.Title}
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default HeaderBlock;
