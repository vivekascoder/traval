const router = require("express").Router();
const { translatePost, translateGet } = require("../../controllers/api");

router.get("/ping", (req, res) => {
    res.json({
        ok: true,
        msg: "API pong",
    });
});

router.get("/translate", translateGet);
router.post("/translate", translatePost);

module.exports = router;
