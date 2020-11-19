import { shown, show, hide } from '../import.js';
import { distanceThreshold } from '../constants/options.js';
import { distanceSquared, rectifyVectors } from '../utilities/math.js';

export const enableMouse = (element) => {
    const { style, parentElement } = element;
    const origin = {};

    const open = event => {
        if (!event.target.draggable) {
            parentElement.addEventListener('mousemove', draw);
            origin.x = event.clientX;
            origin.y = event.clientY;
        }
    };

    const draw = event => {
        const position = { x: event.clientX, y: event.clientY };
        Object.assign(style, rectifyVectors(origin, position));
        if (!shown(style) && distanceSquared(origin, position) > distanceThreshold) {
            show(style);
        }
    };

    const close = event => {
        parentElement.removeEventListener('mousemove', draw);
        if (shown(style)) {
            hide(style);
            element.dispatch();
        }
    };

    parentElement.addEventListener('mousedown', open);
    parentElement.addEventListener('mouseup', close);
};