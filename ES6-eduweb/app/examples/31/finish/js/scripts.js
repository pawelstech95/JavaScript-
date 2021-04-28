let it = {
    [Symbol.iterator]() {
        var numbers = [1, 2, 3, 4, 5],
            index = 0;

        return {
            next: function() {
                return {
                    done: (index === numbers.length) ? true : false,
                    value: numbers[index++]
                };
            }
        };
    }
};

// let iterator = it[Symbol.iterator]();

// for(var o = iterator.next(); o.done !== true; o = iterator.next()) {

//     console.log(o.value);

// }

// for(let value of it) {
//     console.log(value);
// }

// for(let ch of "Piotr") {
//     console.log(ch);
// }

var lis = document.querySelectorAll(".edu-content ul li");

for(let li of lis) {
    li.style.color = "#ff0000";
}