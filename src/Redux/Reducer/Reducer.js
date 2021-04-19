const initialState = {
    loading: false,
    data: [],
    error:''
}

export const apiReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_USERS_REQUEST' :
            return {
                ...state,
                loading:true
            }
        case 'FETCH_USERS_SUCCESS' :
            return {
                loading:false,
                products:action.payload,
                error:''
            }  

            case 'FETCH_USERS_FAILURE' :
                return {
                    loading:false,
                    error:''
                }  
            default:
                return state
            }
            }
export default apiReducer;