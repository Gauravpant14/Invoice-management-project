const initialState = {
    loading: false,
    userInfo: {},
    token: '',
    error: '',
    companies: []
}

export const loginReducer = (state = initialState, action) => {
    console.log(action, "payload in login reducer")
    switch (action.type) {
        case 'FETCH_LOGIN_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_LOGIN_SUCCESS':
            return {

                loading: false,
                token: action.payload.token,
                error: '',
                companies: action.payload.companies,
            }

        case 'FETCH_LOGIN_FAILURE':
            return {
                loading: false,
                error: ''
            }
        default:
            return state
    }
}
export default loginReducer;