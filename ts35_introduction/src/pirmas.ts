console.log("hello typescript");

console.log("hello again");

let planet = "Earth";

const automobilis: {
	gamintojas: string;
	modelis: string;
	greitis: number;
	benzinas: boolean;
} = {
	gamintojas: "Audi",
	modelis: "A3",
	greitis: 200,
	benzinas: true,
};

console.log(planet, automobilis);

function transformer(x: string, y: string): number {
	return +x + +y;
}
let sRollOut = transformer("optimus", "prime");
console.log(sRollOut);
