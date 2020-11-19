import PageController from './scripts/controllers/pageController';
import PaintersService from "./scripts/services/paintersService";

import { shuffleAndReturnArray } from "./scripts/functions/utils";

new PaintersService().getPainters()
    .then((painters) => {
        //shuffle array for a science!
        const paintersList = shuffleAndReturnArray(painters)

        new PageController(paintersList).activatePage();
    });
