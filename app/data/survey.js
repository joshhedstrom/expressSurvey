// const lionPersonality = [10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0];
// const otterPersonality = [0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0];
// const retrieverPersonality = [0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0];
// const beaverPersonality = [0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10];

module.exports = function testLoop(object) {

    let array = [];
    for (let i = 1; i < 41; i++) {
        array.push(parseInt(object[i]))
    }

    let lionScore = 0;
    let otterScore = 0;
    let retrieverScore = 0;
    let beaverScore = 0;

    let lionPercent;
    let otterPercent;
    let retrieverPercent;
    let beaverPercent;

    for (let i = 0; i < array.length; i++) {
        let placeholder = i % 4

        switch (placeholder) {
            case 0:
                lionScore += array[i];
                break;
            case 1:
                otterScore += array[i];
                break;
            case 2:
                retrieverScore += array[i];
                break;
            case 3:
                beaverScore += array[i];
                break;
        }
    }

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