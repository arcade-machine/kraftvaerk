import PageController from './scripts/controllers/pageController';

import { shuffleAndReturnArray } from "./scripts/functions/utils";

const PAINTERS_URL = './assets/media/mocks/painters.json';

const whenPaintersIsLoaded = fetch(PAINTERS_URL);

whenPaintersIsLoaded
    .then((response) => response.json())
    .then((painters) => {
        //shuffle array for a science!
        const paintersList = shuffleAndReturnArray(painters)

        new PageController(paintersList).activatePage();
    });
