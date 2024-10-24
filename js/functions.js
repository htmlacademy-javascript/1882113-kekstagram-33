const isLengthString = (string, length) => string.length <= length;
//==
const validationPolydrome = (string) => {
  let result = '';
  string = string.toLowerCase().replaceAll (' ', '');
  for(let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return (result === string);
};
// ==
const getStringToNmber = (string) => {
  let result = '';
  if(typeof string === 'number') {
    string = string.toString();
  }
  string = string.toLowerCase().replaceAll (' ', '');
  for(let i = 0; i < string.length; i++) {
    if(Number.isNaN(parseInt(string[i], 10))){
      continue;
    }
    result += parseInt(string[i], 10);
  }
  return parseInt(result, 10);

};


isLengthString ('Hello', 10);
validationPolydrome('топот');
getStringToNmber('агент 007');
