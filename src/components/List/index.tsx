import Item from "./Item";
import style from './List.module.scss';
import ITask from "../../types/ITask";

interface Props {
    tasks: ITask[],
    selectedTask: (selectedTask: ITask) => void
}

function List({ tasks, selectedTask }: Props) {

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((t) => (
                    <Item key={t.id} {...t} selectedTask={selectedTask} />
                ))}
            </ul>
        </aside>
    );
}

export default List;