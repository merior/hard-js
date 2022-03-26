'use strict'

// let arr = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресеньн'];
 
//         for (let i = 0; i < arr.length; i++) {
//             if (i > 4) {
//                 document.body.insertAdjacentHTML('beforeend', '<b>' + arr[i] + '</b>' + ' ');
//             } else {
//                 document.body.insertAdjacentHTML('beforeend', arr[i] + ' ');
//             }
//         }

let week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const now = new Date();

const days = function() {
for (let i = 0; i < week.length; i++) {
  if (i === +now.getDay()-1) { 
    document.write(week[i].bold() + '<br>');
  } else if(week.id > 4) {
    document.write(week[i].italics() + '<br>');
  }
  else {
    document.write(week[i] + '<br>');
  }
}
}

console.log(now)
console.log(week)
days()