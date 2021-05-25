import React from 'react'
import {Container} from 'react-bootstrap'
import {BrowserRouter as Router} from "react-router-dom"
import Card from 'react-bootstrap/Card'
import {FaUsers} from "react-icons/fa"
import s from './Dialogs.module.css'
import Massage from './Massage/Massage'
import DialogItem from './DialogItem/DialogItem'
import NewMassage from "./NewMassage/NewMassage";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map(d => <DialogItem id={d.id} dialogUserName={d.userName}/>);

    let massageElement = props.massageData.map(m => <Massage massageUserAva={m.userAva} massageUserName={m.userName} massage={m.massage}/>);

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
                            <NewMassage />
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