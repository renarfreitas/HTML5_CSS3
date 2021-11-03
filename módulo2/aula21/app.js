const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')

const testUsername = username => /^[a-zA-z]{6,12}$/.test(username)

form.addEventListener('submit', event => {
    event.preventDefault()
    
    const isAValidUsername = testUsername(event.target.username.value)

    if(isAValidUsername) {
        feedback .textContent = 'O username é válido =)'
        return
    }
    feedback .textContent = 'O username deve conter entre 6 a 12 caracteres e deve contar apenas letras.'
})

form.username.addEventListener('keyup', event => {
    const isAValidUsername = testUsername(event.target.value)

    if (isAValidUsername) {
        form.username.className = 'success'
        return
    }

    form.username.className = 'error'
})