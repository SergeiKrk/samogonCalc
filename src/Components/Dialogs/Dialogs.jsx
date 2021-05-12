import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
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