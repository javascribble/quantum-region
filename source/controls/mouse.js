import { distanceThreshold } from '../constants/options.js';
import { distanceSquared, rectifyVectors } from '../utilities/math.js';

export const enableMouse = (element) => {
    const { style } = element;
    const origin = {};

    const open = event => {
        if (event.composedPath().every(target => !target.draggable)) {
            document.addEventListener('mousemove', draw);
            origin.x = event.clientX;
            origin.y = event.clientY;
        }
    };

    const draw = event => {
        const position = { x: event.clientX, y: event.clientY };
        Object.assign(style, rectifyVectors(origin, position));
        if (element.hidden && distanceSquared(origin, position) > distanceThreshold) {
            element.hidden = false;
        }
    };

    const close = event => {
        document.removeEventListener('mousemove', draw);
        if (!element.hidden) {
            element.hidden = true;
            element.dispatch();
        }
    };

    document.addEventListener('mousedown', open);
    document.addEventListener('mouseup', close);
};