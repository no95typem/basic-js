const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  let dreamTeamName = [];
  for(let member of members) {
      if(typeof(member)=="string") {
          member = member.toUpperCase();
          let currentWord = member.match(/[A-Z]/);
          if(currentWord!=null) dreamTeamName.push(currentWord);
      }
  }
  dreamTeamName.sort();
  return dreamTeamName.length!=0 && dreamTeamName.toString().replace(/,/g, '');
};
