const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
      return this.chain.length;
  },

  addLink(value) {
      if(typeof(value)=="undefined") value = "( )";
      else value = "( " + value + " )";
      this.chain.push(value);
      return this;
  },

  removeLink(position) {
      if(typeof(position)!="number") { this.chain.splice(0, this.chain.length); throw new Error(); }
      if(typeof(this.chain[position-1])=="undefined") { this.chain.splice(0, this.chain.length); throw new Error(); }
      else {
          this.chain.splice(position-1, 1);
      }
      return this;
  },

  reverseChain() {
      this.chain.reverse();
      return this;
  },

  finishChain() {
      let chainStr = this.chain.join('~~');
      this.chain.splice(0, this.chain.length);
      return chainStr;
  }
};

module.exports = chainMaker;
