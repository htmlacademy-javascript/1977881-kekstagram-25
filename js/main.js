import {getRandomArrayElement, getRandomPositiveInteger} from './util.js';
import {DESCRIPTION, MESSAGES, NAMES} from './constans.js';

const IDOBJECT = 25;

const idComments = (() => {
  const result = [];
  for(let i = 0; i <= 100; i++){
    result[i] = i;
  }
  return result;

})();

const createUsersComments = (numberOfComments) => {
  const comments = [];
  for(let i = 0; i < numberOfComments; i++){
    comments[i] = {
      idComment: getRandomArrayElement(idComments, true),
      avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
      message: getRandomArrayElement(MESSAGES),
      name: getRandomArrayElement(NAMES)
    };
  }
  return comments;
};

const createFotos = (i)=>({
  id: i,
  url: `photos/${i}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomPositiveInteger(15, 200),
  сomment: createUsersComments(getRandomPositiveInteger(1, idComments.length < 5? idComments.lenght:5))
});

const similarWizards = Array.from({length: IDOBJECT}, (v,i)=>createFotos(i+1));
console.log(similarWizards);
