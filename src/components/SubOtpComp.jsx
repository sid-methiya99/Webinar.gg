import { useState } from 'react'

export const SubOtpComp = ({ reference, onDone, goBack }) => {
   const [input, setInput] = useState('')

   const onInput = (e) => {
      const value = e.target.value.slice(0, 1)
      setInput(value)
      if (value) {
         onDone()
      }
   }

   const onKeyDown = (e) => {
      if (e.key === 'Backspace') {
         if (input === '') {
            // If input is already empty, go back to previous field
            goBack()
         } else {
            // If input has value, clear it
            setInput('')
         }
      }
   }

   return (
      <div className="flex justify-center mr-1">
         <input
            type="number"
            min="0"
            max="9"
            ref={reference}
            className="h-[50px] w-[40px] bg-blue-500 rounded-xl text-center appearance-none 
             [&::-webkit-outer-spin-button]:appearance-none 
             [&::-webkit-inner-spin-button]:appearance-none 
             [moz-appearance:textfield]
       outline-none text-white"
            onInput={onInput}
            onKeyDown={onKeyDown}
            value={input}
         />
      </div>
   )
}
