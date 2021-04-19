import React from 'react'

const ViewInvoice = ({location}) => {
    return (
        <>
            <div>
                hello from   {location.state.from}
                <br/>
                to {location.state.to}
            </div>
        </>
    )
}

export default ViewInvoice
