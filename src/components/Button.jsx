export const Button = ({ title, disabled, onClick }) => {
   return (
      <button
         type="button"
         className={`mt-8 ${disabled ? 'bg-blue-200' : 'bg-green-400'} px-1 py-2 rounded text-white text-sm w-[300px] ml-6`}
         onClick={onClick}
      >
         {title}
      </button>
   )
}
