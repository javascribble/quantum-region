import html from '../templates/region.js';

export class Region extends quantum.Component {
    constructor() {
        super();
    }

    static template = quantum.template(html);
}

quantum.define('quantum-region', Region);