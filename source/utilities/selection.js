import { rectanglesOverlap, distanceSquared } from '../functions/math.js';

export const enableSelection = (selection) => {
    const { style, parentElement } = selection;
    const origin = {};

    const draw = event => {
        const position = { x: event.clientX, y: event.clientY };
        Object.assign(style, {
            top: `${position.y < origin.y ? position.y : origin.y}px`,
            left: `${position.x < origin.x ? position.x : origin.x}px`,
            width: `${Math.abs(position.x - origin.x)}px`,
            height: `${Math.abs(position.y - origin.y)}px`
        });

        if (!quantum.shown(style) && distanceSquared(origin, position) > 30) {
            quantum.show(style);
        }
    }

    const open = event => {
        parentElement.addEventListener('mousemove', draw);
        origin.x = event.clientX;
        origin.y = event.clientY;
    }

    const close = event => {
        parentElement.removeEventListener('mousemove', draw);
        if (quantum.shown(style)) {
            quantum.hide(style);
            const elements = parentElement.querySelectorAll(selection.selector || '*');
            if (elements.length) {
                const selectEvent = new Event(selection.event || 'select');
                switch (selection.mode) {
                    // TODO: case 'ellipse': break;
                    default:
                        const selectionArea = selection.getBoundingClientRect();
                        for (const element of elements) {
                            if (rectanglesOverlap(selectionArea, element.getBoundingClientRect())) {
                                element.dispatchEvent(selectEvent);
                            }
                        }

                        break;
                }
            }
        }
    }

    parentElement.addEventListener('mousedown', open);
    parentElement.addEventListener('mouseup', close);
};