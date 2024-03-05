type Position = "forward" | "defender" | "midfielder" | "goalkeeper";

class Player {
	constructor(
		name: string,
		age: number,
		isFamous: boolean,
		position: Position
	) {
		(this.name = name),
			(this.age = age),
			(this.isFamous = isFamous),
			(this.position = position);
	}
	name: string;
	age: number;
	isFamous: boolean;
	position: Position;

	play() {
		console.log(`${this.name} is playing.`);
	}
}

const messi = new Player("messi", 34, true, "forward");
console.log(typeof messi);
messi.play();
