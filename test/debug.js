import '/node_modules/@javascribble/quantum/source/export.js';
import '/source/export.js';

for (let i = 0; i < 20; i++) {
    for (let ii = 0; ii < 20; ii++) {
        const button = document.createElement('button');
        button.addEventListener('select', event => {
            const style = button.style;
            style.backgroundColor = style.backgroundColor === 'lightblue' ? 'lightgreen' : 'lightblue';
        });

        document.body.appendChild(button);
    }
}

document.body.style.visibility = 'visible';