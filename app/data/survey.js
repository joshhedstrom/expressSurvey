const lionPersonality = [10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0];
const otterPersonality = [0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0];
const retrieverPersonality = [0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0];
const beaverPersonality = [0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 10];

const testPersonality = [4, 5, 8, 2, 9, 3, 5, 8, 3, 3, 3, 5, 8, 2, 9, 4, 5, 8, 2, 9, 4, 5, 3, 8, 3, 0, 9, 4, 5, 8, 2, 3, 4, 5, 8, 2, 9, 4, 5, 8]

let lionScore = 0;
let otterScore = 0;
let retrieverScore = 0;
let beaverScore = 0;



let me = [3, 9, 7, 7, 9, 10, 9, 8, 7, 10, 7, 8, 8, 6, 2, 6, 10, 3, 0, 6, 10, 9, 0, 2, 6, 6, 7, 6, 3, 6, 8, 3, 2, 7, 4, 3, 8, 3, 1, 10]

function testLoop() {

    // if (i < 0) {
    // 	i = i * -1;
    // }

    for (let i = 0; i < me.length; i++) {
        let placeholder = i % 4
        // console.log(i, ': ', placeholder, '|| ', me[i])

        switch (placeholder) {
            case 0:
                lionScore += me[i];
                console.log('new lion score: ', lionScore)
                break;
            case 1:
                otterScore += me[i];
                console.log('new otter score: ', otterScore)
                break;
            case 2:
                retrieverScore += me[i];
                console.log('new retriever score: ', retrieverScore)
                break;
            case 3:
                beaverScore += me[i];
                console.log('new beaver score: ', beaverScore)
                break;
        }
    }


    // for (let i = 0; i <= 40; i+4) {
    // 	console.log('1: ', i);
    // }
    // for (let i = 1; i <= 40; i + 4) {
    // 	console.log('2: ', i);
    // }
    // for (let i = 2; i <= 40; i + 4) {
    // 	console.log('3: ', i);
    // }
    // for (let i = 3; i <= 40; i + 4) {
    // 	console.log('45: ', i);
    // }
}

testLoop();