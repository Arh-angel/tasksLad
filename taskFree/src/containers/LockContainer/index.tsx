import React, { useEffect, useState } from "react";
import Lock from "../../components/pages/LockPage";
import { IComparisonResult } from "../../models/IComparisonResult";

const LockContainer = () => {
  const [comparisonResult, setComparisonResult] = useState<IComparisonResult>({
    onPlace: {
      count: 0,
      num: ''
    },
    outPlace: {
      count: 0,
      num: ''
    }
  });
  const [enteredNumbers, setEnteredNumbers] = useState<string>('');
  const [progress, setProgress] = useState(false);
  const [randomNum, setRandomNum] = useState(0);
  const [flagShow, setFlagShow] = useState(false);
  const [countMoves, setCountMoves] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setComparisonResult({
      onPlace: {
        count: 0,
        num: ''
      },
      outPlace: {
        count: 0,
        num: ''
      }
    });
    setProgress(true);
  }, [])

  useEffect(() => {
    if(comparisonResult.onPlace.count === 5) {
      setFlagShow(true);
      setMessage('Число отгаданно! Отгадаем следущее!!!');
      setProgress(true);
    }
  }, [comparisonResult])

  useEffect(() => {
    if(progress) {
      let currentNum:string = '';
      for(let i = 0; i <= 4; i++) {
        const num = Math.floor(Math.random() * (6 - 3)) + 3;
        currentNum += num; 
      }
      setRandomNum(+currentNum);
      setProgress(false);
    }
  }, [progress])

  useEffect(() => {
    if(enteredNumbers.length === 5) {
      const randomNumArr = (randomNum + '').split('');
      let onPlace = {
        count: 0,
        num: ''
      };
      let outPlace = {
        count: 0,
        num: ''
      };

      enteredNumbers.split('').forEach((el, index) => {
        randomNumArr.forEach((item, ind) => {
          if(el === item && index === ind) {
            if(onPlace.num.split('').indexOf(el) === -1) {
              onPlace.count += 1;
              onPlace.num += ` ${el}`;
            }
          }
          
          if(el === item && index !== ind) {
            if(outPlace.num.split('').indexOf(el) === -1) {
              outPlace.count += 1;
              outPlace.num += ` ${el}`;
            }
          }
        })
      })

      setComparisonResult({onPlace: onPlace, outPlace: outPlace})
      setCountMoves(prev => prev + 1);
    } else {
      setMessage('');
      setComparisonResult({
        onPlace: {
          count: 0,
          num: ''
        },
        outPlace: {
          count: 0,
          num: ''
        }
      })
    }

    if (+enteredNumbers.slice(-1) > 6 || (+enteredNumbers.slice(-1) < 3 && enteredNumbers.length !== 0)) {
      setMessage('Цифры должны быть от 3 до 6 включительно!');
    } else {
      setMessage('');
    }
  }, [enteredNumbers])

  useEffect(() => {
    if(countMoves === 10) {
      setMessage('Ходы для предыдущего числа закончились, число поменялось!');
      setProgress(true);
      setCountMoves(0);
    }
  }, [countMoves])

  const handlerEnteredNumbers = (value:string) => {
    setEnteredNumbers(value);
  }

  return (
    <Lock randomNum={randomNum} enteredNumbers={enteredNumbers} comparisonResult={comparisonResult} handlerEnteredNumbers={handlerEnteredNumbers} flagShow={flagShow} message={message} />
  )
}

export default LockContainer;
