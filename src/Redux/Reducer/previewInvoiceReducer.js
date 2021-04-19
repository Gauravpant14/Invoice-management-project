const initialState = {
    loading: false,
    previewInvoice: '',
    error:''
}

export const previewInvoiceReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_PREVIEW_INVOICES_REQUEST' :
            return {
                ...state,
                loading:true
            }
        case 'FETCH_PREVIEW_INVOICES_SUCCESS' :
            return {
                loading:false,
                previewInvoice: action.payload,
                error:''
            }  

            case 'FETCH_PREVIEW_INVOICES_FAILURE' :
                return {
                    loading:false,
                    error:''
                }  
            default:
                return state
            }
            }
            
export default previewInvoiceReducer