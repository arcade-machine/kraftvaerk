import PainterComponent from "../components/paintersComponent";
import Menu from '../components/menu';

const sortingForm = document.querySelector('.filter__form');
const formSortingCheckboxes = sortingForm.querySelectorAll('input[name="sorting"]');

const paintersSection = document.querySelector('.painters');
const paintersListContainer = paintersSection.querySelector('.painters__list');

const spinner = paintersSection.querySelector('.spinner');

export default class PageController {
    constructor(painterList) {
        this.painterList = painterList;
    }

    activatePage() {
        spinner.remove();

        this._renderPainters(this.painterList);

        this._setupSorting();
        new Menu().setupMobileMenu();
    }

    _setupSorting() {
        sortingForm.addEventListener('change', () => {
            let sortedArray = [ ...this.painterList ];

            formSortingCheckboxes.forEach(
                (checkbox) => {
                    if (checkbox.checked) {
                        sortedArray = this._filterSortingInput(sortedArray, checkbox.value)
                    }

                    return sortedArray;
                }
            )

            this._renderPainters(sortedArray);
        });
    }

    _renderPainters(painterList) {
        paintersListContainer.innerHTML = '';

        painterList.forEach(
            (painter) => {
                paintersListContainer.append(
                    new PainterComponent(painter).getElement()
                )
            }
        )
    }

    _filterSortingInput (array, value) {
        return array.filter(
            function (item) {
                return item.certificates.includes(value);
            }
        );
    }
}
