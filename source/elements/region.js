import { enableSelection } from '../utilities/selection.js';
import html from '../templates/region.js';

export class Region extends quantum.Component {
    constructor() {
        super();

        const selection = this.shadowRoot.querySelector('div');

        enableSelection(this, selection);
    }

    static template = quantum.template(html);

    static get observedAttributes() { return ['selector']; }
}

quantum.define('quantum-region', Region);