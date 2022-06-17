import React from 'react'
import './Components/InputForm.css'

function InputForms(props) {
  return (
    <div>
         <input
              className="Modal__Inputs"
              type={props.type}
              placeholder={props.placeholder}
              value={props.value}
              onChange={props.onChange}
            //   onChange={(e) => setFullname(e.target.value)}
            />
    </div>
  )
}

export default InputForms