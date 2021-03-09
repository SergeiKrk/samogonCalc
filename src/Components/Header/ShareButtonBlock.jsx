import React from 'react'
import s from './ShareButtonBlock.module.css'
import {VKShareButton, FacebookShareButton, TwitterShareButton} from "react-share";
import {VKIcon,VKShareCount,FacebookShareCount,FacebookIcon,TwitterIcon} from "react-share";
import {Container, Tooltip} from "react-bootstrap";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

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
                    delay={{show: 250, hide: 400}}
                    overlay={renderTooltip}
                >
                    <VKShareButton className={s.someNetwork}
                                   url="https://vk.com/share.php?url=https://samogoncalc.ru"
                                   title="SamogonCalc.ru - это калькулятор винокура и самогонщика: онлайн расчет всех важных параметров"
                                   image="https://samogoncalc.ru/img/kalkulyator-samogonshchika.png"
                                   noVkLinks="true"
                                   noParse="false"
                    >
                        <VKIcon size={36} round={true}/>
                    </VKShareButton>
                </OverlayTrigger>
                <OverlayTrigger
                    placement="top"
                    delay={{show: 250, hide: 400}}
                    overlay={renderTooltip}
                >
                    <FacebookShareButton className={s.someNetwork}
                                         url="https://www.facebook.com/sharer/sharer.php?u=https://samogoncalc.ru"
                                         quote="SamogonCalc.ru - это калькулятор винокура и самогонщика: онлайн расчет всех важных параметров"
                                         hashtag="#samogoncalc"
                    >
                        <FacebookIcon size={36} round={true}/>
                    </FacebookShareButton>
                </OverlayTrigger>
                <OverlayTrigger
                    placement="right"
                    delay={{show: 250, hide: 400}}
                    overlay={renderTooltip}
                >
                    <TwitterShareButton className={s.someNetwork}
                                        url="https://twitter.com/intent/tweet?url=https://samogoncalc.ru&text=Калькулятор винокура и самогонщика: онлайн расчет всех важных параметров"
                                        title="SamogonCalc.ru - это калькулятор винокура и самогонщика: онлайн расчет всех важных параметров"
                    >
                        <TwitterIcon size={36} round={true}/>
                    </TwitterShareButton>
                </OverlayTrigger>
            </Container>
        </>
    )
}

export default ShareButtonBlock;