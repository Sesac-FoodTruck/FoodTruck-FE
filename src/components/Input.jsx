import React from 'react';

export default function Input({label, setState}) {

    const handleChange = (e) =>{
        setState(e.target.value)
    }

    return (
        <form action="" className='my-4'>
        <label htmlFor="" className='font-bold'>{label}</label>
        <input type="text" className='w-full border-b-1 border-black' placeholder={`${label}을 적어주세요`}  onBlur={(e)=>handleChange(e)}/>
        </form>
    );
}
