import React, { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Context } from '../../Context';
import Button from '../UI/Button';
import CustomDatepicker from './CustomDatepicker';

function TodoForm() {
    const [todo, setTodo] = useState({
        id: uuidv4(),
        text: '',
        date: new Date(),
        complete: false,
    });
    const { addTodo } = useContext(Context);

    useEffect(() => {
        setTodo({
            ...todo,
            text: '',
        });
    }, [addTodo]);

    function handleSubmit() {
        if (todo.text) {
            setTodo({
                ...todo,
                id: uuidv4(),
            });
            addTodo(todo);
        }
    }

    function handleDate(date) {
        return setTodo({
            ...todo,
            date,
        });
    }

    function handleChange(e) {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input
                type="text"
                placeholder="Wash dishes..."
                name="text"
                value={todo.text}
                onChange={handleChange}
                required
            />
            <CustomDatepicker date={todo.date} handler={handleDate} />
            <Button
                size="large"
                submit={true}
                bgColor="var(--action)"
                color="var(--primary)"
                hollow={false}
                handler={handleSubmit}>
                Add Todo
            </Button>
        </form>
    );
}

export default TodoForm;
