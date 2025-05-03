const Input = ({ label, type = "text", value, onChange, placeholder, className = "", ...props }) => (
    <div className="mb-4">
      {label && <label className="block mb-1 text-sm font-medium">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200 ${className}`}
        {...props}
      />
    </div>
  );
  
  export default Input;
  