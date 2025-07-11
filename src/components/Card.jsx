import '../index.css'
import Logo from '../assets/loginLogo.svg'
import { Input } from './Input'
import { Button } from './Button'
import { useEffect, useState } from 'react'

export const Card = ({ step, title, guide, placeholder, onContinue }) => {
   const [value, setValue] = useState('')
   const isDisabled = value.trim() === ''

   const handleChange = (e) => {
      setValue(e.target.value)
   }

   const onSubmit = () => {
      onContinue(value)
      setValue('')
   }

   return (
      <div className="flex justify-center pt-12 ">
         <div className="flex justify-center flex-col">
            <img src={Logo} alt="Hello" style={{ height: '40px' }} />
            <h2 className="mt-15 text-center text-white text-2xl font-medium">
               {title}
            </h2>
            <p className="text-[14px] text-gray-100 mt-10">{guide}</p>
            <Input
               placeholder={placeholder}
               onChange={handleChange}
               value={value}
            />
            <Button
               title={'Continue'}
               disabled={isDisabled}
               onClick={onSubmit}
            />
         </div>
      </div>
   )
}
