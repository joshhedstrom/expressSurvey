const lionPersonality = [10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0];
const otterPersonality = [0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0];
const retrieverPersonality = [0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0];
const beaverPersonality = [0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10];

// const testPersonality = [4, 5, 8, 2, 9, 3, 5, 8, 3, 3, 3, 5, 8, 2, 9, 4, 5, 8, 2, 9, 4, 5, 3, 8, 3, 0, 9, 4, 5, 8, 2, 3, 4, 5, 8, 2, 9, 4, 5, 8]
// let me = [3, 9, 7, 7, 9, 10, 9, 8, 7, 10, 7, 8, 8, 6, 2, 6, 10, 3, 0, 6, 10, 9, 0, 2, 6, 6, 7, 6, 3, 6, 8, 3, 2, 7, 4, 3, 8, 3, 1, 10]

module.exports = function testLoop(array) {
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

        console.log('otter: ', otterPercent);
        console.log('beaver: ', beaverPercent);
        console.log('lion: ', lionPercent);
        console.log('retriever: ', retrieverPercent);

    }
    analyzeResults();
}