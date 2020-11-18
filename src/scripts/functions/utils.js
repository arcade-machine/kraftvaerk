export const createTemplate = (template, element = 'div', className = '') => {
    const newElement = document.createElement(element);
    newElement.className = className;
    newElement.innerHTML = template;

    return newElement;
};

export const shuffleAndReturnArray = (array, expectedLength) => {
    const shuffled = array.slice().sort(
        () => {
            return 0.5 - Math.random();
        });

    return shuffled.slice(0, expectedLength);
}
