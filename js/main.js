const returnNumber = function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min>=max){
    console.log(-1); }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random


console.log(returnNumber (0, 10));

const leightString = function сheckStringLenght ( inputText, maxlenght){
if (inputText.length > maxlenght){
  console.log('Слишком длинный комментарий');
  return false;
}
return true;
};
console.log(leightString ('комментарииииииииииииииии',40));
console.log(leightString ('комментарииииииииииииииии',10));
