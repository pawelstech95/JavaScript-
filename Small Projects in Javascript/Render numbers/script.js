const result = []
const losowanie = function (){
    
        if(result.length === 6){
            return
        }
    const div = document.createElement('div');
    const wynikLosowania = Math.floor((Math.random() * 49 + 1))
    div.textContent= wynikLosowania
    document.body.appendChild(div)
    result.push(wynikLosowania)
    

}
// pobieramy element na ktorym pracuejemy
const button = document.querySelector('button')
// nasluchiwanie 
button.addEventListener('click', losowanie)
// 23 3 32 11 33 45