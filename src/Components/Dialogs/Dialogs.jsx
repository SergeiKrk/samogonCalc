import React from 'react'
import {Container, ListGroup, ListGroupItem} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import s from './Dialogs.module.css'
import Massage from './Massage'
import { FaCalculator } from "react-icons/fa"

const Dialogs = (props) => {
    return (
        <div>
            <Container>
                <div className={`row`}>
                    <div className={`col-md-3 text-left ${s.dialogs}`}>
                        <Card className={`${s.card}`}>
                            <Card.Body className={`${s.cardBody}`}>
                                <Card.Title><FaCalculator /> Собеседники</Card.Title>
                                <div className={`${s.dialogItems} ${s.active}`}>Yura</div>
                                <div className={s.dialogItems}>Gosha</div>
                                <div className={s.dialogItems}>Kolya</div>
                            </Card.Body>
                        </Card>
                        <h3>Собеседники</h3>
                        <div className={`${s.dialogItems} ${s.active}`}>Yura</div>
                        <div className={s.dialogItems}>Gosha</div>
                        <div className={s.dialogItems}>Kolya</div>
                    </div>
                    <div className="col-md-9">
                        <Massage UserAva='https://samogoncalc.ru/img/Ava.jpg' UserName='Admin Tolya'
                                 Massage='Hi everybody!'/>
                        <Massage UserAva='https://samogoncalc.ru/img/Yura.jpg' UserName='Yura'
                                 Massage='Ba-Ra-Ga-Be-De! Kergudu!'/>
                        <Massage UserAva='https://samogoncalc.ru/img/Gosha.jpg' UserName='Gosha'
                                 Massage='Where is Grandma?'/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Dialogs;