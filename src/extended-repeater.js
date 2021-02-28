const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let outputStr = "";
  let repeatTimes = options['repeatTimes'];
  if(isNaN(repeatTimes)) repeatTimes = 1;
  let additionRepeatTimes = options['additionRepeatTimes'];
  if(isNaN(additionRepeatTimes) && options.hasOwnProperty('addition')) additionRepeatTimes = 1;
  for(let i=0; i<repeatTimes; i++) {
    outputStr+=String(str);
    for(let j=0; j<additionRepeatTimes; j++) {
      outputStr+=options['addition'];
      if(j==additionRepeatTimes-1) break;
      if(typeof(options['additionSeparator'])!='undefined') outputStr+=options['additionSeparator'];
      else outputStr+='|';
    }
    if(i==repeatTimes-1) break;
    if(typeof(options['separator'])!='undefined') outputStr+=options['separator'];
    else outputStr+='+';
  }
  return outputStr;
};