const initialState = {
    loading: false,
    companydata: [],
    error:''
}

export const companyReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_COMPANY_REQUEST' :
            return {
                ...state,
                loading:true
            }
        case 'FETCH_COMPANY_SUCCESS' :
            return {
                loading:false,
                companydata:action.payload,
                error:'',
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
export default companyReducer
