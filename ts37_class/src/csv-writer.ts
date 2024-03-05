import { appendFileSync } from "fs";

// type MokejimuStulpeliai = ("id" | "suma" | "gavejas" | "paskirtis")[];

class CSVWriter<T> {
	constructor(private stulpeliai: (keyof T)[]) {
		this.csv = this.stulpeliai.join(",") + "\n";
	}

	private csv: string;

	private formatuotiEilute(value: T): string {
		return this.stulpeliai.map((stulpelis) => value[stulpelis]).join(",");
	}

	pridetiEilute(values: T[]): void {
		let eilutes = values.map((value) => this.formatuotiEilute(value));
		this.csv += eilutes.join("\n");
		console.log(this.csv);
	}

	save(filename: string): void {
		appendFileSync(filename, this.csv);
		this.csv = "\n";
		console.log("File saved to:", filename);
	}
}

export { CSVWriter };
