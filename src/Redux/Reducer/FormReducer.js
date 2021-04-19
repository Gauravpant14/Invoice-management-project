const initialState = {
    loading: false,
    Invoice: {},
   
    error:'',
}

export const InvoiceReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_INVOICE_REQUEST' :
            return {
                ...state,
                loading:true
            }
        case 'FETCH_INVOICE_SUCCESS' :
            return {
                loading:false,
                token:action.payload,
                error:''
            }  

            case 'FETCH_INVOICE_FAILURE' :
                return {
                    loading:false,
                    error:''
                }  
            default:
                return state
            }
            }
export default InvoiceReducer;