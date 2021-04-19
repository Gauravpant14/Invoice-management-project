import React,{useState} from 'react';
import Select from 'react-select';

const options = [
  { value: 'UPI', label: 'UPI' },
  { value: 'Debit Card', label: 'Debit Card' },
  { value: 'Credit card', label: 'Creadit Card' },
];

const IvSelect=()=>{
    const[result,handlervalue]=useState(options.label);
    const change=(e)=>
    {
       
        console.log(e.label)



    }
    
  
    
    return (

        <>
      <Select
        // value={selectedOption}
        // onChange={this.handleChange}
   
        options={options} onChange={change}
        
       
     
      />
      </>
    );
  }
export default IvSelect