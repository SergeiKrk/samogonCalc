import React from 'react'
import ShareButtonBlock from "./ShareButtonBlock";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const HeaderBlock = (props) => {
    return (
        <div>
            <header className="masthead bg-primary text-white text-center">
                <div className="container d-flex align-items-center flex-column">
                    <img
                        src={props.Img}
                        className="masthead-avatar mb-5"
                        alt={props.Title}
                    />
                    <h1 className="masthead-heading text-uppercase mb-0">{props.Title}</h1>
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><ShareButtonBlock /></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <p className="masthead-subheading font-weight-light mb-0">{props.Description}</p>

                </div>
            </header>
            <div className="container">
                <Breadcrumb className="text-center">
                    <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item href="/">Калькуляторы самогонщика</Breadcrumb.Item>
                    <Breadcrumb.Item href={props.Href}>
                        {props.Title}
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
        </div>
    )
}

export default HeaderBlock;