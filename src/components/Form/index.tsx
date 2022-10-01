import React from "react";
import ITask from "../../types/ITask";
import Button from "../Button";
import style from './Form.module.scss';
import { v4 as uuidv4 } from 'uuid';

class Form extends React.Component<{
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}> {

    state = {
        task: '',
        time: '00:00'
    };

    saveTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.props.setTasks(lastState => [...lastState, {
             ...this.state,
             id: uuidv4(),
             selected: false,
             completed: false
        }]);
        this.setState({
            task: '',
            time: '00:00'
        });
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.saveTask.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor={style.tarefa}>
                        Adicione um estudo
                    </label>
                    <input
                        type="text"
                        id="tarefa"
                        name="tarefa"
                        placeholder="O que você quer estudar?"
                        value={this.state.task}
                        onChange={e => this.setState({ ...this.state, task: e.target.value })}
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
                        value={this.state.time}
                        onChange={e => this.setState({ ...this.state, time: e.target.value })}
                        required
                    />
                </div>
                <Button type="submit">
                    Adicionar
                </Button>
            </form>
        );
    }
}

export default Form;