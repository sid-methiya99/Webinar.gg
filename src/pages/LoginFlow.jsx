import { useState } from 'react'
import { Card } from '../components/Card'

export const LoginFlow = () => {
   const [step, setStep] = useState(1)
   const [year, setYear] = useState('')
   const [email, setEmail] = useState('')

   const handleContinue = (value) => {
      if (step === 1) {
         console.log(step)
         setYear(value)
         setStep(2)
      } else if (step === 2) {
         setEmail(value)
      }
   }
   return (
      <Card
         title={'Verify Your Age'}
         guide={
            step === 1
               ? 'Please confirm your birth year. This data will not be stored'
               : ''
         }
         placeholder={step === 1 ? 'Your Birth Year' : 'Enter your email'}
         onContinue={handleContinue}
         step={step}
      />
   )
}
