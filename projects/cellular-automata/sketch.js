let arr = [];
let y = 0;
let w = 10;

function setup() {
    createCanvas(1010, 910);
    let total = width / w;
    for(let i = 0; i < total; i++) {
        arr[i] = floor(random(2))
    }
    arr[total / 2] = 1;
    background(255);
}

function draw() {
    for (let i = 0; i < arr.length; i++) {
        let x = i * w;
        fill(255 - arr[i] * 255, random(255), i * random(255), i * 10 + random(255));
        //fill(arr[i] * 255);
        square(x, y, w);
    }   

    y += w;

    let nextCells = [];
    nextCells[0] = arr[0];
    nextCells[arr.length - 1] = arr[arr.length - 1];
    for(let i = 0; i < arr.length; i++) {
        let left = arr[i - 1];
        let right = arr[i + 1];
        let state = arr[i];
        let newState = calcState(left, state, right);
        nextCells[i] = newState;
    }

    arr = nextCells;

}

function calcState(a, b, c) {
    if(a == 1 && b == 1 && c == 1) return 0;
    if(a == 1 && b == 1 && c == 0) return 1;
    if(a == 1 && b == 0 && c == 1) return 0;
    if(a == 1 && b == 0 && c == 0) return 1;
    if(a == 0 && b == 1 && c == 1) return 1;
    if(a == 0 && b == 1 && c == 0) return 0;
    if(a == 0 && b == 0 && c == 1) return 1;
    if(a == 0 && b == 0 && c == 0) return 0;
}
