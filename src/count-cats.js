const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let catCount = 0;
  for(let backyardChild of backyard) {
      for(let сhild of backyardChild) {
          if(сhild=='^^') catCount++;
      }
  }
  return catCount;
};
