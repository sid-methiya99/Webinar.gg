export const Input = ({ placeholder, onChange, value }) => {
   return (
      <input
         type="text"
         className="h-[50px] w-[300px]  mt-4 ml-6 pl-4 bg-blue-500 rounded-xl text-xs text-gray-200 outline-none"
         placeholder={placeholder}
         onChange={onChange}
         value={value}
      />
   )
}
