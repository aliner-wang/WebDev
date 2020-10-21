/* Cs61A Hw #1 */


//#1:  Syllabus quiz LOL



//#2 A Plus Abs B
function aplusb(a, b) {
    if (b < 0) {
        return a - b;

    } else {
        return a + b;
    }
}

var test1 = aplusb(3, 4);
var test2 = aplusb(3, -4);



//#3 Two of Three
function two_of_three(x, y, z) {
    var max = Math.max(x, y, z);
    if (max == x) {
        return y + z;
    } else if (max == y) {
        return x + z;
    } else {
        return x + y;
    }
 }


 //#4 Largest Factor
function largest_factor(n) {
    var i;
    var track = 1;
    for (i = 0; i < n; i++) {
        if (n % i == 0) {
            track = i;
        }
    }
    return i;
}

//#5 If Function vs Statement
function if_function(condition, true_res, false_res) {


}



//#6 Hailstone
function hailstone(n) {
    var i;
    for (i = 0; i < n; i++) {
        if (n % 2 == 0) {
            n = n/2;
        } else if (n % 3 == 0) {
            n++;
        }
    }
    return n;
}
