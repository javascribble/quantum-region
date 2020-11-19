export const elementsIntersect = (a, b) => !(a.right < b.left || a.left > b.right || a.bottom < b.top || a.top > b.bottom);

export const distanceSquared = (v2a, v2b) => Math.pow(v2a.x - v2b.x, 2) + Math.pow(v2a.y - v2b.y, 2);

export const rectifyVectors = (v2a, v2b) => ({
    top: `${v2a.y < v2b.y ? v2a.y : v2b.y}px`,
    left: `${v2a.x < v2b.x ? v2a.x : v2b.x}px`,
    width: `${Math.abs(v2a.x - v2b.x)}px`,
    height: `${Math.abs(v2a.y - v2b.y)}px`
});