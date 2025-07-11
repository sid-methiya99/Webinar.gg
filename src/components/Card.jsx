import '../index.css'
import Logo from '../assets/loginLogo.svg'
import { Input } from './Input'
import { Button } from './Button'
import { useEffect, useState } from 'react'

export const Card = ({
   step,
   title,
   guide,
   placeholder,
   onContinue,
   children,
   onInput,
}) => {
   const [value, setValue] = useState('')
   const isDisabled = value.trim() === ''

   const handleChange = (e) => {
      setValue(e.target.value)
   }

   console.log(step)
   const onSubmit = () => {
      onContinue(value)
      setValue('')
   }

   return (
      <div className="flex justify-center items-center min-h-screen px-4">
         <div className="flex flex-col items-center w-full max-w-md">
            <img src={Logo} alt="Hello" className="h-10 mb-6" />

            <h2 className="text-center text-white text-2xl font-medium mb-6">
               {title}
            </h2>

            {guide ? (
               <div className="min-h-[60px] flex items-center justify-center mb-4">
                  <p className="text-[14px] text-gray-100 text-center max-w-[500px]">
                     {guide}
                  </p>
               </div>
            ) : (
               <></>
            )}

            <Input
               placeholder={placeholder}
               onChange={handleChange}
               value={value}
               onInput={onInput}
            />

            <Button
               title={'Continue'}
               disabled={isDisabled}
               onClick={onSubmit}
            />
         </div>
         {children}
      </div>
   )
}
