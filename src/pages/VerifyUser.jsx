import { useLocation } from 'react-router-dom'
import { Card } from '../components/Card'

export const VerifyUser = ({}) => {
   const { state } = useLocation()
   const email = state?.email || ''
   console.log('Hello', email)

   const onInput = (e) => {
      console.log(e.target.value)
      e.target.value = e.target.value.slice(0, 1)
   }

   return (
      <Card
         title={'Check Your Email For A Code'}
         guide={
            <span>
               Please enter the verification code sent to your email id{' '}
               <span className="font-bold text-blue-600">{email}</span>
            </span>
         }
         step={'otp'}
         onInput={onInput}
      />
   )
}
