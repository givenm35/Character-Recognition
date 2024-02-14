const inputPatternElem = document.getElementById("input-pattern");
const outputPatternElem = document.getElementById("output-pattern");
const errorAllowedElem = document.getElementById('error-allowed')

let inputPattern;
let outputPattern;

let network = [];

init();

function getEmptyPattern() {
    return Array(7)
        .fill(null)
        .map(() => Array(5).fill(0));
}

function drawPattern(elem, pattern, editable = false) {
    elem.innerHTML = "";

    pattern.forEach((rowArr, i) => {
        const tr = document.createElement("tr");

        rowArr.forEach((colVal, j) => {
            const td = document.createElement("td");

            if (editable) {
                td.onclick = () => {
                    const currVal = pattern[i][j];

                    if (currVal === 0) {
                        pattern[i][j] = 1;
                        td.classList.add("marked");
                    } else {
                        pattern[i][j] = 0;
                        td.classList.remove("marked");
                    }
                };
            }

            if (colVal === 1) {
                td.classList.add("marked");
            }

            tr.appendChild(td);
        });

        elem.appendChild(tr);
    });
}

function init() {
    inputPattern = getEmptyPattern();
    outputPattern = getEmptyPattern();

    drawPattern(inputPatternElem, inputPattern, true);
    drawPattern(outputPatternElem, outputPattern);
}

function clearGrid() {
    init();
}

function resetNetwork() {
    init();
    network = [];
}

function trainInput() {
    network.push(Array.from(inputPattern));
    inputPattern = getEmptyPattern();
    drawPattern(inputPatternElem, inputPattern, true);
}

function recognizeInput() {
    if (isEmpty(inputPattern)) {
        return alert("Input pattern is empty");
    }

    if (network.length === 0) return alert("No training data");

    const errorAllowed = parseInt(errorAllowedElem.value)
    const matchesArr = [];
    const inputMarkedAreasCount = countMarkedAreas(inputPattern);
    let numOfMatches;

    network.forEach((currPattern) => {
        numOfMatches = 0;

        for (let i = 0; i < currPattern.length; i++) {
            for (let j = 0; j < currPattern[i].length; j++) {
                if (inputPattern[i][j] === 1 && currPattern[i][j] === 1) {
                    numOfMatches++;
                }
            }
        }

        matchesArr.push([
            numOfMatches,
            countMarkedAreas(currPattern),
        ]);
    });

    let foundIndex;
    let strictness;

    for (let i = 0; i <= errorAllowed; i += 5) {
        strictness = ((100 - i) / 100);

        foundIndex = matchesArr.findIndex((x) => {
            const compromisedMatchesCount = x[1] * strictness;

            return x[0] >= compromisedMatchesCount && x[0] >= inputMarkedAreasCount * strictness;
        });

        if (foundIndex !== -1) break;
    }

    if (foundIndex !== -1) {
        drawPattern(outputPatternElem, network[foundIndex]);
    } else {
        outputPattern = getEmptyPattern();
        drawPattern(outputPatternElem, outputPattern);
        alert("Pattern not found");
    }
}

function isEmpty(pattern) {
    return pattern.every((row) => row.every((item) => item === 0));
}

function countMarkedAreas(pattern) {
    return pattern.reduce(
        (acc, curr) => acc + curr.reduce((a, b) => a + b, 0),
        0
    );
}
