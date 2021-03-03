import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import msgIcon from '../../assets/img/msg-icon-36.png'
import Massage from './Massage'

const Dialogs = (props) => {
    return  (
        <div>
            <Container>
                <Massage />
                <Massage />
                <Massage />
            </Container>
        </div>
    )
}

export default Dialogs;