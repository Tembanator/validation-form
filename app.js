const submitBtn = document.querySelector('#submit-btn')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm-password')

submitBtn.addEventListener('click', (e) => {
    if (confirmPassword.value && password.value) {

        if (confirmPassword.value === password.value) {
            console.log('match')
        }
    }
})