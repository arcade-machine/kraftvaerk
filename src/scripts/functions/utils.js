export const createTemplate = (template) => {
    const newElement = document.createElement(`div`);
    newElement.innerHTML = template;

    return newElement;
};
