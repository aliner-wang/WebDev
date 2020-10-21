/* hw 2 yot yot */

//#1 num eights
function num_eights(x) {
    if (x == 0){
        return 0;
    } else if (x % 10 == 8) {
        return 1 + num_eights(x - (x%10));

    } else {
        return 0 + num_eights(x - (x%10));
    }
}


//#2 PingPong
function pingpong(m) {
    function helper(m, val, dir) {
        if (m == 0){
            return val;
        } else {
            if (val % 10 == 8) {
                dir = -dir;
                helper(m - 1, val - dir, dir)
            } else {
                helper(m-1, val + dir, dir)
            }

        }
    }
    return helper(m, 0, 1);
}


//#3 Missing Digits
function missing_digits(n) {
    if (n < 10) {
        return 0;
    } else {
        var current = n % 10;
        var new_val = (n - current) / 10;
        var prev = new_val % 10;
        return(current - prev - 1) + missing_digits(new_val);
    }

}