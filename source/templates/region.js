export default `
<style>
    :host {
        border: var(--border);
        visibility: hidden;
        position: absolute;
    }

    :host([mode="ellipse"]) {
        border-radius: 100%;
    }
</style>
`;