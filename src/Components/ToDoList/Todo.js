import React, { useState } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'

const Todo = () => {
    const [todos, setTodos] = useState([
        {id: 1, title: 'Наполнить самогонный аппарат брагой и включить нагрев', completed: false},
        {id: 2, title: 'Дождаться первых капель и начать отбор голов уменьшив интенсивность нагрева до 1-2 капель в' +
                ' секунду (воспользоваться калькулятором отбора голов)', completed: false},
        {id: 3, title: 'Отобрать головы', completed: false},
        {id: 4, title: 'Отбирать тело до 40 градусов крепости в струе', completed: false},
        {id: 5, title: 'Отбирать хвосты до 20 градусов крепости в струе', completed: false}
    ])

    const addTask = () => {

    }

    const removeTask = () => {

    }

    const performTask = () => {

    }

    return (
        <>
            <p>Список дел при перегонке: {todos.length}</p>
            <div>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Добавить новое дело в список"
                        aria-label="Добавить новое дело в список"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary">Добавить</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        </>
    )
}

export default Todo;