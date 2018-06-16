module.exports = function testLoop(answerObject) {

    let answerArray = [];
    for (let i = 1; i < 41; i++) {
        answerArray.push(parseInt(answerObject[i]))
    }

    let lionScore = 0;
    let otterScore = 0;
    let retrieverScore = 0;
    let beaverScore = 0;

    let lionPercent;
    let otterPercent;
    let retrieverPercent;
    let beaverPercent;

    answerArray.forEach((elem, i) => {

        let placeholder = i % 4

        switch (placeholder) {
            case 0:
                lionScore += answerArray[i];
                break;
            case 1:
                otterScore += answerArray[i];
                break;
            case 2:
                retrieverScore += answerArray[i];
                break;
            case 3:
                beaverScore += answerArray[i];
                break;
        }
    })

    function analyzeResults() {
        let total = otterScore + beaverScore + lionScore + retrieverScore;

        otterPercent = otterScore / total;
        beaverPercent = beaverScore / total;
        lionPercent = lionScore / total;
        retrieverPercent = retrieverScore / total;
    }
    analyzeResults();

    let allResults = {
        otterPercent: otterPercent,
        beaverPercent: beaverPercent,
        lionPercent: lionPercent,
        retrieverPercent: retrieverPercent
    };
    console.log('allResults: ', allResults)

    return allResults;
}