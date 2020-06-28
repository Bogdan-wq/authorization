const initialState = {
    loggedIn:false,
    loginValue:'',
    passwordValue:'',
    invalidLogin:false,
    invalidPassword:false,
}

const reducer = (state = initialState,action) => {



    switch (action.type) {
        case 'LOGGED_IN_TRUE':
            return {
                ...state,
                loggedIn: true,
            }
        case 'LOGGED_IN_FALSE':
            return {
                ...state,
                loggedIn: false,
            }
        case 'LOGIN_INPUT_VALUE':
            return {
                ...state,
                loginValue: action.payload,
            }

        case 'PASSWORD_INPUT_VALUE':
            return {
                ...state,
                passwordValue:action.payload,
            }

        case 'INVALID_LOGIN':
            return {
                ...state,
                invalidLogin: true,
            }

        case 'INVALID_PASSWORD':
            return {
                ...state,
                invalidPassword: true,
            }

        case 'VALID_LOGIN':
            return {
                ...state,
                invalidLogin: false,
            }

        case 'VALID_PASSWORD':
            return {
                ...state,
                invalidPassword: false,
            }
        default:
            return state;
    }
}


export default reducer;