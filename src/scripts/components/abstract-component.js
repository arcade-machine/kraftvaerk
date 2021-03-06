import { createTemplate } from "../functions/utils";

export default class AbstractComponent {
    constructor() {
        if (new.target === AbstractComponent) {
            throw new Error(`Can't instantiate AbstractComponent, only concrete one.`);
        }

        this._element = null;
    }

    getTemplate() {
        throw new Error(`Abstract method not implemented: getTemplate`);
    }

    getElement() {
        if (!this._element) {
            this._element = createTemplate(this.getTemplate(), 'li', 'painters__item');
        }

        return this._element;
    }

    removeElement() {
        this._element = null;
    }
}
