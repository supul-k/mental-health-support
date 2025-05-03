const Button = ({ children, type = "button", onClick, variant = "primary", className = "" }) => {
    const base = "px-4 py-2 rounded font-medium focus:outline-none transition";
    const variants = {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "bg-gray-200 text-black hover:bg-gray-300",
      danger: "bg-red-600 text-white hover:bg-red-700",
    };
  
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${base} ${variants[variant]} ${className}`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  