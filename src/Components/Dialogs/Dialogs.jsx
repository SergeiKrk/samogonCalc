import React from 'react'
import {Container} from 'react-bootstrap'
import {BrowserRouter as Router, Switch, NavLink} from "react-router-dom"
import Card from 'react-bootstrap/Card'
import s from './Dialogs.module.css'
import Massage from './Massage'
import DialogItem from './DialogItem'
import {FaCalculator} from "react-icons/fa"

const Dialogs = (props) => {
    return (
        <Router>
            <div>
                <Container>
                    <div className={`row`}>
                        <div className={`col-md-4 text-left ${s.dialogs}`}>
                            <Card className={`${s.card}`}>
                                <Card.Body className='toast-body'>
                                    <Card.Title>
                                        <div className={`${s.icon}`}>
                                            <FaCalculator size="21px"/>
                                        </div>
                                        Собеседники
                                    </Card.Title>
                                    <DialogItem id="1" UserName="Tolya"/>
                                    <DialogItem id="2" UserName="Gosha"/>
                                    <DialogItem id="3" UserName="Kolya"/>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className={`col-md-8 ${s.dialogs}`}>
                            <Massage UserAva='https://samogoncalc.ru/img/Ava.jpg' UserName='Admin Tolya' Massage='Hi everybody!'/>
                            <Massage UserAva='https://samogoncalc.ru/img/Yura.jpg' UserName='Yura' Massage='Ba-Ra-Ga-Be-De! Kergudu!'/>
                            <Massage UserAva='https://samogoncalc.ru/img/Gosha.jpg' UserName='Gosha' Massage='Where is Grandma?'/>
                        </div>

                        {/*<Switch>
                        <Route exact path="dialogs/1" component={Yura}/>
                        <Route path="dialogs/2" component={Gosha}/>
                        <Route path="dialogs/3" component={Kolya}/>
                    </Switch>*/}
                    </div>
                </Container>
            </div>
        </Router>
    )
}

export default Dialogs;