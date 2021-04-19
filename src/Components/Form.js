import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Datepicker from './Datepicker';
import { Container, Row, Col } from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector, useDispatch } from 'react-redux'
import { postInvoiceData } from './../Redux/Action/FormAction'
import { CompanyData } from './../Redux/Action/ToCompanies'
import { postLoginData } from "./../../src/Redux/Action/LoginAction";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

const Form = ({ history, location }) => {



  const [state1, setstate1] = useState({
    "from": '',
    "to": '',
    "createdBy": '',
    "items": {
      "productName": '',
      "quantity": '',
      "description": '',
      "unitPrice": '',
      "total": ''
    },
    "dueDate": '',
    "status": ''
  })

  // const [addMore, setAddmore] = useState({
  //   items: [
  //     {
  //       productName: "",
  //       quantity: "",
  //       description: "",
  //       unitPrice: "",
  //       total: "",
  //     },
  //   ],
  // });

  // const addItems = (e) => {
  //   e.preventDefault();
  //   setAddmore((prevState) => ({
  //     //here hName was newCon
  //     items: [
  //       ...prevState.items,
  //       {
  //         productName: "",
  //         quantity: "",
  //         description: "",
  //         unitPrice: "",
  //         total: "",
  //       },
  //     ],
  //   }));
  // };





  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const { control, register, handleSubmit, formState: { errors } } = useForm();


  useEffect(() => {
    dispatch(CompanyData());
    dispatch(postLoginData())
    console.log(location.state, "user reg data in form")
    console.log(selectedOrg, "sel org")
    console.log(selectedOrg, "gggggggggggggggggggggggggggggggggggggggggggggg")
    // console.log(selOrg,"local s data")
  }, [])
  // const onSubmit = (invoicedata) => dispatch(postInvoiceData


  //   (invoicedata));
  const getValues = (invoicedata) => {
    setstate1({
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
    })

    setTimeout(() => {

    }, 500);


  }


  const onSubmit = (invoicedata) => {
    //  getValues(invoicedata)
    dispatch(postInvoiceData(invoicedata, history))
    console.log(invoicedata)

    // setTimeout(() => {

    //   history.push("/download")
    // }, 1000);
    // 
    // console.log(object)

    // console.log("dispatched data",state.companyId.to);

  }


  const logoutFun = () => {
    localStorage.clear();
    history.push("/");
  }


  const selectedOrg = JSON.parse(localStorage.getItem("selected_company"))






     
if (localStorage.getItem('user_token'))
{
  <Redirect push to="/form"/>
}
else
{<Redirect push to="/"/>}


  return (

    <>
      <Container>
        <div className="outer">
          {/* {JSON.stringify(state1)} */}
          <form onSubmit={handleSubmit(onSubmit)} className="form-data">
            <h5 className="top-head"><b >INVOICE MANAGEMENT</b></h5>
            <Row className="firstRow">
              <Col md="4">
                <label for="status">From</label>
                <select {...register("from")} className="select1">

                  {selectedOrg.map((e) => (
                    <option value={e.id}>{e.companyName}</option>
                  ))}

                  {/* <option value="606c540c3ac87255eb43225d">Tcs</option>
                  <option value="606c540c3ac87255eb43225d">Wipro</option> */}
                </select>
              </Col>
              <Col md="4">
                <label for="Created By">Created By </label>
                <input
                  type="text"
                  {...register('createdBy', {

                  })}
                />

              </Col>
              <Col md="4">
                <label for="To">To</label>
                <select {...register("to")} className="select">

                  {state.companyId.to.map((e) =>
                    <option value={e.id}>{e.name}</option>
                  )}

                </select>
              </Col>
            </Row>

            <Row className="firstRow">
              <Col md="3">
                <label for="Notes">Notes</label>
                <input
                  type="text"
                  {...register('Notes', {

                  })}
                />
              </Col>


              <Col md="3">
                <label for="product name">Product Name</label>
                <input
                  type="text"
                  {...register('ProductName', {
                    required: true


                  })}


                />
                <p className="para">
                  {errors.ProductName && "Password is required*"}
                </p>


              </Col>

              <Col md="3">
                <label for="Quantity">Quantity</label>
                <input
                  type="text"
                  {...register('quantity', {
                    required: true


                  })}
                />
                <p className="para">
                  {errors.quantity && "Password is required*"}
                </p>

              </Col>

              <Col md="3">
                <label for="dueDate">Due Date</label>
                {/* <Controller name="due_date" control={control} defaultValue={null}
                  render={
                    ({onChange, value})=><DatePicker   onChange={onChange} selected={value}
                    
                    placeholderText="select date" />

                  }
                  />  */}


                {<Controller name="dueDate" control={control} defaultValue={null}
                  render={
                    (p) => {
                      console.log(`onChange, value`, p.fields)
                      return <DatePicker selected={p.field.value}
                        placeholderText="select date   " onChange={p.field.onChange} />

                    }

                  }
                />
                }


              </Col>
            </Row>


            <Row className="firstRow">
              <Col md="4">
                <label for="description">Description</label>
                <input
                  type="text"
                  {...register('Description', {

                  })}
                />
              </Col>

              <Col md="4">
                <label for="price">Price</label>
                <input
                  type="number"
                  {...register('unitPrice', {
                    required: true

                  })}
                />

                <p className="para">
                  {errors.unitPrice && "Password is required*"}
                </p>

              </Col>


              <Col md="4">
                <label for="Total">Total</label>
                <input
                  type="number"
                  {...register('total', {
                    required:true

                  })}

                  
                />
                  <p className="para">
                      {errors.total && "Password is required*"}
                    </p>
                
                </Col>

              {/* <Col md="3">
                <label for="mode of payment">Mode of Payment</label>
                <select {...register("Payment of Method")} className="select">
                  <option value="UPI">UPI</option>
                  <option value="Net banking">Net Banking</option>
                  <option value="Debit Card">Debit Card</option>
                </select>
              </Col> */}

            </Row>
            {/* 
            <Row className="first">
              <Col md="3">
                <label for="gst number">GST Number</label>
                <input type="text" onChange={change} name="gstNumber" value={initial.gstNumber} />
              </Col>
              <Col md="3">
                <label for="tax">Tax</label>
                <input type="text" onChange={change} name="tax" value={initial.tax} /></Col>
             
              <Col md="3">
                <label for="notes">Notes</label>
                <input type="text" onChange={change} name="notes" value={initial.notes} />
              </Col>
            </Row> */}
            <Row className="firstRow">

              <Col md="4">
                <label for="status">Status</label>
                <select {...register("status",{required:true})} className="select">
                  <option value="pending">Pending</option>
                  <option value="underReview">Under Review</option>
                  <option value="approved">Approved</option>
                </select>

                <p className="para">
                      {errors.status && "Password is required*"}
                    </p>
              </Col>


            </Row>
              
         {/*mapping newly created data */}

         {/* {addMore.items.map((e) => (
              <Row className="first">
                <Col md="3">
                  <label for="product name">Product Name</label>
                  <input
                    type="text"
                    {...register("ProductName", {
                      max: 3,
                    })}
                  />{" "}
                </Col>

                <Col md="3">
                <label for="Quantity">Quantity</label>
                <input
                  type="text"
                  {...register("quantity", {
                    max: 3,
                  })}
                />
              </Col>

                  <Col md="4">
                <label for="description">Description</label>
                <input
                  type="text"
                  {...register('Description', {

                  })}
                />
              </Col>

              <Col md="4">
                <label for="price">Price</label>
                <input
                  type="number"
                  {...register('unitPrice', {

                  })}
                />
              </Col>


              <Col md="4">
                <label for="Total">Total</label>
                <input
                  type="number"
                  {...register('total', {

                  })}
                /></Col>   




              </Row>
            ))} */}









            <Row className="firstRow">
              <Col className="button-column"  >
                <button className="addnew-btn" onClick={logoutFun}><i class="far fa-plus-square"> logout </i></button>
              </Col>

            </Row>

            {/* <Row className="firstRow">
              <Col className="button-column"  >
                <button className="addnew-btn" onClick={ addItems}><i class="far fa-plus-square"> Add More </i></button>
              </Col>

            </Row> */}



            <Row className="firstRow">
              <Col className="button-column"  >
                <button className="submit-btn" >SUBMIT</button>
              </Col>

            </Row>

          </form>
        </div>
      </Container>

    </>
  )
}

export default Form
