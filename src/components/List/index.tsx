import Item from "./Item";
import style from './List.module.scss';
import ITask from "../../types/ITask";

function List({ tasks }: { tasks: ITask[] }) {

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((t, i) => (
                    <Item key={i} {...t} />
                ))}
            </ul>
        </aside>
    );
}

export default List;