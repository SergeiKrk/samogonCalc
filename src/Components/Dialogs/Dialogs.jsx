import React from 'react'
import {Container} from 'react-bootstrap'
import {BrowserRouter as Router, Switch, NavLink} from "react-router-dom"
import Card from 'react-bootstrap/Card'
import s from './Dialogs.module.css'
import Massage from './Massage'
import {FaCalculator} from "react-icons/fa"

const Dialogs = (props) => {
    return (
        <Router>
            <div>
                <Container>
                    <div className={`row`}>
                        <div className={`col-md-4 text-left ${s.dialogs}`}>
                            <Card className={`${s.card}`}>
                                <Card.Body className={`${s.cardBody}`}>
                                    <Card.Title>
                                        <div className={`${s.icon}`}>
                                            <FaCalculator size="21px"/>
                                        </div>
                                        Собеседники
                                    </Card.Title>
                                    <div className={s.dialogItemsBlock}>
                                        <NavLink to="/dialogs/1" className={`${s.dialogItems} ${s.active}`}>Yura</NavLink>
                                    </div>
                                    <div className={s.dialogItemsBlock}>
                                        <NavLink to="/dialogs/2" className={s.dialogItems}>Gosha</NavLink>
                                    </div>
                                    <div className={s.dialogItemsBlock}>
                                        <NavLink to="/dialogs/3" className={s.dialogItems}>Kolya</NavLink>
                                    </div>

                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-8">
                            <Massage UserAva='https://samogoncalc.ru/img/Ava.jpg' UserName='Admin Tolya'
                                     Massage='Hi everybody!'/>
                            <Massage UserAva='https://samogoncalc.ru/img/Yura.jpg' UserName='Yura'
                                     Massage='Ba-Ra-Ga-Be-De! Kergudu!'/>
                            <Massage UserAva='https://samogoncalc.ru/img/Gosha.jpg' UserName='Gosha'
                                     Massage='Where is Grandma?'/>
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