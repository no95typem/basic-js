const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) throw Error();
  let outputArr = [];
  for(let i=0; i<arr.length; i++) {      
      switch(arr[i]) {
          case '--discard-next':
              i++;
              if(arr[i+1]=='--double-prev') i++;
              if(arr[i+1]=='--discard-prev') i++;
              break;
          case '--discard-prev':
              if(outputArr.length>0) outputArr.splice(outputArr.length-1);
              break;
          case '--double-next':
            //   if(arr[i+2]=='--discard-prev') break;
              if(i+1 > arr.length-1) break;
              outputArr.push(arr[i+1]);
              outputArr.push(arr[i+1]);
              i++;
              break;
          case '--double-prev':
              if(outputArr.length>0) outputArr.push(outputArr[outputArr.length-1]);
              break;
          default:
              outputArr.push(arr[i]);
              break;
      }
  }
  return outputArr;
};
