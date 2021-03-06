import { elementsIntersect } from '../utilities/math.js';
import { enableMouse } from '../controls/mouse.js';
import region from '../templates/region.js';

export class Region extends Quantum {
    constructor() {
        super();

        enableMouse(this);
    }

    static get observedAttributes() { return ['event', 'selector']; }

    dispatch(event = 'select', selector = '*') {
        const elements = document.querySelectorAll(this.selector || selector);
        if (elements.length) {
            const selectEvent = new Event(this.event || event);
            const selectArea = this.getBoundingClientRect();
            for (const element of elements) {
                if (elementsIntersect(selectArea, element.getBoundingClientRect())) {
                    element.dispatchEvent(selectEvent);
                }
            }
        }
    }
}

Region.define('quantum-region', region);