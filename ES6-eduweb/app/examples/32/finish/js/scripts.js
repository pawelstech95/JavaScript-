let numbers = [12, 3, 9, 22, 11, 6];

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

// console.log( Math.max(...numbers) );
console.log( Math.max(...it) );
console.log( [...it] );
console.log( [..."Piotr"] );

var lis = document.querySelectorAll(".edu-content ul li");

[...lis]
    .filter(li => li.textContent.includes("2"))
    .forEach(li => li.style.fontWeight = "bold");