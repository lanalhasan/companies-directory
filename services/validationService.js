const validateEmail = (email = '') => { //we did  (email = '') in case the person forgot to give a value we give default value
    return String(email).trim() // this return String(email) was to guarantee we're dealing with a string an any case
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}


const validateName = (name = '', minLength = 2, maxLength = 25) => {
    const n = String(name).trim()
    return (n.length > minLength) && (n.length < maxLength) //2 conditions
}


const validatePassword = (password = '') => {
    const lowerCaseLetters = /[a-z]/g
    const upperCaseLetters = /[A-Z]/g
    const numbers = /[0-9]/g;
    const characters = /[@!#%&)_=.:^$*()+?/\\]{1,}/g
    const pass = String(password).trim()
    return (
        pass.match(lowerCaseLetters) &&
        pass.match(upperCaseLetters) &&
        pass.match(numbers) &&
        pass.match(characters) &&
        pass.length >= 8
    )


}


module.exports = {
    validateEmail,
    validateName,
    validatePassword
} 