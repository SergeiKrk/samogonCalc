import React, { Suspense } from "react";
import HelmetSeoTags from "./HelmetSeoTags";
const ShareButtonBlock = React.lazy(() => import("./ShareButtonBlock"));

const HeaderBlockHome = (props) => {
  return (
    <div>
      <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
          <img
            src={props.HeaderBlockHome.Img}
            width="240"
            height="240"
            className="masthead-avatar mb-5"
            alt={props.HeaderBlockHome.Title}
          />
          <br />
          <br />
          <h1 className="masthead-heading text-uppercase mb-0">
            {props.HeaderBlockHome.Title}
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
            {props.HeaderBlockHome.Description}
          </p>
        </div>
        <HelmetSeoTags
          titleSeo={props.HeaderBlockHome.titleSeo}
          descriptionSeo={props.HeaderBlockHome.descriptionSeo}
          urlSeo={props.HeaderBlockHome.urlSeo}
          Img={props.HeaderBlockHome.Img}
        />
      </header>
    </div>
  );
};

export default HeaderBlockHome;
