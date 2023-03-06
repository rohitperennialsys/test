const prompt = require('prompt-sync')({ sigint: true });

function checkDistance(firstPlayerPosition, secondPlayerPosition) {
  return secondPlayerPosition - firstPlayerPosition;
}

function changeLocation(ladder, firstPlayerPosition, secondPlayerPosition) {
  return [ladder[firstPlayerPosition], ladder[secondPlayerPosition]] = [ladder[secondPlayerPosition], ladder[firstPlayerPosition]]
}

function match(array) {
  let check = Number(array[0]) > Number(array[2])
  let firstPalyer = check ? Number(array[0]) : Number(array[2]);
  let firstPlayerPosition = check ? Number(array[1]) : Number(array[3]);
  let secondPlayer = check ? Number(array[2]) : Number(array[0]);
  let secondPlayerPosition = check ? Number(array[3]) : Number(array[1]);
  let playerChange = 1;
  let distance = null;
  let ladder = [];
  let status = "play";
  let win = null;

  ladder.length = secondPlayerPosition;
  ladder[firstPlayerPosition] = 'F';
  ladder[secondPlayerPosition] = 'S';

  //while status ===  win
  while (status !== 'win') {
    //check distance between 
    distance = checkDistance(firstPlayerPosition, secondPlayerPosition - 1)
    if (playerChange) {
      if (distance === 1) {
        changeLocation(ladder, firstPlayerPosition, firstPlayerPosition + 1);
        firstPlayerPosition++;
      }
      else if (distance >= 2) {
        changeLocation(ladder, firstPlayerPosition, firstPlayerPosition + 1);
        firstPlayerPosition++;
        changeLocation(ladder, firstPlayerPosition, firstPlayerPosition + 1);
        firstPlayerPosition++;
      }
      else {
        status = 'win';
        win = 0;
      }
      playerChange = 0;
    } else {
      if (distance === 1) {
        changeLocation(ladder, secondPlayerPosition - 1, secondPlayerPosition);
        secondPlayerPosition--;
      }
      else if (distance >= 2) {
        changeLocation(ladder, secondPlayerPosition - 1, secondPlayerPosition);
        secondPlayerPosition--;
        changeLocation(ladder, secondPlayerPosition - 1, secondPlayerPosition);
        secondPlayerPosition--;
      }
      else {
        status = 'win';
        win = 1;
      }
      playerChange = 1
    }
  }


  return win
}

function main(array) {
  let list = []
  let output = [];
  array.forEach(item => {
    if (typeof item === 'string') list.push(item.split(' '))
    else list.push(item);
  })

  list.forEach(item => {
    output.push(match(item));
  })

  return output.join(" ");
}

let testCase = Number(prompt('Enter test case: '));
let arrayList = [];

while (testCase !== 0) {
  arrayList.push(prompt('Enter: '));
  testCase--;
}

console.log(main(arrayList));

module.exports = main;