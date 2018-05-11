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


// $(document).ready(()=> {
	// const questionArray = ['testing1', 'testing2', 'testing3'];
	// let divID = $('#questions');

	// questionArray.forEach((elem, i)=> {
	// 	console.log(elem, i)
		
	// 	$(divID).append().html(`
	// 		<div class="row hoverable">
	// 			<form class="center-align ">
	// 				<h4 class="center-align col s12">${elem}</h4>
	// 				<p class="col s1 m3 right-align">1</p>
	// 				<p class="range-field">
	// 					<input class="col s10 m6" type="range" id="question${i + 1}" min="0" max="10"/>
	// 				</p>
	// 				<p class="col s1 m3 left-align">10</p>
	// 			</form>
	// 		</div>`)
	// 	// console.log(item)
	// 	console.log(divID)

		

	// $(divID).append(item);

// });
	// });
