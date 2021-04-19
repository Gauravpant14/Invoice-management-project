const initialState = {
    loading: false,
    to: [],
    
    error:'',
}

export const ToReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_COMPANY_REQUEST' :
            return {
                ...state,
                loading:true
            }
        case 'FETCH_COMPANY_SUCCESS' :
            return {
                loading:false,
                to:action.payload,
                error:''
            }  

            case 'FETCH_COMPANY_FAILURE' :
                return {
                    loading:false,
                    error:''
                }  
            default:
                return state
            }
            }
export default ToReducer;