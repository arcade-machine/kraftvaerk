import './scripts/menu';
import PainterComponent from './scripts/components/paintersComponent';

const paintersList = document.querySelector('.painters__list');

const PAINTERS_URL = './assets/media/mocks/painters.json';

const whenPaintersIsLoaded = fetch(PAINTERS_URL);

whenPaintersIsLoaded
    .then((response) => response.json())
    .then((painters) => {
        painters.forEach(
            (painter) => {
                paintersList.append(
                    new PainterComponent(painter).getElement()
                )
            }
        )
    });
