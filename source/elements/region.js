import { enableSelection } from '../utilities/selection.js';
import html from '../templates/region.js';

export class Region extends quantum.Component {
    constructor() {
        super();

        enableSelection(this);
    }

    static template = quantum.template(html);

    static get observedAttributes() { return ['mode', 'event', 'selector']; }
}

quantum.define('quantum-region', Region);