const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
          <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-black">×</button>
          {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
          <div>{children}</div>
        </div>
      </div>
    );
  };
  
  export default Modal;
  