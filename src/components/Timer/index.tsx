import {useState} from 'react';
import { timeToSeconds } from '../../common/utils/time';
import ITask from "../../types/ITask";
import Button from "../Button";
import Clock from "./Clock";
import style from './Timer.module.scss';

interface Props {
    selectTask: ITask | undefined
}

export default function Timer({ selectTask } : Props) {
    const [time, setTime] = useState<number>();
    if(selectTask?.time){
        setTime(timeToSeconds(selectTask.time));
    }
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock />
            </div>
            <Button>
                Começar!
            </Button>
        </div>
    );
}