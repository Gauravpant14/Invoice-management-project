import axios from "axios";

export const fetchPreviewInvoicesRequest = () => {
  return {
    type: "FETCH_PREVIEW_INVOICES_REQUEST",
  };
};

export const fetchPreviewInvoicesSuccess = (preview) => {
  console.log(preview);
  return {
    type: "FETCH_PREVIEW_INVOICES_SUCCESS",
    payload: preview,
  };
};

export const fetchPreviewInvoicesFailure = (error) => {
  return {
    type: "FETCH_PREVIEW_INVOICES_FAILURE",
    payload: error,
  };
};



export const reviewInvoice = (id) => {

  // const invoiceId = '606d552e052d71303428cfed'
 
  return (dispatch) => {
   
    dispatch(fetchPreviewInvoicesRequest);
   
    axios({
			url:`http://192.168.1.78:9000/invoice/pdf/${id}`,
			method: "GET",
			responseType: "blob"
		})
      .then(response =>{
        console.log(response);
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "file.pdf");
        document.body.appendChild(link);
        link.click();
        
        
        // dispatch(fetchPreviewInvoicesSuccess(result))
      })
      
      .catch((error) => {
      
            console.log(error)
       
      });
  };
};
