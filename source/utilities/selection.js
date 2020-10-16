import { rectanglesOverlap, distanceSquared } from '../functions/math.js';

export const enableSelection = (element, selection) => {
    const style = selection.style;
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
        element.addEventListener('mousemove', draw);
        origin.x = event.clientX;
        origin.y = event.clientY;
    }

    const close = event => {
        element.removeEventListener('mousemove', draw);
        if (quantum.shown(style)) {
            quantum.hide(style);
            // const elements = this.querySelectorAll(element.selector || '*');
            // if (elements.length) {
            //     const selectEvent = new Event('select');
            //     const selectionArea = this.getBoundingClientRect();
            //     elements.forEach(element => {
            //         if (rectanglesOverlap(selectionArea, element.getBoundingClientRect())) {
            //             element.dispatchEvent(selectEvent);
            //         }
            //     });
            // }
        }
    }

    element.addEventListener('mousedown', open);
    element.addEventListener('mouseup', close);
};