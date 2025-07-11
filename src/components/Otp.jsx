import { SubOtpComp } from './SubOtpComp'

import { useRef } from 'react'
export const Otp = ({ onInput }) => {
   const ref = useRef([])
   return (
      <div className="flex justify-center ">
         <SubOtpComp onInput={onInput} />
         <SubOtpComp />
         <SubOtpComp />
         <SubOtpComp />
         <SubOtpComp />
         <SubOtpComp />
      </div>
   )
}
