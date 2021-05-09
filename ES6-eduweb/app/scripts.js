// podobne do tablicy - pod jedna zmienna mozemy przechowywac wiele danyc
//
//
let s = new Set(); // 4/5 metod posiada - add delete has clear + size
s.add('Piotr');
s.add('Anna');
//dane musza byc unikalne i nie moga sie powtarzac
s.delete('Piotr');

let person1 = {
  firstName: 'Jan',
  lastName: 'Kowalski',
};

let person2 = {
  firstName: 'Anna',
  lastName: 'Nowak',
};

let s1 = new Set([person1, person2]);

s1.forEach((value) => console.log(value));

let numbers = [1, 2, 3, 2, 3, 1, 1, 3, 4, 4, 3, 6, 7, 8];

function removeDuplicate(arr) {
  return [...(new Set(arr))];
}
console.log(removeDuplicate(numbers))