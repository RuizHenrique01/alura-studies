import {useEffect, useState} from 'react';
import { timeToSeconds } from '../../common/utils/time';
import ITask from "../../types/ITask";
import Button from "../Button";
import Clock from "./Clock";
import style from './Timer.module.scss';

interface Props {
    selectTask: ITask | undefined,
    endTask: () => void
}

export default function Timer({ selectTask, endTask } : Props) {
    const [time, setTime] = useState<number>();
    useEffect(() => {
        if(selectTask?.time){
            setTime(timeToSeconds(selectTask.time));
        }
    }, [selectTask]);

    function regressTime(count: number = 0){
        setTimeout(() => {
            if(count > 0){
                setTime(count - 1);
                return regressTime(count - 1);
            }
            endTask();
        }, 1000);
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock time={time}/>
            </div>
            <Button onClick={() => regressTime(time)}>
                Começar!
            </Button>
        </div>
    );
}