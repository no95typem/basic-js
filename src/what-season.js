const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(typeof(date)=="undefined") return 'Unable to determine the time of year!';
  if(Object.getPrototypeOf(date)!=Object.getPrototypeOf(new Date)) throw new Error();
  let dateFromMillisec = new Date(date.getMilliseconds);
  if(dateFromMillisec.getMonth!=date.getMonth) throw new Error();
  if(dateFromMillisec.getDay!=date.getDay) throw new Error();
  if(dateFromMillisec.getHours!=date.getHours) throw new Error();
  if(dateFromMillisec.getSeconds!=date.getSeconds) throw new Error();
  try {
      switch(date.getMonth()) {
           case 0:
           case 1:
           case 11:
               return 'winter';
           case 2:
           case 3:
           case 4:
               return 'spring';
           case 5:
           case 6:
           case 7:
               return 'summer';
           case 8:
           case 9:
           case 10:
               return 'autumn';
           default: throw Error();
      }
  } catch(err) {
      throw new Error();
  }
};

