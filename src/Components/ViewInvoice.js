import React from 'react'
const ViewInvoice = ({location}) => {
    return (
        <>
            <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <title>Invoice</title>
        <style dangerouslySetInnerHTML={{__html: "\n      body {\n        font-family: \"Montserrat\", sans-serif;\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n      }\n​\n      .bg-set {\n        background-image: url();\n        background-size: cover;\n      }\n    " }} />
        <div className="bg-set">
          <div className="content" style={{padding: '0px 10px'}}>
            <div className="title-head">
              <h1 style={{margin: '0px', paddingTop: '21px', textTransform: 'uppercase', color: '#085394', fontSize: '70px'}}>
                invoice
              </h1>
              <div className="tittle" style={{display: 'flex', justifyContent: 'space-between'}}>
                <p style={{fontSize: '22px'}}>
                  From: {location.state.from} <br />{location.state.address}
                  <br />{location.state.state}
                </p>
                <p style={{fontSize: '20px', textTransform: 'uppercase'}}>
                  invoice # kmit-1234
                </p>
              </div>
            </div>
            {/*------bill---*/}
            <div className="section" style={{display: 'flex', paddingTop: '2em', justifyContent: 'space-between'}}>
              <div className="head">
                <h4 style={{textTransform: 'uppercase', color: '#085394', fontSize: '16px', margin: 0, fontWeight: 400}}>
                  To:&lt;%=data.to.companyName%&gt; <br />&lt;%=data.to.address%&gt;
                  <br />&lt;%=data.to.state%&gt;
                </h4>
              </div>
              <div className="head">
                <h4 style={{textTransform: 'uppercase', color: '#085394', fontSize: '16px', margin: 0, fontWeight: 400}} />
              </div>
              <div className="head" style={{lineHeight: '33px'}}>
                <h4 style={{textTransform: 'uppercase', color: '#085394', fontSize: '16px', fontWeight: 400, margin: 0}}>
                  Invoice #
                </h4>
                <h4 style={{textTransform: 'uppercase', color: '#085394', fontSize: '16px', margin: 0, fontWeight: 400}}>
                  invoice date
                </h4>
                <h4 style={{textTransform: 'uppercase', color: '#085394', fontSize: '16px', fontWeight: 400, margin: 0}}>
                  status
                </h4>
                <h4 style={{textTransform: 'uppercase', color: '#085394', fontSize: '16px', fontWeight: 400, margin: 0}}>
                  Due date
                </h4>
              </div>
              <div className="head">
              <h4 style={{textTransform: 'uppercase', fontWeight: 400, margin: 0}}>data._id </h4>
                <p style={{textTransform: 'uppercase', fontWeight: 400}}>
                  &lt;%=data.createdAt%&gt;
                </p>
                <p style={{textTransform: 'uppercase', fontWeight: 400}}>
                  &lt;%=data.status%&gt;
                </p>
                <p style={{textTransform: 'uppercase', fontWeight: 400}}>
                  &lt;%=data.dueDate%&gt;
                </p>
              </div>
            </div>
            {/*-----table---*/}
            <table style={{paddingTop: '40px', tableLayout: 'fixed', width: '100%', borderSpacing: 0}}>
              <thead>
                <tr>
                  <th style={{textTransform: 'uppercase', color: '#085394', padding: '10px 20px', fontSize: '21px', textAlign: 'start', borderTop: '2px solid #83D0BF', borderBottom: '2px solid #83D0BF'}}>
                    qty
                  </th><th style={{textTransform: 'uppercase', color: '#085394', padding: '10px 20px', fontSize: '21px', textAlign: 'start', borderTop: '2px solid #83D0BF', borderBottom: '2px solid #83D0BF'}}>
                    product
                  </th><th style={{textTransform: 'uppercase', color: '#085394', padding: '10px 20px', fontSize: '21px', textAlign: 'start', borderTop: '2px solid #83D0BF', borderBottom: '2px solid #83D0BF'}}>
                    description
                  </th>
                  <th style={{textTransform: 'uppercase', color: '#085394', padding: '10px 20px', fontSize: '21px', textAlign: 'left', borderTop: '2px solid #83D0BF', borderBottom: '2px solid #83D0BF'}}>
                    unit price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{textAlign: 'start', padding: '11px 31px'}}>
                    &lt;%=data.items[0].quantity%&gt;
                  </td>
                  <td style={{textAlign: 'start', padding: '17px 21px'}}>
                    &lt;%=data.items[0].productName%&gt;
                  </td>
                  <td style={{textAlign: 'start', padding: '17px 21px'}}>
                    &lt;%=data.items[0].description%&gt;
                  </td>
                  <td style={{textAlign: 'left', paddingLeft: '57px'}}>
                    &lt;%=data.items[0].unitPrice%&gt;
                  </td>
                </tr><tr>
                  <td style={{borderTop: '2px solid #83D0BF'}} />
                  <td style={{borderTop: '2px solid #83D0BF'}} />
                  <td style={{textTransform: 'uppercase', borderTop: '2px solid #83D0BF', color: "#085394", fontSize: '17px', textAlign: 'start', padding: '10px 20px', fontWeight: 700}}>
                    Total
                  </td>
                  {/* <td style={{textTransform: 'uppercase', borderTop: '2px solid #83D0BF', color: "#085394",
                fontSize: '17px', padding: '10px 47px', fontWeight: 700}}>
                    <i className="fa fa-inr" aria-hidden="true" style={{fontSize: '14px'}} />
                    data.items[0];
                  </td> */}
                </tr>
              </tbody>
            </table>
            {/*-bottm--*/}
            <div className="head">
              <h4 style={{color: '#085394', fontSize: '20px', margin: 0, fontWeight: 400}}>
                Terms &amp; Conditions
              </h4>
            </div>
          </div>
        </div>
        ​</div>
        </>
    )
}
export default ViewInvoice;