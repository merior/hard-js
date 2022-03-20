// let num = 266219
// num = String(num)
// let numLength = (num.length)
// let result = 1
// let strDegree
// let degree = 1
// let arr = num.split("")

// for (let i = 0; i < numLength; i++)
//   result *= Number(num[i])

// for (let t = 0; t < 3; t++)
//   degree *= result
  

// console.log(arr)
// console.log(result)
// console.log(degree)
// strDegree = String(degree)
// console.log(strDegree[0], strDegree[1])

// let lang = confirm('Язык русский или нет?');
// let namePerson = prompt('введите имя');

// console.log(lang)

// if (lang == true){
//   console.log('понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
// }
// else{
//   console.log('monday, tuesday, wednesday, thursday, friday, saturday, sunday');
// }

// switch (lang) {
//   case true:
//     console.log('понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
//     break;
//   case false:
//     console.log('monday, tuesday, wednesday, thursday, friday, saturday, sunday');
//     break;
//   default:
//     console.log('это как? язык надо выбрать');
// }

// lang == true ? console.log('понедельник, вторник, среда, четверг, пятница, суббота, воскресенье') : console.log('monday, tuesday, wednesday, thursday, friday, saturday, sunday');


// //задание с именамт


// console.log(namePerson)

// namePerson == 'артем' ? console.log('директор') : 
// namePerson == 'Артем' ? console.log('директор') : 
// namePerson == 'александр' ? console.log('преподаватель') : 
// namePerson == 'Александр' ? console.log('преподаватель') : 
//   console.log('студент');

let txt = prompt('напишите что нибудь');
let txtNumber = +prompt('напишите тут число это для проверки');

const txtFunction = function(a) {
    if (typeof a !== 'string') {
        return 'это не строка';
    } else if (typeof a === 'string' && a.length < 30) {
        a = txt.trim();
        console.log(a);
    } else if (typeof a === 'string' && a.length > 30 ) {
        a = txt.trim();
        a = txt.slice(0, 30) + '...';
        console.log(a);  
    };
};

txtFunction(txt);
txtFunction(txtNumber);