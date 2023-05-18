class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }
  static getDragons(...dragons) {
    let arr = [];
    dragons.forEach((el) => arr.push(el.name));
    return arr;
  }
}

module.exports = Dragon;
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
