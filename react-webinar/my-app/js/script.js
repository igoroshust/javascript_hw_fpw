window.onload = () => {
    const plusBtn = document.querySelector("#plus");
    const minusBtn = document.querySelector("#minus");
    const h1 = document.querySelector("h1");
    let count = 0;

    function render() {
        h1.innerText = count;
        /* Невозможность перехода в отрицательные значения */
        if (count > 0) {
            minusBtn.removeAttribute('disabled');
        } else {
            minusBtn.setAttribute('disabled', '');
        }

    }

    /* Реализуем 'слушатель' событий */
    plusBtn.addEventListener('click', () => {
        count++;
        render();
    });

    minusBtn.addEventListener('click', () => {
        count--;
        render();
    });


}