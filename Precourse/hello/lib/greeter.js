class Greeter {
  constructor(who) {
    this.who = who;
  }

  greet() {
    return `Hello, ${this.who}`;
  }
}

module.exports.Greeter = Greeter;

