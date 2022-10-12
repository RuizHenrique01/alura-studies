import React, { useState } from "react";
import ITask from "../../types/ITask";
import Button from "../Button";
import style from './Form.module.scss';
import { v4 as uuidv4 } from 'uuid';

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

function Form({ setTasks } : Props) {

    const [task, setTask] = useState("");
    const [time, setTime] = useState("00:00");

    function saveTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setTasks(lastState => [...lastState, {
             task,
             time,
             id: uuidv4(),
             selected: false,
             completed: false
        }]);
        setTask("");
        setTime("00:00");
    }

    return (
        <form className={style.novaTarefa} onSubmit={saveTask}>
        <div className={style.inputContainer}>
            <label htmlFor={style.tarefa}>
                Adicione um estudo
            </label>
            <input
                type="text"
                id="tarefa"
                name="tarefa"
                placeholder="O que você quer estudar?"
                value={task}
                onChange={e => setTask(e.target.value)}
                required
            />
        </div>
        <div className={style.inputContainer}>
            <label htmlFor={style.ttempo}>
                Tempo
            </label>
            <input
                type="time"
                id="tempo"
                name="tempo"
                step="1"
                min="00:00:00"
                max="01:30:00"
                placeholder="O que você quer estudar?"
                value={time}
                onChange={e =>  setTime(e.target.value)}
                required
            />
        </div>
        <Button type="submit">
            Adicionar
        </Button>
    </form>
    );
}

export default Form;