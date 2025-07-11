export const OtpComp = ({ onInput }) => {
   return (
      <div className="flex justify-center">
         <input
            type="number"
            min="0"
            max="9"
            className="h-[50px] w-[40px] bg-blue-500 rounded-xl text-center appearance-none 
             [&::-webkit-outer-spin-button]:appearance-none 
             [&::-webkit-inner-spin-button]:appearance-none 
             [moz-appearance:textfield]
       outline-none text-white"
            onInput={onInput}
         />
      </div>
   )
}
