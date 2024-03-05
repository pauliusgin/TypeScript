import { appendFileSync } from "fs";
class CSVWriter {
    constructor(stulpeliai) {
        this.stulpeliai = stulpeliai;
        this.csv = this.stulpeliai.join(",") + "\n";
    }
    formatuotiEilute(value) {
        return this.stulpeliai.map((stulpelis) => value[stulpelis]).join(",");
    }
    pridetiEilute(values) {
        let eilutes = values.map((value) => this.formatuotiEilute(value));
        this.csv += eilutes.join("\n");
        console.log(this.csv);
    }
    save(filename) {
        appendFileSync(filename, this.csv);
        this.csv = "\n";
        console.log("File saved to:", filename);
    }
}
export { CSVWriter };
//# sourceMappingURL=csv-writer.js.map