let active = false;


const draw = function(e){
    if(active == false) return;
const x = e.clientX;
const y = e.clientY;

const div = document.createElement('div');
div.style.top = y + 'px';
div.style.left = x + 'px';

document.body.appendChild(div);
} 
const drawActive = function(){
    active = true;
}
const drawCancel = function(){
    active = false;
}

document.body.addEventListener('mousemove', draw);
document.body.addEventListener('mousedown', drawActive);
document.body.addEventListener('mouseup' , drawCancel)
