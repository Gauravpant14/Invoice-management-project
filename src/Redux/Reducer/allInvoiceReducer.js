const initialState = {
  loading: false,
  allInvoices: [],
  error: "",
};

export const allInvoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_INVOICES_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "INVOICE_DELETE": {
      return {
        ...state,
        allInvoices: state.allInvoices.filter(
          (item) => item._id !== action.payload
        ),
      };
    }
    case "FETCH_INVOICES_SUCCESS":
      return {
        loading: false,
        allInvoices: action.payload,
        error: "",
      };

    case "FETCH_INVOICES_FAILURE":
      return {
        loading: false,
        error: "",
      };
    default:
      return state;
  }
};

export default allInvoiceReducer;
