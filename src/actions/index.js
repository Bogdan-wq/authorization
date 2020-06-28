const loggedInTrue = () => {
    return {
        type:'LOGGED_IN_TRUE'
    }
}

const loggedInFalse = () => {
    return {
        type:'LOGGED_IN_FALSE'
    }
}

const changeLoginInputValue = (value) => {
    return {
        type:'LOGIN_INPUT_VALUE',
        payload:value,
    }
}

const changePasswordInputValue = (value) => {
    return {
        type:'PASSWORD_INPUT_VALUE',
        payload:value,
    }
}

const invalidLogin = () => {
    return {
        type:'INVALID_LOGIN'
    }
}

const invalidPassword = () => {
    return {
        type:'INVALID_PASSWORD'
    }
}

const validLogin = () => {
    return {
        type:'VALID_LOGIN'
    }
}

const validPassword = () => {
    return {
        type:'VALID_PASSWORD'
    }
}


export {
    loggedInFalse,
    loggedInTrue,
    changeLoginInputValue,
    changePasswordInputValue,
    invalidLogin,
    invalidPassword,
    validLogin,
    validPassword,
}