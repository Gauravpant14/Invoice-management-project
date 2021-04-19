import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAllInvoices } from "./../Redux/Action/allInvoiceAction";
import axios from "axios";
import { reviewInvoice } from "./../Redux/Action/previewInvoiceAction";
import ViewInvoice from "./ViewInvoice";

const DownloadPage = ({ history }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

 

  useEffect(() => {
    dispatch(getAllInvoices());

    console.log(state, "all invoice useEffect called");

   
  
  }, []);

  const previewInvoices = (e) => {
    const invoiceId = e.target.id;
    dispatch(reviewInvoice(invoiceId));
  };

  const viewFile = (status, from,address,state) => {
   
    history.push("/view_invoice", {
      status: status,
      from: from,
      address:address,
      state:state
    });
  };

  const token = localStorage.getItem("user_token");
  const deleteInvoice = (e) => {
    console.log("delded", e);

    axios
      .delete(`http://192.168.1.78:9000/invoice/${e}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        dispatch({
          type: "INVOICE_DELETE",
          payload: e,
        });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
   
  };

  const updatePage = () => {
      console.log("update Page")
  }


  return (
    <div>
      <table id="customers">
        <tr>
          <th>Invoice Status</th>
          <th>From</th>
          <th>Id</th>
          <th>Product Name</th>
          <th>Operation</th>
        </tr>

        {state.allInvoices.allInvoices.map((e) => (
          <tr>
            <td>{e.status}</td>
            <td>{e.from.companyName}</td>
            <td>{e.to.companyName}</td>
            <td>{e.items[0].productName}   </td>
            <td>
              {" "}
              <button onClick={(e) => previewInvoices(e)} id={e._id}>
                Download Invoice
              </button>
              <button onClick={() => viewFile(e.status, e.from.companyName,e.from.address,e.from.state)}>
                View
              </button>
              <button onClick={() => deleteInvoice(e._id)}> Delete </button>
              <button onClick={() => updatePage()}>Update</button>
            </td>
          </tr>
        ))}
      </table>
      {/* {
                state.previewInvoice.previewInvoice.map((e) => console.log(e) )

            } */}
    </div>
  );
};

export default DownloadPage;
