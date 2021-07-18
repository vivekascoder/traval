const translate = require("@vitalets/google-translate-api");
const axios = require("axios");

async function getNativeLanguageCode(countryName) {
    const response = await axios.get(
        `https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`
    );
    let languages = response.data[0].languages;
    if (languages.length > 1)
        languages = languages.filter((lan) => lan.iso639_2 !== "eng");
    let language = languages[0].iso639_1;
    return language;
}

const translateGet = async (req, res) => {
    return [];
};

const translatePost = async (req, res) => {
    const { speech, targetLanguage } = req.body;

    try {
        const translationResult = await translate(speech, {
            to: targetLanguage,
        });
        console.log(translationResult);
        return res.status(200).json({
            ok: true,
            originalText: translationResult.text,
            pronunciationText: translationResult.pronunciation,
        });
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({
            ok: false,
            message: "some error occured! try some time later.",
        });
    }
};

const languagePost = async (req, res) => {
    const { country } = req.body;
    try {
        let language = await getNativeLanguageCode(country);
        return res.json({
            ok: true,
            language,
        });
    } catch (err) {
        return res.json({
            ok: false,
            msg: err.message,
        });
    }
};

const sentencesGet = async (req, res) => {
    const json = require("../../sentences.json");
    return res.json(json);
};

module.exports = {
    translatePost,
    translateGet,
    languagePost,
    sentencesGet,
};
