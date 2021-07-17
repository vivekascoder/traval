const translate = require("@vitalets/google-translate-api");

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

module.exports = {
    translatePost,
    translateGet,
};
