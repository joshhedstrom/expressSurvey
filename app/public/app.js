let surveyAnswers = [];

$('#submit').click(function(e) {
	e.preventDefault()

	for (let i = 1; i < 41; i++) {
		// console.log(i)
		let id = '#question' + i;
		let questionScore = $(id).val();
		surveyAnswers.push(questionScore);

	}
	console.log(surveyAnswers)

});
