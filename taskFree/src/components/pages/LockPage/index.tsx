import React from "react";
import { IComparisonResult } from "../../../models/IComparisonResult";
import style from './LockPage.module.scss';

type LockPropsTypes = {
  randomNum: number;
  enteredNumbers:string;
  comparisonResult: IComparisonResult;
  flagShow: boolean;
  handlerEnteredNumbers: (value:string) => void;
  message: string
}

const Lock = (props:LockPropsTypes) => {
  const { randomNum, enteredNumbers, comparisonResult, handlerEnteredNumbers, flagShow, message } = props;

  return (
    <div className={style.container}>
      <h1 className={style.title}>Компьютер загадывает число из нескольких различающихся цифр (от 3 до 6). Игроку дается несколько попыток на то, чтобы угадать это число.</h1>
      <div className={style.display}>
        <h1 className={style.enteredNumbers}>{flagShow ? randomNum : '*****'}</h1>
      </div>
      <div className={style.inputPanel}>
        <input className={style.input} type="text" maxLength={5} onChange={(event) => handlerEnteredNumbers(event.target.value)} value={enteredNumbers} />
      </div>
      <div className={style.result}>
        <p className={style.resultText}>Найдено совпавших цифр на своих местах: {comparisonResult.onPlace.count}({comparisonResult.onPlace.num})</p>
        <p className={style.resultText}>Найдено совпавших цифр не на своих местах: {comparisonResult.outPlace.count}({comparisonResult.outPlace.num})</p>
      </div>
      <p className={style.message}>{message}</p>
    </div>
  )
}

export default Lock;
