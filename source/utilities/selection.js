const rectanglesOverlap = (a, b) => !(a.right < b.left || a.left > b.right || a.bottom < b.top || a.top > b.bottom);
const distanceSquaredVector2Object = (v2a, v2b) => Math.pow(v2a.x - v2b.x, 2) + Math.pow(v2a.y - v2b.y, 2);

export const enableSelection = (element, region) => {
    const { style, parentElement } = element;
    const origin = {};

    const draw = (event) => {
        const x = event.clientX, y = event.clientY;
        style.top = `${y < origin.y ? y : origin.y}px`;
        style.left = `${x < origin.x ? x : origin.x}px`;
        style.width = `${Math.abs(x - origin.x)}px`;
        style.height = `${Math.abs(y - origin.y)}px`;
        if (!quantum.shown(element) && distanceSquaredVector2Object(origin, { x, y }) > 30) {
            quantum.show(element);
        }
    };

    const open = (event) => {
        parentElement.addEventListener('mousemove', draw);
        origin.x = event.clientX;
        origin.y = event.clientY;
    };

    const close = (event) => {
        parentElement.removeEventListener('mousemove', draw);
        if (quantum.shown(element)) {
            quantum.hide(element)
            const selectEvent = new Event('select');
            const box = element.getBoundingClientRect();
            parentElement.querySelectorAll(selector).forEach(element => {
                if (rectanglesOverlap(box, element.getBoundingClientRect())) {
                    element.dispatchEvent(selectEvent);
                }
            });
        }
    };

    parentElement.addEventListener('mousedown', open);
    parentElement.addEventListener('mouseup', close);
};