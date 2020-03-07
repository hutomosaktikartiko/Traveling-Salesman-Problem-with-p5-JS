var cities = [];
var totalCities = 5;

var order = [];

var recordDistance;
var totalPermutations;
var count = 1;

function setup() {
    createCanvas(400, 600);
    frameRate(5);
    for (var i = 0; i < totalCities; i++) {
        var v = createVector(random(width), random(height/2));
        cities[i] = v;
        order[i] = i;
    }

    var d = calcDistance(cities, order);
    recordDistance = d;
    bestEver = order.slice();

    totalPermutations = factorial(totalCities);
}

function draw() {
    background(0);
    fill(255);
    for (var i = 0; i < cities.length; i++) {
        ellipse(cities[i].x, cities[i].y, 8, 8);
    }


    stroke(255, 0, 255);
    strokeWeight(2);
    noFill();
    beginShape();
    for (var i = 0; i < cities.length; i++) {
        var n = bestEver[i];
        vertex(cities[n].x, cities[n].y);
    }
    endShape();

    translate(0, height / 2);
    stroke(255);
    strokeWeight(1);
    noFill();
    beginShape();
    for (var i = 0; i < cities.length; i++) {
        var n = order[i];
        vertex(cities[n].x, cities[n].y);
    }
    endShape();

    var d = calcDistance(cities, order);
    if (d < recordDistance) {
        recordDistance = d;
        bestEver = order.slice();
    }

    textSize(32);
    fill(255);
    console.log(count);
    var percent = 100 * (count / totalPermutations);
    text(nf(percent, 0, 2) + "% Completed", 20, height / 2 - 50);

    nextOrder();
}

function swap(a, i, j) {
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

function calcDistance(points, order) {
    var sum = 0;
    for (var i = 0; i < points.length - 1; i++) {
        var cityAIndex = order[i];
        var cityA = points[cityAIndex];
        var cityBIndex = order[i+1];
        var cityB = points[cityBIndex];

        var d = dist(cityA.x, cityA.y, cityB.x, cityB.y);
        sum += d;
    }
    return sum;
}

// this is my lexical order algoritma
function nextOrder() {
    count ++;
    var largestI = -1;
    for (let i = 0; i < order.length - 1; i++) {
        if(order[i] < order[i + 1]) {
            largestI = i;
        }
    }
    if (largestI == -1) {
        noLoop();
    }

    //step 2
    var largestJ = -1;
    for (let j = 0; j < order.length; j++) {
        if (order[largestI] < order[j]) {
            largestJ = j;
        }
    }

    //step 3
    swap(order, largestI, largestJ);

    //step: reverse from largestI + 1 to the end
    var endArray = order.splice(largestI + 1);
    endArray.reverse();
    order = order.concat(endArray);
}

function factorial(n) {
    if (n == 1) {
        return 1;
    } else{
        return n * factorial(n - 1);
    }
}