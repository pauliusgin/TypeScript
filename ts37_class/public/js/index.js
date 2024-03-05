"use strict";
class Player {
    constructor(name, age, isFamous, position) {
        (this.name = name),
            (this.age = age),
            (this.isFamous = isFamous),
            (this.position = position);
    }
    play() {
        console.log(`${this.name} is playing.`);
    }
}
const messi = new Player("messi", 34, true, "forward");
console.log(typeof messi);
messi.play();
//# sourceMappingURL=index.js.map