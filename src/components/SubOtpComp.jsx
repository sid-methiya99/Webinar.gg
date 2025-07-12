// SubOtpComp.jsx
import { useOtpStore } from '../state/useOtpStore.js'

export const SubOtpComp = ({ reference, onDone, goBack, index }) => {
   const otp = useOtpStore((s) => s.otp[index]) // only this digit
   const setDigit = useOtpStore((s) => s.setDigit)
   const clear = useOtpStore((s) => s.clearDigit)

   // ② Handle input
   const handleInput = (e) => {
      const digit = e.target.value.slice(0, 1)
      setDigit(index, digit) // ← Zustand setter (safe)

      if (digit) onDone()
   }

   // ③ Handle backspace
   const handleKeyDown = (e) => {
      if (e.key !== 'Backspace') return

      if (otp === '') {
         goBack() // jump to previous box
      } else {
         clear(index) // clear current digit
      }
   }

   return (
      <div className="flex justify-center mr-1">
         <input
            ref={reference}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            value={otp || ''}
            onInput={handleInput}
            onKeyDown={handleKeyDown}
            className="h-[50px] w-[40px] bg-blue-500 rounded-xl text-center
                   text-white outline-none appearance-none
                   [&::-webkit-outer-spin-button]:appearance-none
                   [&::-webkit-inner-spin-button]:appearance-none
                   [moz-appearance:textfield]"
         />
      </div>
   )
}
