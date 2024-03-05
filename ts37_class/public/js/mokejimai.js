import { CSVWriter } from "./csv-writer.js";
const paymentWriter = new CSVWriter([
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
//# sourceMappingURL=mokejimai.js.map