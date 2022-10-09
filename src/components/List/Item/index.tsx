import ITask from '../../../types/ITask';
import style from './Item.module.scss';

interface Props extends ITask{
    selectedTask: (selectedTask: ITask) => void
}

export default function Item({id, task, time, selected, completed, selectedTask}: Props){
    return (
    <li className={`${style.item} ${selected ? style.itemSelecionado : '' }`} onClick={
        () => {
            selectedTask({
                id,
                task,
                time,
                selected,
                completed
            });
        }
    }>
        <h3>
            {task}
        </h3>
        <span>
            {time}
        </span>
    </li>);
}