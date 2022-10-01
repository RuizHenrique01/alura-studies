import ITask from '../../../types/ITask';
import style from '../List.module.scss';

export default function Item({id, task, time, selected, completed}: ITask){
    console.log("ITEM SELECTED => ", {id, task, time, selected, completed})
    return (<li className={style.item}>
        <h3>
            {task}
        </h3>
        <span>
            {time}
        </span>
    </li>);
}