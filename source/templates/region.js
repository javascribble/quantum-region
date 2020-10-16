export default `
<style>
    :host {
        display: block;
        height: 100%;
    }

    div {
        z-index: var(--z-index, 1);
        border: var(--border);
        visibility: hidden;
        position: absolute;
    }
</style>
<div></div>
`;