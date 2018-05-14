const survey = require("../data/survey.js");
console.log(survey)

module.exports = (app) => {
let result

    app.get("/survey/submit", function(req, res) {
      console.log('req1: ', req.body)
      console.log('res1', res.body)
    });

    app.post("/survey/submit", (req, res) => {
      console.log(req.body)
      result = survey(req.body)
      console.log(result)
          // console.log('req: ', req.body)
      // console.log('res', res.body)
        // let result = survey.testLoop(surveyAnswers)
        res.json(result);
    });
};