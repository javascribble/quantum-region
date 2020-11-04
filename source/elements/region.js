import { Component, template, define } from '../import.js';
import { enableSelection } from '../utilities/selection.js';
import html from '../templates/region.js';

export class Region extends Component {
    constructor() {
        super();

        enableSelection(this);
    }

    static template = template(html);

    static get observedAttributes() { return ['mode', 'event', 'selector']; }
}

define('quantum-region', Region);