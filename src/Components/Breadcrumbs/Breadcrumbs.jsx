import "bootstrap/dist/css/bootstrap.min.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import React from "react";

const Breadcrumbs = (props) => {
  return (
    <div className="container">
      <Breadcrumb className="text-center">
        <Breadcrumb.Item href="/">Калькуляторы самогонщика</Breadcrumb.Item>
        <Breadcrumb.Item href={props.Breadcrumbs.Href}>
          {props.Breadcrumbs.Title}
        </Breadcrumb.Item>
      </Breadcrumb>
      <div id="yandex_rtb_R-A-1654628-5"></div>
    </div>
  );
};

export default Breadcrumbs;
