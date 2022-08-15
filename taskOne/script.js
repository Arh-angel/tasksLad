// В данном тексте изменить наименование дней недели на английский вариант. Например, строка "Старший братец ПОНЕДЕЛЬНИК ..." будет преобразована в "Старший братец MONDAY..."

let str = `Старший братец ПОНЕДЕЛЬНИК –
работяга, не бездельник.
Он неделю открывает
всех трудиться зазывает.

ВТОРНИК следует за братом
у него идей богато.

А потом СРЕДА-сестрица,
не пристало ей лениться.

Брат ЧЕТВЕРГ и так, и сяк,
он мечтательный чудак.

ПЯТНИЦА-сестра сумела
побыстрей закончить дело.

Предпоследний брат СУББОТА
не выходит на работу.

В гости ходит ВОСКРЕСЕНЬЕ,
очень любит угощенье
`;

const arrWords = str.split(/([:punct:]|\s|\-|\,)/);

const result = arrWords.map((element) => {
  switch (element) {
    case 'ПОНЕДЕЛЬНИК':
      return element = 'MONDAY';
    case 'ВТОРНИК':
      return element = 'TUESDAY';
    case 'СРЕДА':
      return element = 'WEDNESDAY';
    case 'ЧЕТВЕРГ':
      return element = 'THURSSDAY';
    case 'ПЯТНИЦА':
      return element = 'FRIDAY';
    case 'СУББОТА':
      return element = 'SATURDAY';
    case 'ВОСКРЕСЕНЬЕ':
      return element = 'SUNDAY';
    default:
      return element
  }
}).join('');

console.log(result);
