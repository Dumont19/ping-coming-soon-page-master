const sectionEmail = document.querySelector('.form-email')
const form = document.querySelector('.input-email')
const submitButton = document.querySelector('.btn')
const email = document.getElementById('email')

console.log(submitButton)

form.addEventListener('submit', event => event.preventDefault())

function emailValidation() {
    submitButton.addEventListener('click', () => {
        if (email.value === '' || email.value.includes('@') === false) {
            sectionEmail.classList.add('error')
            form.classList.add('error')
        } else {
            sectionEmail.classList.remove('error')
            form.classList.remove('error')
            email.value = ''
        }
    })
}
emailValidation()