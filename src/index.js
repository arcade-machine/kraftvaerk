import PageController from './scripts/controllers/pageController';

const PAINTERS_URL = './assets/media/mocks/painters.json';

const whenPaintersIsLoaded = fetch(PAINTERS_URL);

whenPaintersIsLoaded
    .then((response) => response.json())
    .then((painters) => {
        new PageController(painters).activatePage();
    });
