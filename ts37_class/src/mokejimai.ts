import { CSVWriter } from "./csv-writer.js";

interface Mokejimas {
	id: number;
	suma: number;
	gavejas: string;
	paskirtis: string;
}

const paymentWriter = new CSVWriter<Mokejimas>([
	"id",
	"suma",
	"gavejas",
	"paskirtis",
]);

paymentWriter.pridetiEilute([
	{ id: 1, suma: 30, gavejas: "Bronius Broniauskas", paskirtis: "dovana" },
	{
		id: 2,
		suma: 160,
		gavejas: "Kostas Kostauskas",
		paskirtis: "programavimo konsultacija",
	},
]);

paymentWriter.save("../../data/mokejimai.csv");
