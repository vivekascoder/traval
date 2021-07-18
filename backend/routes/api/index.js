const router = require("express").Router();
const {
    translatePost,
    translateGet,
    languagePost,
    sentencesGet,
} = require("../../controllers/api");

router.get("/ping", (req, res) => {
    res.json({
        ok: true,
        msg: "API pong",
    });
});

router.get("/sentences", sentencesGet);
router.post("/language", languagePost);
router.get("/translate", translateGet);
router.post("/translate", translatePost);

module.exports = router;
