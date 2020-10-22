
var previous;
var operation = "";
/* updates value in display bar */
function update(value) {
    var old = document.getElementById("value").innerText;
    if (old == "0") {
        document.getElementById("value").innerHTML = value;
    } else {
        document.getElementById("value").innerHTML = old + value;
    }


}

function backspace() {
    var old = document.getElementById("value").innerText;
    if (old.length == 1) {
        document.getElementById("value").innerHTML = "0";

    } else {
        var cut = old.substring(0, old.length - 1);
        document.getElementById("value").innerHTML = cut;

    }
}

/* does */
function solve() {
    if (operation != "") {
        if (operation == "add") {
            var current = parseInt(document.getElementById("value").innerText);
            var output = current + previous;
            document.getElementById("value").innerHTML = output.toString();

        } else if (operation == "minus") {
            var current = parseInt(document.getElementById("value").innerText);
            var output = previous - current;
            document.getElementById("value").innerHTML = output.toString();

        } else if (operation == "div") {
            var current = parseInt(document.getElementById("value").innerText);
            var output = current/previous;
            document.getElementById("value").innerHTML = output.toString();

        } else if (operation == "mul") {
            var current = parseInt(document.getElementById("value").innerText);
            var output = current * previous;
            document.getElementById("value").innerHTML = output.toString();
        }
    }

}

function mul() {
    solve()
    previous = parseInt(document.getElementById("value").innerText);
    operation = "mul";
    clear_display();
}

function add() {
    previous = parseInt(document.getElementById("value").innerText);
    operation = "add";
    clear_display();
}


function div() {
    previous = parseInt(document.getElementById("value").innerText);
    operation = "div";
    clear_display();

}

function minus() {
    previous = parseInt(document.getElementById("value").innerText);
    operation = "minus";
    clear_display();
}

function clear_display() {
    document.getElementById("value").innerHTML = "0";
}

function clear_everything() {
    previous = 0;
    operation = "";
    clear_display();

}
