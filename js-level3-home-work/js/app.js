// 1. Напишите функцию,
// которая принимает строку в качестве параметра и находит самое длинное слово в строке.
const findLongestWord = function(str) {
    let arrStr = str.split(' ');
    let wordLength = 0;
    let longestWord;
  
    for (let i = 0; i < arrStr.length; i += 1) {
      wordLength = arrStr[1].length;
  
      if (arrStr[i].length > wordLength) {
        longestWord = arrStr[i];
  
        return longestWord;
      }
  
    }
  };

// 2. написать функцию которая принимает число и возвращает перевернутое число

// function reverseNumber(number)
function reverse(num, r = 0){
    if(!num) return r;
    r =  r * 10  + num % 10;
    return reverse(Math.floor( num / 10), r);
}
console.log(reverse(12345));

// 3.написать функцию которая будет принимать стринг значение 
// и возвращать новое стринг значение только с уникальными символами

    function unique(str)  {
        
      };

// 4.написать функцию которая принимает 3 аргумента,
// победы, ничьи и поражения и возвращает количество очков команды 
// ( победа 3 очка, ничья 1 очко, поражение 0 ) 

function calcPoints(win, draw, loss){
    return win*3 + draw*1 + loss*0;
}
console.log(calcPoints(3, 1, 0))

// 5.написать функцию которая принимает массив и возвращает объект с такими свойствами :
// максимальное значение, 
// минимальное значение, 
// количество элементов,
// среднее арифметическое.

 function statisctics(arr){

 }


// 6.Написать функцию которая принимает массив работников компании 

 const workers = [
  { name: "Jimm", salary: 40000, department: "IT" },
  { name: "Bob", salary: 60300, department: "HR" },
  { name: "Stacy", salary: 15000, department: "IT" },
  { name: "Tom", salary: 55200, department: "DEVOPS" },
  { name: "Kate", salary: 25000, department: "IT" },
  { name: "John", salary: 40000, department: "HR" },
  { name: "Billy", salary: 60000, department: "DEVOPS" },
 ];

// Функция должна вернуть объект 
// {department: ‘Some department’, avarage: ‘some avarage value’}. 
// В этом объекте будет department с самой большой стредней зарплатой из всех departments. 



