import { useLocation } from 'react-router-dom'
import Logo from '../assets/loginLogo.svg'
import { Otp } from '../components/Otp'

export const VerifyUser = ({}) => {
   const { state } = useLocation()
   const email = state?.email || ''

   return (
      <div className="flex justify-center items-center min-h-screen px-4">
         <div className="flex flex-col items-center w-full max-w-md">
            <img src={Logo} alt="Hello" className="h-10 mb-6" />
            <h2 className="text-center text-white text-2xl font-medium mb-6">
               Check Your Email For A Code
            </h2>
            <div className="min-h-[60px] flex items-center justify-center mb-4">
               <p className="text-[14px] text-gray-100 text-center max-w-[500px]">
                  <span>
                     Please enter the verification code sent to your email id{' '}
                     <span className="font-bold text-gray-100">{email}</span>
                  </span>
               </p>
            </div>
            <div>
               <Otp number={6} />
            </div>
         </div>
      </div>
   )
}
