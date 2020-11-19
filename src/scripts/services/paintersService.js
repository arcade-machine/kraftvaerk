const PAINTERS_URL = './assets/media/mocks/painters.json';

export default class PaintersService {
    async getPainters() {
        return fetch(PAINTERS_URL)
            .then(
                (response) => {
                    return response.json();
                }
            );
    }
}
