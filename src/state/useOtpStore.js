// src/store/useOtpStore.js
import { create } from 'zustand'

export const useOtpStore = create((set) => ({
   otp: ['', '', '', '', '', ''], // 6‑digit OTP by default
   setDigit: (index, value) =>
      set((state) => {
         const next = [...state.otp]
         next[index] = value
         return { otp: next }
      }),
   clearDigit: (index) =>
      set((state) => {
         const next = [...state.otp]
         next[index] = ''
         return { otp: next }
      }),
}))
