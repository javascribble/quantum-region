import '/node_modules/@javascribble/quantum/source/export.js';
import '/source/export.js';

const region = document.querySelector('quantum-region');
const buttons = document.querySelectorAll('button');
buttons[0].onclick = event => region.mode = 'rectangle';
buttons[1].onclick = event => region.mode = 'ellipse';

const sampleArea = document.querySelector('p');
for (let i = 0; i < 30; i++) {
    for (let ii = 0; ii < 30; ii++) {
        const button = document.createElement('button');
        button.innerHTML = '&nbsp;';

        const toggle = event => {
            const style = button.style;
            style.backgroundColor = style.backgroundColor === 'lightblue' ? 'lightgreen' : 'lightblue';
        };

        button.addEventListener('select', toggle);
        button.onclick = toggle;

        sampleArea.appendChild(button);
    }
}

document.body.style.visibility = 'visible';