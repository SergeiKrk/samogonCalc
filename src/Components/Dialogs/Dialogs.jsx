import React from 'react'
import {Container} from 'react-bootstrap'
import {BrowserRouter as Router} from "react-router-dom"
import Card from 'react-bootstrap/Card'
import s from './Dialogs.module.css'
import Massage from './Massage'
import DialogItem from './DialogItem'
import {FaUsers} from "react-icons/fa"

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, UserName: 'Tolya'},
        {id: 2, UserName: 'Gosha'},
        {id: 3, UserName: 'Kolya'},
        {id: 4, UserName: 'Sasha'},
        {id: 5, UserName: 'Pasha'}
    ]

    let dialogsElements = dialogsData.map(dialog => <DialogItem id={dialog.id} UserName={dialog.UserName}/>)

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
                                            <FaUsers size="21px"/>
                                        </div>
                                        Собеседники
                                    </Card.Title>
                                    {dialogsElements}
                                </Card.Body>
                            </Card>
                        </div>
                        <div className={`col-md-8 ${s.dialogs}`}>
                            <Massage UserAva='https://samogoncalc.ru/img/Ava.jpg' UserName='Admin Tolya'
                                     Massage='Ba-Ra-Ga-Be-De!'/>
                            <Massage UserAva='https://samogoncalc.ru/img/Yura.jpg' UserName='Yura'
                                     Massage='Bambarbiya, Kergudu.'/>
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