export const createTemplate = (template, element = 'div', className = '') => {
    const newElement = document.createElement(element);
    newElement.className = className;
    newElement.innerHTML = template;

    return newElement;
};
