const axios = require("axios").default;
const fs = require("fs");
(async function () {
    const countries = (await axios.get("https://restcountries.eu/rest/v2/all"))
        .data;
    const countryNames = [];
    countries.forEach((c) => {
        countryNames.push(c.name);
    });
    fs.writeFileSync("./countries.json", countryNames.join("\n"));
})();
