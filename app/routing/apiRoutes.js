const survey = require("../data/survey.js");

module.exports = (app) => {
    let result

    app.get("/survey/submit", function(req, res) {
        console.log('req1: ', req.body)
        console.log('res1', res.body)
    });

    app.post("/survey/submit", (req, res) => {
        result = survey(req.body)
        res.json(result);
    });
};