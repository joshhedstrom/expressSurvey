const survey = require("../data/survey.js");

module.exports = app => {
    let result;

    app.post("/survey/submit", (req, res) => {
        result = survey(req.body)
        res.json(result);
    });
};