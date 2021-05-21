import React from 'react'
import {Container} from 'react-bootstrap'
import {BrowserRouter as Router} from "react-router-dom"
import Card from 'react-bootstrap/Card'
import s from './Dialogs.module.css'
import Massage from './Massage/Massage'
import DialogItem from './DialogItem/DialogItem'
import {FaUsers} from "react-icons/fa"

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, userName: 'Tolya'},
        {id: 2, userName: 'Gosha'},
        {id: 3, userName: 'Kolya'},
        {id: 4, userName: 'Sasha'},
        {id: 5, userName: 'Pasha'}
    ]

    let massageData = [
        {id:1, userAva:'https://samogoncalc.ru/img/Ava.jpg', userName:'Admin Tolya', massage:'Ba-Ra-Ga-Be-De!'},
        {id:2, userAva:'https://samogoncalc.ru/img/Yura.jpg', userName:'Yura', massage:'Bambarbiya, Kergudu.'},
        {id:3, userAva:'https://samogoncalc.ru/img/Gosha.jpg', userName:'Gosha', massage:'Where is Grandma?'}
    ];

    let dialogsElements = dialogsData.map(d => <DialogItem id={d.id} dialogUserName={d.userName}/>);

    let massageElement = massageData.map(m => <Massage massageUserAva={m.userAva} massageUserName={m.userName} massage={m.massage}/>);

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
                            {massageElement}
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