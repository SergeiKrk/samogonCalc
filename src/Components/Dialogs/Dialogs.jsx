import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Massage from './Massage'

const Dialogs = (props) => {
    return  (
        <div>
            <Container>
                <Massage UserAva='https://samogoncalc.ru/img/Ava.jpg' UserName='Admin Tolya' Massage='Dcdjfsvn dfvodivj dfvnodv dfvodivj dfvnodv dfvodivj dfvnodv' />
                <Massage UserAva='https://samogoncalc.ru/img/Kolya.jpg' UserName='Kolya' Massage='Ba-Ra-Ga-Be-De! Kergudu!' />
            </Container>
        </div>
    )
}

export default Dialogs;