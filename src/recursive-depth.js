const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    let currMaxBranchDepth = 0; 
    for(let item of arr) {
      if(!Array.isArray(item)) continue;
      let branchDepth = this.calculateDepth(item);
      if(branchDepth > currMaxBranchDepth) currMaxBranchDepth = branchDepth;
    }
    return currMaxBranchDepth+1;
  }
};