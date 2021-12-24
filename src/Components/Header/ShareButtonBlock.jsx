import React from "react";
import s from "./ShareButtonBlock.module.css";
import {
  TelegramShareButton,
  ViberShareButton,
  WhatsappShareButton,
  VKShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from "react-share";
import {
  VKIcon,
  WhatsappIcon,
  ViberIcon,
  TelegramIcon,
  FacebookIcon,
  TwitterIcon,
} from "react-share";
import { Container, Tooltip } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    👁️👁️ Обычно, хорошие люди рассказывают обо мне друзьям в соцсетях 👍
  </Tooltip>
);
const ShareButtonBlock = (props) => {
  return (
    <>
      <Container>
        <OverlayTrigger
          placement="left"
          delay={{ show: 250, hide: 450 }}
          overlay={renderTooltip}
        >
          <VKShareButton
            className={s.someNetwork}
            url={`${props.urlSeo}`}
            title={props.titleSeo}
            image={`https://samogoncalc.ru${props.Img}`}
            noVkLinks="true"
            noParse="false"
          >
            <VKIcon size={36} round={true} />
          </VKShareButton>
        </OverlayTrigger>
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <TelegramShareButton
            className={s.someNetwork}
            url={`${props.urlSeo}`}
            title={props.titleSeo}
          >
            <TelegramIcon size={36} round={true} />
          </TelegramShareButton>
        </OverlayTrigger>
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <WhatsappShareButton
            className={s.someNetwork}
            url={`${props.urlSeo}`}
            title={props.titleSeo}
            separator="🥃🚰"
          >
            <WhatsappIcon size={36} round={true} />
          </WhatsappShareButton>
        </OverlayTrigger>
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <ViberShareButton
            className={s.someNetwork}
            url={`${props.urlSeo}`}
            title={props.titleSeo}
            separator="🥃🚰"
          >
            <ViberIcon size={36} round={true} />
          </ViberShareButton>
        </OverlayTrigger>
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <FacebookShareButton
            className={s.someNetwork}
            url={`${props.urlSeo}`}
            quote={props.titleSeo}
            hashtag="#samogoncalc"
          >
            <FacebookIcon size={36} round={true} />
          </FacebookShareButton>
        </OverlayTrigger>
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <TwitterShareButton
            className={s.someNetwork}
            url={`${props.urlSeo}`}
            title={props.titleSeo}
          >
            <TwitterIcon size={36} round={true} />
          </TwitterShareButton>
        </OverlayTrigger>
      </Container>
    </>
  );
};

export default ShareButtonBlock;
