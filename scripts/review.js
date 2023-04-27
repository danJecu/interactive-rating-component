const buttons = document.querySelectorAll('.buttons-container button');
const boxRating = document.getElementById('box-rating');
const boxResult = document.getElementById('box-result');
const submit = document.getElementById('submit');
const error = document.getElementById('error-msg');
const selectionMsg = document.getElementById('selection-msg');

let selected = '';

function toggleError(showError) {
    if (showError) {
        error.classList.remove('d-none');
    } else {
        error.classList.add('d-none');
    }
}

buttons.forEach((btn, i) => {
    btn.addEventListener('mouseover', () => {
        buttons.forEach((otherBtn, j) => {
            if (j <= i) {
                otherBtn.classList.add('hovered');
            }
        });
    });

    btn.addEventListener('mouseout', () => {
        buttons.forEach((otherBtn, j) => {
            if (j <= i) {
                otherBtn.classList.remove('hovered');
            }
        });
    });

    btn.addEventListener('click', () => {
        selected = btn.textContent;

        buttons.forEach((otherBtn, j) => {
            if (j <= i) {
                otherBtn.classList.add('selected');
                otherBtn.classList.remove('hovered');
            } else {
                otherBtn.classList.remove('selected', 'hovered');
            }
        });
    });
});

submit.addEventListener('click', () => {
    if (selected === '') {
        toggleError(true);
        setTimeout(toggleError, 2000);
        return;
    }

    selectionMsg.textContent = `You selected ${selected} out of 5`;
    boxRating.classList.add('d-none');
    boxResult.classList.remove('d-none');
});
