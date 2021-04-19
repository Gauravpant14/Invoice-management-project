import axios from 'axios'
import { toast } from "react-toastify";
export const fetchInvoiceRequest = () => {

  return {
    type: 'FETCH_INVOICE_REQUEST'
  }
}

export const fetchInvoiceSuccess = Invoice => {
  console.log(Invoice)
  return {
    type: 'FETCH_INVOICE_SUCCESS',
    payload: Invoice
  }
}

export const fetchInvoiceFailure = error => {
  return {
    type: 'FETCH_INVOICE_FAILURE',
    payload: error
  }
}


const token = localStorage.getItem("user_token")

export const postInvoiceData = (invoicedata,history) => {
  console.log("invoice items", invoicedata)
  const invoiceItem = {
    "from": invoicedata.from,
    "to": invoicedata.to,
    "createdBy": invoicedata.createdBy,
    "items": {
      "productName": invoicedata.ProductName,
      "quantity": invoicedata.quantity,
      "description": invoicedata.Description,
      "unitPrice": invoicedata.unitPrice,
      "total": invoicedata.total
    },
    "dueDate": invoicedata.dueDate,
    "status": invoicedata.status
  }

  console.log(token)
  console.log("form Invoice ===>", invoiceItem)
  return (dispatch) => {
    dispatch(fetchInvoiceRequest);
    axios.post("http://192.168.1.78:9000/invoice", invoiceItem, {
      headers: {
        'Authorization': token
      }
    })

      .then((res) => {
        (console.log(res,"res from post form "))
        
          if(res.status===200){
            history.push("/download")
          }
          
      
        
      })
      .catch((error) => {
        toast.error(error.response.data);
        console.log("error", error);
      });
  };
};

