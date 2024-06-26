const checkBoxes = document.querySelectorAll('.checkbox');
const button = document.getElementById('btn-sign-up');
const termsCheckBox = document.querySelectorAll('.checkbox')[0];
const privacyCheckBox = document.querySelectorAll('.checkbox')[1];

const isAllChecked = checkBoxes.forEach(element => {
    element.addEventListener('change', () => {
        const allChecked = Array.from(checkBoxes).every(checkbox => checkbox.checked);
        if (allChecked) {
            button.disabled = false;
            return true;
        } else {
            button.disabled = true;
            return false;
        }
    })
})

if (button.disabled === true) {
    button.classList.remove('submit-sign-up:hover');
}

let termsContainer = document.getElementById('terms-container');
let privacyContainer = document.getElementById('privacy-container');
let openTermsBtn = document.getElementById('terms-btn');
let openPrivacyBtn = document.getElementById('privacy-btn');
let closePrivacyBtn = document.getElementById('close-privacy-btn');
let closeTermsBtn = document.getElementById('close-terms-btn');

openTermsBtn.addEventListener('click', function () {
    termsContainer.style.display = 'flex';

})
    openPrivacyBtn.addEventListener('click', function () {
        privacyContainer.style.display = 'flex';
    })

closeTermsBtn.addEventListener('click', function () {
    termsContainer.style.display = 'none';
    termsCheckBox.checked = true;
    if (termsCheckBox.checked == true && privacyCheckBox.checked == true) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }

})

closePrivacyBtn.addEventListener('click', function () {

    privacyContainer.style.display = 'none';
    privacyCheckBox.checked = true;
    if (termsCheckBox.checked == true && privacyCheckBox.checked == true) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
})

window.addEventListener('click', function (e) {
    if (e.target === termsContainer) {
        termsContainer.style.display = 'none';
    }
    if (e.target === privacyContainer) {
        privacyContainer.style.display = 'none';
    }
})

