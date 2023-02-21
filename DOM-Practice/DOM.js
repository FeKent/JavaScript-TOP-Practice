
const container = document.querySelector('#container');

const p = document.createElement('p');
const h3 = document.createElement('h3');
const div = document.createElement('div');
const h1 = document.createElement('h1');
const p2 = document.createElement('p');

div.appendChild(h1);
div.appendChild(p2);

p.textContent = 'Hey I\'m red!';
p.style.color = 'red;';

h3.textContent = 'I\'m a blue h3!';
h3.style.color = 'blue';

div.style.border = 'black';
div.style.borderStyle = 'solid';
div.style.backgroundColor = 'pink';

h1.textContent = 'I\'m in a div';
p2.textContent = 'ME TOO!';

container.appendChild(p);
container.appendChild(h3);
container.appendChild(div);

btn.addEventListener('click', function (e){
    e.target.style.background = 'blue';
    console.log(e.target);
});