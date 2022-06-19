import React from 'react'
import '../Components/Style.css'

const BasicInput = ({
    label,
    color,
    value,
    type,
    size,
    placeholder,
    isError,
    onChange,
    ...props
}) => {
  return (
    <div className='Main__body'>
        <form className='Form'>
        <label className='label'>{label}</label>

        <input
        value={value}
        className={`input ${color} ${size} ${isError && 'is-danger'}`}
        type={type} 
        placeholder={placeholder}
        onChange={onChange}
        {...props}
        />
        </form>
    </div>
  )
}

export default BasicInput