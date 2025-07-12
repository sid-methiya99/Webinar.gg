import { SubOtpComp } from './SubOtpComp'
import { useRef, useState } from 'react'

export const Otp = ({ onInput, number }) => {
   const ref = useRef(Array(number).fill(0))
   const [disabled, setDisabled] = useState(0)

   return (
      <div className="flex justify-center flex-col items-center">
         <div className="flex justify-center">
            {Array.from({ length: number }).map((x, index) => (
               <SubOtpComp
                  key={index}
                  onInput={onInput}
                  reference={(e) => (ref.current[index] = e)}
                  onDone={() => {
                     if (index + 1 >= number) {
                        return
                     }
                     ref.current[index + 1].focus()
                     setDisabled(index + 1)
                  }}
                  goBack={() => {
                     console.log(index)
                     if (index === 0) {
                        return
                     }
                     ref.current[index - 1].focus()
                     setDisabled(index - 1)
                  }}
                  onFocus={() => setDisabled(index)}
                  onClear={() => {
                     // When clearing, stay on the same index
                     setDisabled(index)
                  }}
                  index={index}
                  number={number}
               />
            ))}
         </div>
         <div>
            <button
               type="button"
               className={`mt-8 ${disabled === 0 ? 'bg-blue-200 text-white' : 'bg-green-400 text-black'} px-1 py-2 rounded text-sm w-[300px] ml-6`}
            >
               Verify
            </button>
         </div>
      </div>
   )
}
