import AbstractComponent from "./abstract-component";

const painterTemplate = (painter) => {
    return `<li class="painters__item">
        <div class="painters__wrapper">
            <div class="painters__image-box">
                <img class="painters__image" src=./assets/media/img/painters/${painter.img} alt="${painter.name}">
            </div>
            <article class="painters__info">
                <h3 class="painters__name">${painter.name}</h3>
                <p class="painters__location">${painter.city}</p>
                <div class="painters__about-section">
                    <a class="painters__link painters__link--phone" href="tel:${painter.phone}">${painter.phone}</a>
                    <a class="painters__link painters__link--email" href="mailto:${painter.email}">${painter.email}</a>
                </div>
                <p class="painters__description">${painter.description}</p>
                <ul class="painters__certificate-list">
                    ${painter.certificates.map((certificate) => (
                        `<li class="painters__certificate-item">${certificate}</li>`
                    )).join('')}    
                </ul>
            </article>
        </div>
        <div class="painters__actions-box">
            <button class="painters__button">Pyydä tarjous!</button>
            <ul class="painters__icons-list">
                <li class="painters__icons-item">
                    <p class="painters__icons-text">11</p>
                </li>
            </ul>
        </div>
    </li>`
}

export default class PainterComponent extends AbstractComponent {
    constructor(painter) {
        super();

        this.painter = painter;
    }

    getTemplate() {
        return painterTemplate(this.painter);
    }
}



